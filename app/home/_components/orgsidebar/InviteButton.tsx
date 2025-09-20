import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Users, Mail, UserPlus, X } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Settings } from "lucide-react";
import InviteMember from "./inviteForm";
import InviteButtonTrigger from "./InviteButtonTrigger";

interface inviteButtonProps {
  collapsed: boolean;
}

const InviteButton = ({ collapsed }: inviteButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <InviteButtonTrigger collapsed={collapsed} />
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-0 max-sm:w-[90%] max-w-md overflow-hidden">
        {/* Header */}
        <DialogHeader className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 border-b border-gray-700 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <UserPlus className="w-4 h-4 text-white" />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold text-white">
                Invite Team Member
              </DialogTitle>
              <p className="text-sm text-gray-400">
                Add someone to your workspace
              </p>
            </div>
          </div>
        </DialogHeader>
        
        <InviteMember />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;