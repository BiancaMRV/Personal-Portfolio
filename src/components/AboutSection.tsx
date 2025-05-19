export default function AboutSection() {
  return (
    <section id="sobre" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="w-48 h-48 bg-[#141625] rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl text-[#7C5DFA] font-bold">BV</span>
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-4"> A Minha Jornada</h3>
          <p className="mb-4">
            Sou desenvolvedora Full Stack e estou a construir o meu caminho
            nesta área. Adoro ver como o código se transforma em algo real e
            útil! O que me fascina é ter controlo sobre todo o processo — desde
            organizar a lógica por trás das aplicações até criar interfaces que
            sejam agradáveis e intuitivas.
          </p>
          <p className="mb-6">
            Como júnior, estou sempre à procura de aprender mais e melhorar as
            minhas competências. Descobri que trabalhar em equipa é algo que me
            motiva imenso. Há sempre aquela sensação boa quando resolvemos
            desafios juntos, e aprendo muito mais rápido quando estou a
            colaborar com outras pessoas.
          </p>
          <p className="mb-4">
            Tento sempre unir o lado funcional com o estético nos meus projetos.
            Para mim, os pequenos detalhes fazem toda a diferença na experiência
            final. Cada novo projeto é uma oportunidade de aprender algo novo e
            crescer como profissional.
          </p>
          <p className="mb-4">
            Para além do código, a fotografia é a minha paixão. Gosto de
            capturar memórias, lugares e principalmente tirar fotografias ás
            pessoas que amo .
          </p>

          <h3 className="text-2xl font-bold mb-4">Experiência</h3>
          <div className="mb-4">
            <h4 className="text-lg font-bold">
              Projeto Freelancer - JobFinder
            </h4>
            <p className="text-gray-600">2024</p>
            <p>
              Desenvolvi um job search com funcionalidades de pesquisa, filtro e
              muito mais. Utilizei React, Node.js e PostgreSQL para criar uma
              aplicação responsiva e intuitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
