"use client";

import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { useState } from "react";
import { useFormik, FormikErrors } from "formik";
import { z } from "zod";
import { Send, Mail, Crown, User, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const InviteMemberSchema = z.object({
  emailAddress: z
    .string()
    .email("Invalid email address")
    .nonempty("Email required!"),
});

interface InviteMemberFormValues {
  emailAddress: string;
}

export default function InviteMember() {
  const { organization, isLoaded } = useOrganization();
  const [role, setRole] = useState<"org:member" | "org:admin">("org:member");
  const [inviteSuccess, setInviteSuccess] = useState(false);

  const validate = (values: InviteMemberFormValues): FormikErrors<InviteMemberFormValues> => {
    try {
      InviteMemberSchema.parse(values);
    } catch (e: any) {
      const errors: FormikErrors<InviteMemberFormValues> = {};
      for (const issue of e.errors) {
        errors[issue.path[0] as keyof InviteMemberFormValues] = issue.message;
      }
      return errors;
    }
    return {};
  };

  const formik = useFormik<InviteMemberFormValues>({
    initialValues: { emailAddress: "" },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      if (!organization || !isLoaded) return;

      setSubmitting(true);
      try {
        await organization.inviteMember({ emailAddress: values.emailAddress, role });
        toast.success("Invitation sent successfully!");
        setInviteSuccess(true);
        setTimeout(() => {
          resetForm();
          setRole("org:member");
          setInviteSuccess(false);
        }, 1800);
      } catch {
        toast.error("Failed to send invitation. Try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-lg p-5 shadow-xl">
        {inviteSuccess ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="w-10 h-10 text-green-500 mb-2" />
            <p className="text-sm text-gray-300">Sent to <span className="text-white font-medium">{formik.values.emailAddress}</span></p>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="email@company.com"
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.emailAddress && formik.errors.emailAddress && (
                <p className="text-xs text-red-400 mt-1">{formik.errors.emailAddress}</p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setRole("org:member")}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  role === "org:member"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Member
              </button>

              <button
                type="button"
                onClick={() => setRole("org:admin")}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  role === "org:admin"
                    ? "bg-purple-600 text-white"
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                Admin
              </button>
            </div>

            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid || !formik.values.emailAddress}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-2 text-sm rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-1.5" />
                  Invite
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}