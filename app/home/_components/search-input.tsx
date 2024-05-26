"use client";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
const SearchBar = () => {
    const router = useRouter();

    const [value, setValue] = useDebounceValue("", 600);
    const [v, setv] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value);
        setv(e.target.value);

    }

    useEffect(() => {

        const url = qs.stringifyUrl({
            url: "/home",
            query: {
                search: value
            }
        }, { skipEmptyString: true, skipNull: true })
        router.push(url);
    }, [value, router])
    return (

        <div className="w-full  relative">
            <Search className="absolute top-1/2  transform -translate-y-1/2 left-3 text-muted-foreground h-4 w-4 " size={20} />
            <Input className="w-full max-w-[500px] pl-9 " placeholder="Search Canvas" onChange={handleChange} value={v}

            />

        </div>
    )
}

export default SearchBar;