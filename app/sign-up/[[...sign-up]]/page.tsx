import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
 
export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen p-10 bg-black rounded-none  ">
      <SignUp

      appearance={{
        baseTheme:neobrutalism,
        elements:{
          form:"hidden"
        },
        variables:{
          colorPrimary:"black",
          
        }
      }}
      
      
      />

    </div>
  );
}