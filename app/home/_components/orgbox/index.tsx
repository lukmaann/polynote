"use client";

import { useOrganizationList } from "@clerk/nextjs";
import OrgCard from "./org-card";

const OrganizationBox = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-start w-full mt-6 px-4">
      {userMemberships.data.map((mem) => (
        <OrgCard
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </div>
  );
};

export default OrganizationBox;
