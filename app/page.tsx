import UserInformation from "@/components/UserInformation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid">

    <h1>
      <section>
        {/*user information*/}
        <UserInformation/>
      </section>

      <section>
        {/*postform*/}
        {/*postfeed*/}
      </section>

      <section>
        {/*widget*/}
      </section>
    </h1>
    
    </div>
  );
}
