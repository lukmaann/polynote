import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/nextjs';
import { useState } from 'react';
import { useFormik, FormikErrors } from 'formik';
import { z } from 'zod';
import { Send, Mail, Crown, User, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const InviteMemberSchema = z.object({
  emailAddress: z.string().email('Invalid email address').nonempty('Email required!'),
});

interface InviteMemberFormValues {
  emailAddress: string;
}

function InviteMember() {
  const { organization, isLoaded } = useOrganization();
  const [role, setRole] = useState<'org:member' | 'org:admin'>('org:member');
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
    initialValues: { emailAddress: '' },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      if (!organization || !isLoaded) {
        return;
      }

      setSubmitting(true);
      try {
        await organization.inviteMember({ emailAddress: values.emailAddress, role });
        toast.success("Invitation sent successfully!");
        setInviteSuccess(true);
        
        // Reset after showing success
        setTimeout(() => {
          resetForm();
          setRole('org:member');
          setInviteSuccess(false);
        }, 2000);
      } catch (error) {
        console.log(error);
        toast.error("Failed to send invitation. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center gap-2 text-gray-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {inviteSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Invitation Sent!</h3>
          <p className="text-sm text-gray-400">
            We've sent an invitation to {formik.values.emailAddress}
          </p>
        </div>
      ) : (
        <div className="p-6">
          {inviteSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Invitation Sent!</h3>
              <p className="text-sm text-gray-400">
                We've sent an invitation to {formik.values.emailAddress}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="colleague@company.com"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-10 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.emailAddress && formik.errors.emailAddress && (
                  <p className="text-sm text-red-400">{formik.errors.emailAddress}</p>
                )}
              </div>

              {/* Role Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('org:member')}
                    className={`p-3 rounded-lg border transition-all text-left ${
                      role === 'org:member'
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Member</span>
                    </div>
                    <p className="text-xs opacity-80">Can view and edit content</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('org:admin')}
                    className={`p-3 rounded-lg border transition-all text-left ${
                      role === 'org:admin'
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Crown className="w-4 h-4" />
                      <span className="font-medium">Admin</span>
                    </div>
                    <p className="text-xs opacity-80">Full workspace control</p>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid || !formik.values.emailAddress}
                onClick={() => formik.handleSubmit()}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending Invitation...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Invitation
                  </>
                )}
              </Button>

              {/* Info Note */}
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-200">
                    <p className="font-medium mb-1">How it works:</p>
                    <p className="text-blue-300/80">
                      We'll send an email invitation with a link to join your workspace. 
                      They can accept and start collaborating immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InviteMember;