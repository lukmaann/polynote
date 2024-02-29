import { UserButton } from "@clerk/nextjs"

const Page=()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <UserButton/>
        </div>
    )
}

export default Page;