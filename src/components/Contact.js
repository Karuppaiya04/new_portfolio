export default function Contact() {
  return (
    <section id="contact" className="flex flex-col px-4 sm:px-6 md:px-10 py-10 bg-[#505050] justify-center">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold py-4 mb-8 text-center font-hero-font tracking-wide drop-shadow-lg">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left: Info & Illustration */}
        <div className="flex flex-col items-center md:items-start max-w-md mb-8 md:mb-0">
          <p className="text-white text-base xs:text-lg sm:text-xl md:text-2xl pb-4 text-center md:text-left leading-relaxed drop-shadow">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.<br /><br />
            <span className="text-[#09f4fc] font-semibold">Let's build something great together!</span>
          </p>
          <div className="hidden sm:flex items-center justify-center mt-4">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="#09f4fc" strokeWidth="4" fill="#232526" />
              <path d="M25 35L40 50L55 35" stroke="#09f4fc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex flex-col w-full max-w-md bg-[#444] rounded-2xl p-6 shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#09f4fc] text-base sm:text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#09f4fc] text-base sm:text-lg"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#09f4fc] text-base sm:text-lg"
            rows={5}
          ></textarea>
          <button
            className="bg-[#09f4fca2] text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#09f4fc] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#09f4fc] text-base sm:text-lg"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}