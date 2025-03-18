import { Card1 } from "@/components/card1";
import Image from "next/image";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";

export default function Home() {

  return (
    <div className="overflow-hidden">

      {/* sessão 1 - Nav */}
      <nav className=" w-96 h-20 align-baseline absolute mt-16 md:right-16 flex gap-2">

        <div className="item1 flex items-center justify-end w-44 bg-green-900 hover:bg-green-700 rounded-l-2xl p-2 cursor-pointer duration-300"> 
          <h3 className="pr-2">Home</h3> 
          <div className="border-l-2 border-dashed border-b-blue-50 ">
              <Image src="/home.png" width={40} height={40} alt="" className="ml-2" />
          </div>
        </div>

        <div className="item1 flex items-center justify-start w-44 bg-green-900 hover:bg-green-700 rounded-r-2xl p-2 cursor-pointer duration-300"> 
          <div className="border-r-2 border-dashed border-b-blue-50 ">
              <Image src="/works.png" width={40} height={40} alt="" className="mr-2" />
          </div>
          <h3 className="pl-2">Home</h3> 
        </div>

      </nav>

      {/* sessão 2 - home */}
      <section className=" bg-geral h-screen w-screen flex items-center justify-center">
        <div className="max-w-[1280px] flex flex-col justify-center items-center gap-20 md:flex-row ">
          <div className="flex flex-col w-[70%] ">
            <h2 className="text-green-500 text-xl mb-2 select-none">Olá, meu nome é</h2>
            <h1 className="text-slate-600 font-semibold text-5xl select-none">Sebastião Rodrigo</h1>
            <p className="text-xl mt-10 mb-10 tracking-wider md:w-[90%] text-justify select-none">
              Olá, sou um desenvolvedor front-end apaixonado por tecnologia. Com
              mais de <span className="text-slate-500 font-semibold">5 anos de experiência.</span> Meu objetivo é criar interfaces de
              usuário bonitas e funcionais, além de liderar equipes técnicas em
              projetos desafiadores. Estou sempre aberto a novas oportunidades e
              desafios tenho uma experiência inicial com backend.
            </p>
            <footer className="flex gap-2">
              <button className="bg-green-500 p-2 px-7 rounded-md mr-5 cursor-pointer hover:bg-green-600 duration-300 hover:scale-105">
                Entre em contato
              </button>
              <div className="btn-gruoup flex gap-5 items-center justify-center">
              <button>
                <BsWhatsapp size={25} className="cursor-pointer hover:scale-110 duration-300 hover:rotate-45" />
              </button>
              <button>
                <BsGithub size={25} className="cursor-pointer hover:scale-110 duration-300 hover:rotate-45" />
              </button>
              <button>
                <IoLogoYoutube size={28} className="cursor-pointer hover:scale-110 duration-300 hover:rotate-45" />
              </button>
              <button>
                <SiLinkedin size={25} className="cursor-pointer hover:scale-110 duration-300 hover:rotate-45" />
              </button>
              </div>
            </footer>
          </div>
          <div className="w-[30%]">
            <Image src="/perfil.png" width={600} height={300} alt="" className="rounded-r-4xl"/>
          </div>
        </div>
      </section>

      {/* sessão 3 - Certificados / Experiências */}
      <section className="bg-slate-900 h-screen w-screen flex items-center justify-center">
        <div className=" w-[1280px]">
          <div className="mb-10">
          <h2 className="text-white text-xl text-center mb-10">Meus Certificados e Experiências</h2>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="max-w-[200px] cursor-pointer hover:scale-150 duration-300">
              <Image src="/certificado-2.jpg" width={200} height={200} alt="" />
              <h3 className="text-white text-sm text-center">Certificado 1</h3>
            </div>
            <div className="max-w-[200px] cursor-pointer hover:scale-150 duration-300">
              <Image src="/certificado-2.jpg" width={200} height={200} alt="" />
              <h3 className="text-white text-sm text-center">Certificado 2</h3>
            </div>
          </div>
          </div>
        <Card1 />
        </div>
      </section>

      {/* sessão 4 - Destaques */}
      <section className="bg-green-950 h-screen w-screen"></section>

      {/* sessão 5 09 - Ultimos projetos */}
      <section className="bg-green-950 h-screen w-screen"></section>
    </div>
  );
}