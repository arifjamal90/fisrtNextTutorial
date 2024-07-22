
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

const router= useRouter()
const navigate= (page)=>{
   router.push("/about"+ page)
}


  return (
    <main className="flex-col min-h-screen text-2xl font-bold gradient-radial">
      Home page
      <p>afbdfbdsfdbfdhf</p>
      <button onClick={()=>alert('hello')}>Click me</button> <br /><br />
    <Link href='/about/aboutstudent'> go to about student</Link>


    <button onClick={()=>navigate("/aboutstudent")}>go to to student </button>
  
    </main>
  );
}




