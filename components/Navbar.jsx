import Link from "next/link";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full max-w-[1200px] mx-auto items-center justify-start py-[24px] px-[32px]">
      <Brand />
      <ul className="md:flex flex-row hidden ml-auto gap-[10px] h-[32px] ">
        <li className="nav_item">
          <Link href="/about" className="nav_link">
            home.
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" href="/about">
            about me.
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" href="/about">
            works.
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" href="/about">
            blog.
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" href="/about">
            contact.
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
