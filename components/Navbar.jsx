import Link from "next/link";
import Brand from "./Brand";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full max-w-[1200px] bg-primary mx-auto items-center md:justify-start justify-center py-[24px] px-[32px] ">
      <Brand />
      <ul className="md:flex flex-row hidden ml-auto gap-[10px] h-[32px] relative z-10 ">
        <Link href="#home" className="nav_link">
          <li className="nav_item">home.</li>
        </Link>

        <Link className="nav_link" href="#about">
          <li className="nav_item">about me.</li>
        </Link>

        <Link className="nav_link" href="#works">
          <li className="nav_item">works.</li>
        </Link>

        <Link className="nav_link" href="#testimonials">
          <li className="nav_item">testimonials.</li>
        </Link>

        <Link className="nav_link" href="#contact">
          <li className="nav_item">contact.</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
