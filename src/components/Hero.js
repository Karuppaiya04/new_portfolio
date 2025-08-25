import image from "../assets/kp.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-r from-[#232526] via-[#505050] to-[#232526] px-4 md:px-8 py-8"
    >
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 space-y-6 mb-8 md:mb-0 md:pl-40 md:pr-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-hero-font leading-tight drop-shadow-lg text-center md:text-left">
          Hi<span className="animate-wave inline-block origin-bottom">👋</span>,<br />
          <span className="block mt-2">
            I am <span className="text-[#09f4fc] bg-[#09f4fc22] px-2 rounded-lg shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl align-middle">Karuppaiya</span>
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl text-[#e0e0e0] font-medium mt-2">
            Full Stack Developer
          </span>
        </h1>
        <div className="flex flex-row gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl justify-center md:justify-start">
          <a
            href="https://x.com/Jack17151917"
            className="hover:text-[#09f4fc] transition-transform duration-300 hover:scale-110 bg-[#232526] p-2 sm:p-3 rounded-full shadow-lg"
            target="_blank" rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.instagram.com/mr_jack._20/"
            className="hover:text-[#e1306c] transition-transform duration-300 hover:scale-110 bg-[#232526] p-2 sm:p-3 rounded-full shadow-lg"
            target="_blank" rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/karuppaiya-s-874b722a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-[#0a66c2] transition-transform duration-300 hover:scale-110 bg-[#232526] p-2 sm:p-3 rounded-full shadow-lg"
            target="_blank" rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      {/* Right: Photo with advanced styling */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="relative group flex flex-col items-center">
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-[#09f4fc] via-[#232526] to-[#e1306c] rounded-full blur-xl opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"></div>
          <img
            className="relative z-10 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] lg:w-[350px] lg:h-[350px] object-cover rounded-full border-4 sm:border-8 border-[#232526] shadow-2xl group-hover:scale-105 transition-transform duration-500"
            src={image}
            alt="Karuppaiya portrait"
          />
          <div className="relative z-20 -mt-4 sm:-mt-6 md:-mt-8 bg-[#09f4fc] text-black px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg animate-bounce text-center">
            Let's Connect!
          </div>
          </div>
      </div>
      </section>
  );
}