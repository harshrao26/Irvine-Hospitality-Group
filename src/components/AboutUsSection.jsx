const AboutUsSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Heading */}
        <div>
          <p className="text-sm text-gray-500 mb-2">About us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Irvine Hospitality <br /> Group
          </h2>
        </div>

        {/* Right Text */}
        <div>
          <p className="text-gray-700 text-base leading-relaxed">
            Irvine Hospitality Group is a turnkey solution for your complex hospitality needs. Our manufacturing facilities occupy over 1 million square feet of floor space. This includes capacities for upholstered guest room case-goods, metal works, lighting ranging from chandeliers to table lamps, lighted mirrors, mirror & art frames, stone fabrication, contracted glass works and fabric mills.


          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
