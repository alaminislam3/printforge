import Image from "next/image";


export default function Home() {
  return (
    <div className="flex justify-between items-center mx-auto x-6 py-12 md:flex-row max-w-7xl">
     <div className="ml-[92px] space-y-2">
     <p className="text-[16px] font-medium">Your go-to platform for 3D printing files</p>
      <h2 className="font-bold text-5xl">Discover what’s <br /> possible with 3D <br /> printing</h2>
       <p className="text-2xl font-light">Join our community of creators and explore a <br /> vast library of user-submitted models.</p>
     <button className="mt-[10px] px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white">
      Browse Model 
     </button>
     </div>
     <div className="mr-[92px]">
     <Image src="/Frame 4.png" alt="hero" width={427} height={427}></Image>
     </div>
    </div>
  );
}
