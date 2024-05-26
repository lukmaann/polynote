import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-center items-center  h-screen p-10 max-sm:p-0 bg-white rounded-none   ">

      <div className="w-[50%] max-sm:hidden">
        <Image width={500} height={500} src="/signup.jpg" alt="" className=" w-[90%] " />

      </div>

      <div className="w-[100%] lg:w-[50%] ">
        <SignUp

          appearance={{
            baseTheme: neobrutalism,
            elements: {
              
              card: "border-none shadow-none "
            },
            variables: {
              colorPrimary: "black",

            }
          }}


        />
      </div>

    </div>
  );
}