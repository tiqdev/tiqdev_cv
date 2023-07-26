import Link from "next/link";

const Brand = () => {
  return (
    <Link className="navbar_brand" href="#">
      <div className="brand_container">
        <span className="text-secondary">.</span> tiqdev
      </div>
      <div className="badge mt-[2px]">
        <span className="font-[300] tracking-[0.4px]">Portfolio</span>
      </div>
    </Link>
  );
};

export default Brand;
