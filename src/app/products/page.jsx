import ProductGrid from "@/components/products/ProductGrid";
import CategoryFilter from "@/components/products/CategoryFilter";
import i1 from '@/assets/products/i1.png'
import i2 from '@/assets/products/i2.png'
import i3 from '@/assets/products/i3.png'
 
const products = [
  {
    image: i1,
    title: "Double Boat Bench with Planter and Backrest",
    tag: "Banks",
  },
 
  {
    image: i3,
    title: "Cube Bank with LED",
    tag: "Banks",
  },
  {
    image: i1,
    title: "Double Boat Bench with Planter and Backrest",
    tag: "Banks",
  },
   {
    image: i2,
    title: "Fine Edges Cube Bench",
    tag: "Banks",
  },
 
  {
    image: i1,
    title: "Double Boat Bench with Planter and Backrest",
    tag: "Banks",
  },
  {
    image: i2,
    title: "Fine Edges Cube Bench",
    tag: "Banks",
  },
   {
    image: i2,
    title: "Fine Edges Cube Bench",
    tag: "Banks",
  },
  {
    image: i3,
    title: "Cube Bank with LED",
    tag: "Banks",
  },
  {
    image: i3,
    title: "Cube Bank with LED",
    tag: "Banks",
  },
];

export default function UrbanFurniture() {
  return (
    <div className="px6 py- ">
                        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="w-full h-[50vh] object-cover rounded-b-lg my- 6" />

      <div className="max-w-7xl mx-auto">

        {/* <nav className="text-sm mb-4 text-gray-500">
          Home / Products / <span className="text-green-600">Irvine Products</span>
        </nav> */}

        <h1 className="text-4xl font-semibold text-[#002C52] my-6">Irvine<br />Products</h1>


        <hr className="border-t border my-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside>
            <p className="mb-3 font-semibold">Guy:</p>
            <CategoryFilter />
          </aside>

          <main className="md:col-span-3">
            <ProductGrid products={products} />
          </main>
        </div>
      </div>
    </div>
  );
}
