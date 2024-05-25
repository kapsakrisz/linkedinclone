import UserInformation from "@/components/UserInformation";
import Postform from "@/components/ui/Postform";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        <UserInformation  />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        
          <Postform />
        
        
      </section>

      <section className="hidden xl:inline justify-center col-span-2">
        
      </section>
    </div>
  );
}