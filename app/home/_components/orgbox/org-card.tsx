"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface OrgCardProps {
  id: string;
  imageUrl: string;
  name: string;
}

const OrgCard = ({ id, name, imageUrl }: OrgCardProps) => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const setOrganization = async () => {
    if (!setActive) return;

    try {
      await setActive({ organization: id });
      router.push("/home");
    } catch (err) {
      console.error("Failed to set active org:", err);
    }
  };

  return (
    <div
      onClick={setOrganization}
      className={cn(
        "group w-full sm:w-[45%] md:w-[30%] lg:w-[200px] flex flex-col items-center justify-center gap-3 p-6 hover:border-purple-400 rounded-lg text-white shadow-sm hover:shadow-md cursor-pointer border-2 transition-all aspect-square max-w-full",
      )}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="text-center">
        <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-sm">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default OrgCard;
