import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mask-container relative h-fit">
        <div className="color-image bg-[url('/Zaki2023.png')] absolute w-full h-full bg-cover inset-0"></div>
        <Image
          src="/Zaki2023-bw.png"
          alt="BnW Image"
          width={300}
          height={400}
        />
      </div>
    </main>
  );
}
