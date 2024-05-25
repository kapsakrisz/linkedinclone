'use client'

import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"



function Postform() {

const {user}=useUser();

  return (
    <div>
<form action="">
  <div>
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