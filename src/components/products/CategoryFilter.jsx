const categories = [
  "3D printing", "Banks", "Bollards", "Sources",
  "Tables", "Waste bins", "Steps of the Way"
];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="border border-[#002C52] text-[#002C52] px-3 py-1 text-sm rounded-full hover:bg-blue-100"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
