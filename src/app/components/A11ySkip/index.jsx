const A11ySkip = () => (
  <ul id="nav-a11y" className="absolute -top-80 w-full z-[1000]">
    <li>
      <a
        id="skip-main"
        className="text-xl font-bold border-4 border-black bg-[#ffffffd1] absolute left-0 right-0 text-center p-2 focus:top-80"
        href="#content"
      >
        Ir al contenido principal
      </a>
    </li>
    <li>
      <a
        id="skip-search"
        className="text-xl font-bold border-4 border-black bg-[#ffffffd1]  absolute left-0 right-0 text-center p-2 focus:top-80"
        href="#search-input"
      >
        Ir a la búsqueda
      </a>
    </li>
  </ul>
);

export default A11ySkip;
