import Link from "next/link";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <nav className="flex sm:flex-row flex-col w-full max-w-[1200px] bg-primary mx-auto items-center md:justify-start justify-center py-[24px] px-[16px] gap-4">
      <Brand />
      <ul className="flex flex-row flex-wrap sm:ml-auto justify-center ml-0 gap-[10px] h-[32px] relative z-10 ">
        <Link href="/" className="nav_link">
          <li className="nav_item">home.</li>
        </Link>

        <Link className="nav_link" href="/#about">
          <li className="nav_item">about me.</li>
        </Link>

        <Link className="nav_link" href="/#works">
          <li className="nav_item">works.</li>
        </Link>

        <Link className="nav_link" href="/blog">
          <li className="nav_item">blog.</li>
        </Link>

        <Link className="nav_link" href="/#contact">
          <li className="nav_item">contact.</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
