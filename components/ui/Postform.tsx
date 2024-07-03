'use client'

import { useUser } from "@clerk/nextjs"
import {  AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./avatar";
import { ImageIcon } from "lucide-react";
import { Button } from "./button";
import { useRef, useState } from "react";



function Postform() {
  const ref =useRef<HTMLFormElement>(null);
  const fileInputRef =useRef<HTMLInputElement>(null);

const {user}=useUser();
const [preview, setPreview] = useState<string|null>(null);
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setPreview(URL.createObjectURL(file));
  }
};


  return (
    <div>
<form ref={ref} action="">
  <div className="flex items-center space-x-2">
  <Avatar>

    <AvatarImage src={user?.imageUrl}/>
    <AvatarFallback>
{user?.firstName?.charAt(0)}
{user?.lastName?.charAt(0)}
    </AvatarFallback>
  </Avatar>
  <input 
  type="text"
  name="postInput"
  placeholder="Start writing a post..."
  className="flex-1 outline-none rounded-full py-3 px-4 border"/>
            <input
            
            ref={fileInputRef}
            type="file"
            name="image"
            accept="image/*"
            hidden
            onChange={handleImageChange}
            
          />
          <button type="submit" >
            post

          </button>
  
  </div>
  <div>
    <Button type="button" onClick={() =>fileInputRef.current?.click()}>
<ImageIcon className="mr-2" size={16} color="currentColor"/>
Add
    </Button>
  </div>

</form>

    </div>
  )
}

export default Postform