// components/NavBar.jsx
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-slate-500">
      <ul className="flex justify-center space-x-4 py-4">
        <li>
          <Link className ="text-white hover:bg-slate-700 py-2 px-3 rounded-lg transition duration-300 " href="/" >
          Cv
          </Link>
        </li>

        <li>
          <Link className ="text-white hover:bg-slate-700 py-2 px-3 rounded-md transition duration-300" href="https://github.com/martinegs" >
          GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
