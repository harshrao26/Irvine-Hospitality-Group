import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
}
