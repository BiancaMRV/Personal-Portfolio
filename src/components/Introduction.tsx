export default function Introduction() {
  return (
    <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
      {/* Lado esquerdo - Texto */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-[#7C5DFA] font-medium mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bianca Vilaverde
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">Full stack developer</h2>

        <p className="text-gray-600 mb-8">
          As a full-stack developer in constant growth, I strive to craft
          intuitive digital journeys by mastering both the art of what users see
          and the science of what powers it. Every line of code is part of my
          learning path toward creating more seamless and impactful web
          experiences.
        </p>

        <div className="flex space-x-4">
          <a
            href="#projetos"
            className="bg-[#7C5DFA] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#Contacto"
            className="border border-gray-300 text-gray-800 py-2 px-6 rounded-full hover:transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Lado direito - Foto em círculo */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          {/* Círculo exterior decorativo */}
          <div className="absolute inset-0 rounded-full bg-[#7C5DFA] blur-md opacity-30 transform scale-110"></div>

          {/* Círculo interior com borda */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#7C5DFA] overflow-hidden shadow-xl">
            {/* Imagem */}
            <img
              src="/images/foto.png"
              alt="Bianca Vilaverde"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
