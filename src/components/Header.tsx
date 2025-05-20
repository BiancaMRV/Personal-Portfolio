export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#141625] text-white">
      <h1 className="text-2xl font-bold">BIANCA.DEV</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#projetos" className="hover:text-[#7C5DFA]">
              Projetos
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-[#7C5DFA]">
              Sobre
            </a>
          </li>
          <li>
            <a href="#habilidades" className="hover:text-[#7C5DFA]">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#Contacto" className="hover:text-[#7C5DFA]">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
