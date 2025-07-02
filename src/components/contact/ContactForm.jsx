import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactFormWithVisual() {
  return (
    <section className="max-w-7xl mx-auto px-6   grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Block */}
      <div className="flex flex-col justify-between">
        <div className="bg-lime-200 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="Collaboration"
            width={600}
            height={100}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-xl border shadow-sm">
          <div>
            <h4 className="text-sm text-gray-500">Partnerships and Collaborations</h4>
            <p className="text-gray-900 font-medium">SALES@IHGFFE.COM</p>
          </div>
          <FiArrowUpRight className="text-black text-lg" />
        </div>
      </div>

      {/* Right Form */}
      <form className="bg-white p-6 rounded-xl border shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="mt-1 w-full border rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="mt-1 w-full border rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="mt-1 w-full border rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="mt-1 w-full border rounded-md px-4 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Enter your Message"
            rows="4"
            className="mt-1 w-full border rounded-md px-4 py-2 text-sm resize-none"
          />
        </div>

        <div className="md:flex   items-center justify-between mt-4">
          <label className="flex items-center text-sm text-gray-700">
            <input type="checkbox" className="mr-2" />
            I agree with Terms of Use and Privacy Policy
          </label>
          <button
            type="submit"
            className="bg-[#FF9D31] hover:bg-[#e8891d] flex-col mt-4 md:mt-0 text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Send your Message
          </button>
        </div>
      </form>
    </section>
  );
}
