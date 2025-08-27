export default function Footer() {
  return (
    <footer className="bg-[#505050] py-6 mt-0 relative overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <p
          className="
            text-xs sm:text-sm md:text-base 
            text-gray-200 font-medium 
            animate-fade-in-up
            transition duration-500 ease-in-out 
            hover:text-blue-400 hover:scale-105
          "
        >
          © 2025{" "}
          <span className="font-semibold text-white hover:text-yellow-300 transition duration-500">
            My Portfolio
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
