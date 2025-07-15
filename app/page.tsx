import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h2 className="font-medium text-2xl">No content is here Please check out main doctor list page.</h2>
      <Link href="/list-of-doctor" className="rounded-2xl text-center mt-5 mb-16 block mx-auto bg-slate-800 text-white py-4 px-10 text-base border-0"
      >Go to main page</Link></div>
  );
}