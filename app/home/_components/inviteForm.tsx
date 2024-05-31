import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/nextjs';
import { useState } from 'react';
import { useFormik, FormikErrors } from 'formik';
import { z } from 'zod';
import { Send, SendHorizonal } from 'lucide-react';
import { toast } from 'sonner';

const InviteMemberSchema = z.object({
  emailAddress: z.string().email('Invalid email address').nonempty('Email required!!'),
});

interface InviteMemberFormValues {
  emailAddress: string;
}

function InviteMember() {
  const { organization, isLoaded } = useOrganization();
  const [role, setRole] = useState<'org:member' | 'org:admin'>('org:member');

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
        return <>Loading</>;
      }

      setSubmitting(true);
      try {
        await organization.inviteMember({ emailAddress: values.emailAddress, role });
        toast.success("Invitation sent");

        resetForm();
        setRole('org:member');
      } catch (error) {
        console.error("Error inviting member:", error); // Improved error logging
        
        toast.error("Failed to send invitation. Please check the console for more details.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-full gap-3 p-4 max-w-md mx-auto mt-[20px]">
      <input
        type="email"
        name="emailAddress"
        placeholder="Email address"
        className="p-2 w-full border rounded-md"
        value={formik.values.emailAddress}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.emailAddress && formik.errors.emailAddress ? (
        <div className="text-red-500">{formik.errors.emailAddress}</div>
      ) : null}
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setRole('org:admin')}
          className={`w-1/2 p-2 text-center ${role === 'org:admin' ? 'bg-purple-400 hover:bg-purple-400 text-white' : 'border'}`}
        >
          Admin
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setRole('org:member')}
          className={`w-1/2 p-2 text-center ${role === 'org:member' ? 'bg-purple-400 hover:bg-purple-400 text-white' : 'border'}`}
        >
          Member
        </Button>
      </div>
      <Button
        variant="ghost"
        type="submit"
        className="bg-black text-white p-2 mt-4 rounded-md gap-2"
        disabled={formik.isSubmitting || !formik.isValid}
      >
        Invite <SendHorizonal size={15}/>
      </Button>
    </form>
  );
}

export default InviteMember;
