'use client'

import { useUser } from "@clerk/nextjs"
import {  AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./avatar";



function Postform() {

const {user}=useUser();

  return (
    <div>
<form action="">
  <div className="flex items-center space-x-2">
  <Avatar>

    <AvatarImage src={user?.imageUrl}/>
    <AvatarFallback>
{user?.firstName?.charAt(0)}
{user?.lastName?.charAt(0)}
    </AvatarFallback>
  </Avatar>
  
  </div>

</form>

    </div>
  )
}

export default Postform