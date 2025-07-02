import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  const contactDetails = [
    {
      title: "Address",
      value: "Irvine Hospitality Group, Inc.2618 San Miguel Drive Unit 1214",
    },
    {
      title: "You Can Email Here",
      value: "SALES@IHGFFE.COM",
    },
    {
      title: "Call us on",
      value: "1-818-430-3411",
    },
    {
      title: "Working Hours",
      value: "10:00 am – 6:00 pm",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <div className="inline-block bg-blue-200 px-4 py-2 rounded-lg text-3xl font-semibold leading-tight text-black">
            We Would Love to Hear <br /> from You
          </div>
        </div>
        <div className="md:w-1/2 text-gray-700 text-sm leading-relaxed">
          <p className="mb-6">
           Irvine Hospitality Group is a turnkey solution for your complex hospitality needs. Our manufacturing facilities occupy over 1 million square feet of floor space.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-blue-200 p-2 rounded-full hover:bg-blue-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-200 p-2 rounded-full hover:bg-blue-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-200 p-2 rounded-full hover:bg-blue-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactDetails.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 border hover:shadow-xl transition group flex justify-between items-start"
          >
            <div>
              <h5 className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {item.title}
              </h5>
              <p className="text-sm font-medium text-gray-800">{item.value}</p>
            </div>
            {/* <FiArrowUpRight className="text-black h-20 w-20 opacity-70 group-hover:rotate-45 transform transition duration-300 mt-1" /> */}
          </div>
        ))}
      </div>
    </section>
  );
}
