import image from "../assets/programmer-night.jpg";
export default function About() {
  return (
    <section id="about" className="flex flex-col px-4 sm:px-6 md:px-10 py-8 bg-[#505050] justify-center">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold py-4 mb-8 text-center font-hero-font tracking-wide drop-shadow-lg">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="relative group mb-6 md:mb-0">
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#09f4fc] via-[#232526] to-[#e1306c] rounded-3xl blur-xl opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"></div>
          <img
            className="relative z-10 w-[220px] h-[180px] xs:w-[280px] xs:h-[220px] sm:w-[340px] sm:h-[260px] md:w-[400px] md:h-[300px] object-cover rounded-3xl border-4 border-[#232526] shadow-2xl group-hover:scale-105 transition-transform duration-500"
            src={image}
            alt="Karuppaiya portrait"
          />
        </div>
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <p className="text-[#e0e0e0] text-base xs:text-lg sm:text-xl md:text-2xl px-2 sm:px-4 pb-4 text-center md:text-left leading-relaxed drop-shadow">
            I'm a passionate <span className="text-[#09f4fc] font-semibold">Full Stack Developer</span> with expertise in both front-end and back-end technologies. I love creating dynamic and responsive web applications that provide seamless user experiences.<br /><br />
            My skills include <span className="text-[#09f4fc] font-semibold">HTML, CSS, JavaScript, React, Node.js, Express,</span> and <span className="text-[#09f4fc] font-semibold">MongoDB</span>. I'm always eager to learn new technologies and take on challenging projects.
          </p>
          <div className="flex flex-row gap-3 mt-2">
            <span className="bg-[#09f4fc22] text-[#09f4fc] px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow">Team Player</span>
            <span className="bg-[#e1306c22] text-[#3b27cd] px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow">Problem Solver</span>
            <span className="bg-[#232526] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow">Quick Learner</span>
          </div>
        </div>
    </div>
    </section>
  );
}