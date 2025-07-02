export default function SubFooter() {
  return (
    <div className="min-h-[50vh] een flex flex-col items-center justify-center bg-[#002C52] text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl  ">
        Ready to build <span className="font-bold">without</span> <br />
        <span className="font-bold">the hassle?</span>
      </h1>

      <div className="mt-8 flex gap-4">
        <button className="bg-white capitalize text-black font-semibold py-2 px-6 rounded">
          yes
        </button>
        <button className="bg-[#FF9D31] capitalize text-white font-semibold py-2 px-6 rounded">
          yes, but in Orange
        </button>
      </div>
    </div>
  );
}
