import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
 
export default function Page() {
  return (
    <div className="flex justify-center items-center p-10 bg-black">
      <SignIn appearance={
        {
          baseTheme:neobrutalism,
          variables:{
            colorPrimary:"black"
          }
        
        
        
        
        }
      }/>
    </div>
  );
}