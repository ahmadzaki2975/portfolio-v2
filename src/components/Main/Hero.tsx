export default function Hero() {
  return (
    <section className="flex gap-10 min-h-screen justify-center items-center">
      <div className="mask-container relative h-fit">
        <div className="color-image bg-[url('/Zaki2023.jpg')] absolute w-full h-full bg-cover inset-0"></div>
        <img
          src="/Zaki2023-bw.jpg"
          alt="BnW Image"
          // width={300}
          // height={400}
          className="w-[300px]"
        />
      </div>

      <div className="font-poppins ">
        <h1 className="font-semibold text-[42px]">Ahmad Zaki Akmal</h1>
        <p className="text-[21px]">
          Information Engineering Student
          <br />
          Full Stack Developer
        </p>
      </div>
    </section>
  );
}
