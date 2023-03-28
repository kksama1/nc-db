import React from "react";
import { Link, useLocation } from "react-router-dom";

import { HiHome } from "react-icons/hi";
import { AiTwotoneEdit } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import clsxm from "../../utils/clsxm";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gradient-to-t from-green-700 to-green-600 p-2 flex justify-between text-white sticky shadow-lg">
      <div className="flex gap-2">
        <Link
          className={clsxm(
            "rounded-lg hover:bg-green-800 px-2 py-1 active:shadow-inner transition-all flex gap-2 items-center",
            pathname === "/" && "underline underline-offset-4"
          )}
          to="/"
        >
          <HiHome size={20} /> Главная страница
        </Link>
        <Link
          className={clsxm(
            "rounded-lg hover:bg-green-800 px-2 py-1 active:shadow-inner transition-all flex gap-2 items-center",
            pathname === "/table_editor" && "underline underline-offset-4"
          )}
          to="/table_editor"
        >
          <AiTwotoneEdit size={20} />
          Редактор таблиц
        </Link>
      </div>

      <div className="rounded-lg hover:bg-green-800 px-2 py-1 active:shadow-inner transition-all cursor-pointer flex gap-2 items-center">
        <BiLogIn size={20} /> Войти
      </div>

      {/* <div className="authorization">
        <a className="header-link" href="http://localhost:3000/">
          <p>sign in</p>
        </a>

        <a className="header-link" href="http://localhost:3000/">
          <p>sign up</p>
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar;
