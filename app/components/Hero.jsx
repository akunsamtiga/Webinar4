"use client"
import React, { useState } from 'react';
import { 
  RocketIcon, 
  PlayCircleIcon, 
  Users2Icon, 
  SparklesIcon,
  CheckCircle2Icon,
  MenuIcon
} from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const previewItems = [
    {
      icon: <RocketIcon className="w-6 md:w-8 h-6 md:h-8 text-orange-600" />,
      title: "Pembicara Premium",
      description: "Founder & expert dari startup terkemuka",
      color: "orange"
    },
    {
      icon: <SparklesIcon className="w-6 md:w-8 h-6 md:h-8 text-amber-600" />,
      title: "Sesi Interaktif",
      description: "Workshop praktis & networking",
      color: "amber"
    },
    {
      icon: <Users2Icon className="w-6 md:w-8 h-6 md:h-8 text-red-600" />,
      title: "Komunitas Eksklusif",
      description: "Terhubung dengan talenta muda",
      color: "red"
    }
  ];

  const features = [
    "Materi Terkini & Praktis",
    "Sertifikat Resmi",
    "Akses Komunitas Seumur Hidup"
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-amber-100 
      py-8 md:py-18 lg:py-24 flex items-center overflow-hidden">

      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 md:w-40 h-24 md:h-40 
          bg-orange-200/40 rounded-3xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 md:w-56 h-32 md:h-56 
          bg-amber-200/40 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="flex mx-auto px-4 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Left */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3">
              <PlayCircleIcon className="w-8 h-8 text-orange-600 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-orange-800 tracking-wide uppercase">
                Webinar Transformasi Digital
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Ledakkan 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Potensi Digitalmu
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Perjalanan eksklusif untuk mengubah ide brilian menjadi peluang nyata. 
              Tingkatkan keterampilan, bangun jaringan, dan wujudkan impianmu di era digital.
            </p>

            {/* Preview Features */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4">
              {previewItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-2 md:p-4 border rounded-xl transition-all duration-300 group
                    ${activePreview === index 
                      ? `bg-white/80 shadow-lg scale-105 border-${item.color}-300` 
                      : 'bg-white/50 border-transparent hover:border-orange-200'}`}
                  onMouseEnter={() => setActivePreview(index)}
                  onMouseLeave={() => setActivePreview(null)}
                >
                  {item.icon}
                  <h3 className="mt-1 md:mt-2 font-bold text-xs md:text-sm text-gray-800">{item.title}</h3>
                  <p className="hidden md:block text-[10px] md:text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="pt-4 md:pt-6 space-y-2 md:space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 md:space-x-3">
                  <CheckCircle2Icon className="w-4 md:w-6 h-4 md:h-6 text-orange-600" />
                  <span className="text-xs md:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-2 md:space-x-4 pt-4 md:pt-8">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white 
                px-4 py-2 md:px-8 md:py-4 rounded-full hover:from-orange-700 hover:to-red-700 
                transition-all transform hover:scale-105 flex items-center space-x-2 md:space-x-3 
                shadow-lg shadow-orange-200/50 font-semibold text-xs md:text-base">
                <RocketIcon className="w-4 h-4 md:w-6 md:h-6" />
                <span>Daftar Sekarang</span>
              </button>
              <button className="border-2 border-orange-600 text-orange-600 
                px-3 py-2 md:px-7 md:py-4 rounded-full hover:bg-orange-50 
                transition-all transform hover:scale-105 
                flex items-center space-x-2 md:space-x-3 font-semibold text-xs md:text-base">
                <PlayCircleIcon className="w-4 h-4 md:w-6 md:h-6" />
                <span>Lihat Trailer</span>
              </button>
            </div>
          </div>

          {/* Illustration Right */}
          <div className="flex justify-center items-center relative">
            <div className="absolute w-72 md:w-[28rem] h-72 md:h-[28rem] 
              bg-white/20 backdrop-blur-md rounded-full animate-blob"></div>
            
            <div className="relative z-10 w-64 md:w-[450px] h-64 md:h-[450px] 
              rounded-xl overflow-hidden shadow-2xl 
              transform transition-transform hover:scale-105">
              <img 
                src="/images/webinar.jpg" 
                alt="Digital Transformation Webinar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/30 to-red-600/30"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;