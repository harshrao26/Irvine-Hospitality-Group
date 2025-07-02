export default function TeamCard({ name, title, image }) {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="rounded-lg grayscale w-48 h-60 object-cover mx-auto" />
      <h3 className="mt-4 font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
