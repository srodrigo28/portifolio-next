'use client'
import useEmblaCarousel from "embla-carousel-react"; // passo 1
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const services = [
  // passo 2
  {
    title: " 🌿 Ready to Open Your Heart and Transform Your Life? ",
    description:
      "❤️ Are you ready to open your heart, embrace new possibilities, and transform your life? Discover the power of change, self-love, and growth on your journey to a brighter future.",
    icon: "<Icon> /> " ,
  },
  {
    title: " 🌿 Ready to Open Your Heart and Transform Your Life?",
    description:
      "❤️ Are you ready to open your heart, embrace new possibilities, and transform your life? Discover the power of change, self-love, and growth on your journey to a brighter future.",
      icon: "<Icon> /> " ,
  },
  {
    title: " 🌿 Ready to Open Your Heart and Transform Your Life?",
    description:
      " ❤️ Are you ready to open your heart, embrace new possibilities, and transform your life? Discover the power of change, self-love, and growth on your journey to a brighter future.",
      icon: "<Icon> /> " ,
  },
  {
    title: " 🌿 Ready to Open Your Heart and Transform Your Life?",
    description:
      " ❤️ Are you ready to open your heart, embrace new possibilities, and transform your life? Discover the power of change, self-love, and growth on your journey to a brighter future.",
      icon: "<Icon> /> " ,
  }
];
export function Card1(){
      const [emblaRef, emblaApi] = useEmblaCarousel({ // passo 3
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
          "(min-width: 768)": { slidesToScroll: 2 },
        },
      });
    
      // passo 4 criando funções
      const scrollPrev = () => emblaApi?.scrollPrev();
      const scrollNext = () => emblaApi?.scrollNext();
    return(
        <div className="relative w-[1280px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/1)] px-3 md:w-full w-20"
              >
                <article className=" rounded-2xl space-y-4 h-full flex flex-col">
                  
                  <div className="flex-1 flex items-start justify-between flex-row">

                    <div className="flex flex-col flex-1">
                    <div className="flex flex-row items-center justify-between gap-3 mb-10 w-full px-10 p-3 rounded-t-lg">
                      <div>
                        <h3 className="text-xl md:3xl w-full">
                          {item.title}
                        </h3>
                      </div>
                      <span></span>
                    </div>

                    <div>
                      <p className="text-gray-400 text-md select-none px-8 py-10">
                        {item.description}
                      </p>

                    </div>
                    </div>

                    <div className="w-auto h-auto">
                      <Image src="/perfil.png" width={300} height={100} alt="" className="w-96 rounded-lg"/>
                    </div> 
                   
                  </div>
                  
                  
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-sky-100 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 cursor-pointer"
          onClick={scrollPrev} >
          <BiChevronLeft className="w-[2.2rem] h-[1.5rem] text-slate-400" />
        </button>

        <button className="bg-sky-100 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 cursor-pointer"
          onClick={scrollNext} >
          <BiChevronRight className="w-[2.2rem] h-[1.5rem] text-slate-400" />
        </button>
      </div>
    )
}