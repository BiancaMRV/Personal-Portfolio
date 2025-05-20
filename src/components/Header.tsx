export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#141625] text-white">
      <h1 className="text-2xl font-bold">BIANCA.DEV</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#projetos" className="hover:text-[#7C5DFA]">
              Projects
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-[#7C5DFA]">
              About
            </a>
          </li>
          <li>
            <a href="#habilidades" className="hover:text-[#7C5DFA]">
              Skills
            </a>
          </li>
          <li>
            <a href="#Contacto" className="hover:text-[#7C5DFA]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
