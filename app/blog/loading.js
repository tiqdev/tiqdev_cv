export default function Loading() {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <img
        src="/assets/world.svg"
        alt="sparkle"
        className=" w-[48px] h-[48px] animate-pulse transition-all duration-500 ease-in-out mt-[3px]"
      />
    </div>
  );
}
