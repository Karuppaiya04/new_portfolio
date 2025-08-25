import image from "../assets/resume.jpg";
import resumePDF from "../assets/resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col px-4 sm:px-6 md:px-10 py-10 bg-[#505050] justify-center">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold py-4 mb-8 text-center font-hero-font tracking-wide drop-shadow-lg">
        My Resume
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="relative group mb-6 md:mb-0">
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#09f4fc] via-[#232526] to-[#e1306c] rounded-2xl blur-xl opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"></div>
          <img
            className="relative z-10 w-[180px] h-[180px] xs:w-[240px] xs:h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-lg border-4 border-[#09f4fca2] group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt="Karuppaiya Resume"
          />
        </div>
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <p className="text-white text-base xs:text-lg sm:text-xl md:text-2xl pb-4 text-center md:text-left leading-relaxed drop-shadow">
            I am a passionate <span className="text-[#09f4fc] font-semibold">Full Stack Developer</span> with hands-on experience in building scalable web applications using the <span className="text-[#09f4fc] font-semibold">MERN stack</span>. My resume highlights my technical skills, project experience, and dedication to continuous learning.
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl pb-6 text-center md:text-left">
            Download my resume as PDF:
          </p>
          <a
            href={resumePDF}
            download="Karuppaiya_Resume.pdf"
            className="bg-[#09f4fca2] text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#09f4fc] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#09f4fc] text-base sm:text-lg md:text-xl"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}