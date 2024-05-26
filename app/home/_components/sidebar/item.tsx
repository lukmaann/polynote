"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Hint from "../hint";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";

interface ItemProps {
    id: string,
    imageUrl: string,
    name: string
}


const Item = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const setOrganization = () => {
        if (!setActive) return;
        setActive({ organization: id });
    }




    return (
        <div className="aspect-square relative ">
            <Hint label={name} side="right" sideOffset={18}>
                <Image src={imageUrl} alt={name} fill
                    onClick={setOrganization}
                    className={cn("transition cursor-pointer  opacity-70 hover:opacity-100 rounded-md ", isActive && "opacity-100")}
                />
            </Hint>
        </div>
    )
}

export default Item;