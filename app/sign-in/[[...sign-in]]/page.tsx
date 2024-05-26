import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-between items-center  h-[100vh] bg-white ">
      <div className="w-[50%] max-sm:hidden ">
        <img src="/signin.jpg" alt="" className=" w-[90%]" />

      </div>

      <div className="w-[50%] max-sm:w-full">
        <SignIn appearance={
          {
            baseTheme: neobrutalism,
            variables: {
              colorPrimary: "black",
            }
            ,
            elements: {
              card: "border-none shadow-none   "
            }
          }
        } />

      </div>

    </div>
  );
}