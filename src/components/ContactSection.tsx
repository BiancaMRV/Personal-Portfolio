export default function ContactSection() {
  return (
    <section id="Contacto" className="bg-[#141625] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="mb-8">Lets talk!</p>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <p className="mb-4">biancamargarida2014@gmail.com</p>
            <p className="mb-4">934 596 546</p>
            <p>Braga, Portugal</p>

            {/* Social Links with Icons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/BiancaMRV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7C5DFA] transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bianca-vilaverde-001177331/?originalSubdomain=pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7C5DFA] transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-[#1E2139] p-6 rounded-lg w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#252945] border border-[#252945] rounded focus:outline-none focus:border-[#7C5DFA]"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 bg-[#252945] border border-[#252945] rounded focus:outline-none focus:border-[#7C5DFA]"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea className="w-full p-2 bg-[#252945] border border-[#252945] rounded focus:outline-none focus:border-[#7C5DFA] h-32"></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#7C5DFA] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
