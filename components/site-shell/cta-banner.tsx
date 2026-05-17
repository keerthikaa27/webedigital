import Link from "next/link";
import { Container } from "@/components/site-shell/container";
import Image from 'next/image';

export function CtaBanner() {
  return (
    <section className="relative bg-[#0a1428] min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background subtle dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_3.5px)] bg-[length:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[80vh]">

          {/* Left Column - Stack (top-left) + Main Image */}
          <div className="relative flex flex-col justify-start">

            {/* ── STACK: top-left corner, z-10 so image sits ON TOP ── */}
            <div className="absolute top-0 left-0 z-10">
              {/* Two product images, second overlapping the first */}
              <div className="relative w-[170px] h-[130px]">
               
                
              </div>
            </div>

            

            {/* Main Person Image – full left column height, sits ON TOP of stack (z-30) */}
            <div className="relative z-30 w-full h-full flex items-stretch mt-0">
              <div className="relative w-full" style={{ minHeight: '680px' }}>
                <Image
                  src="ctaphoto-removebg-preview.png"
                  alt="Professional man"
                  fill
                  className="object-cover object-top rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-center lg:text-left lg:pl-8 flex flex-col justify-center">
            <h1 className="text-white text-[4.2rem] lg:text-[5.2rem] leading-none font-bold tracking-tighter mb-6">
              Let&apos;s Work<br />Together
            </h1>

            <p className="text-white/80 text-[1.35rem] max-w-md mx-auto lg:mx-0 mb-10">
              Accelerate your online growth and work with a partner who truly values your goals.
            </p>

            <button className="bg-[#02bbfe] hover:bg-[#07024b] transition-all px-12 py-4 rounded-xl text-white font-semibold text-lg shadow-lg shadow-[#02bbfe]/40 w-fit mx-auto lg:mx-0">
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}