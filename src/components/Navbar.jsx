import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-poppins flex items-center justify-between gap-10 py-5 px-10 absolute top-0 w-full">
      <img src="/Z-Logo-2 1.png" className="h-[50px]" />

      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
      </div>
    </nav>
  );
}
