export default function Introduction() {
  return (
    <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
      {/* Lado esquerdo - Texto */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-[#7C5DFA] font-medium mb-2">OLÁ, EU SOU</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bianca Vilaverde
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">Desenvolvedora Full Stack</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Desenvolvedora full stack com foco em criar experiências digitais
          completas — do servidor ao utilizador.
        </p>

        <div className="flex space-x-4">
          <a
            href="#projetos"
            className="bg-[#7C5DFA] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="border border-gray-300 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Lado direito - Imagem/Ilustração */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="bg-[#7C5DFA]/20 rounded-lg p-6">
            <div className="bg-[#7C5DFA] rounded-full w-24 h-24 mx-auto mb-6"></div>
            <div className="bg-gray-300 h-4 rounded-full w-2/3 mx-auto mb-4"></div>
            <div className="bg-gray-300 h-4 rounded-full w-3/4 mx-auto mb-4"></div>
            <div className="bg-gray-300 h-4 rounded-full w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
