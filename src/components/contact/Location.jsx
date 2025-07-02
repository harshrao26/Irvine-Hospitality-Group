export default function Location () {
  return (
    <section className="py-20   bg-white">
      <div className="max-w-7xl mx-auto   flex-col lg:flex-row items-center gap-12">
         <div className="w-full flex flex-col justify-between items-center">
          <p className="text-sm text-gray-500 mb-2">Our Location</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002C52]">
            Connecting Near and Far
          </h2>
          
         </div>
        {/* Map with info box */}
        <div className="w-full  relative">
          <div>
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.259868681875!2d-117.8542770242996!3d33.676334673300836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde8b8064ecb1%3A0xe78a6598bfc2966d!2sIrvine%20Towers!5e0!3m2!1sen!2sin!4v1751474833902!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* <div className="absolute top-8 left-8 bg-white shadow-lg rounded-xl p-4 w-72">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 16.25V8.75C21 7.50736 20.1046 6.5 19 6.5H5C3.89543 6.5 3 7.50736 3 8.75v7.5C3 17.4926 3.89543 18.5 5 18.5h14c1.1046 0 2-.8954 2-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">Snappy Inc.</p>
                <p className="text-sm text-gray-500">
                  Chat Beyond Limits Together
                </p>
              </div>
            </div>
            <p className="font-semibold text-sm mb-1">San Francisco, USA</p>
            <p className="text-sm text-gray-500">
              123 Tech Boulevard, Suite 456
            </p>
            <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
              Open Google Maps →
            </a>
          </div> */}
        </div>

        {/* Text Content */}
       
      </div>
    </section>
  );
}
