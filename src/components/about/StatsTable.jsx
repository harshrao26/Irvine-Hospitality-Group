export default function TeamCommunitySection() {
  const stats = [
    { value: "4000", label: "COMPLETED PROJECTS" },
    { value: "500", label: "SATISFIED CUSTOMERS" },
    { value: "40", label: "COLLABORATORS" },
    { value: "100", label: "PEOPLE ON CONSTRUCTION SITES EVERY WEEK" },
  ];

  return (
    <section className="bg-[#fcfbf8] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-10">
          A team <em className="italic">became a community</em>
        </h2>

        {/* Group Photo */}
        <div className="rounded-xl overflow-hidden border border-gray-300 shadow-xl mb-12">
          <img
            src="https://cdn.prod.website-files.com/67e12e59c0bf32dd7b3e75cb/6837178f82d61e7357e73b76_Team%20BUILD%20jpg.avif"
            alt="Our Team"
            className="w-full object-cover shadow-xl"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          {stats.map((item, idx) => (
            <div key={idx}>
              <p className="text-3xl sm:text-4xl font-light mb-2">
                <span className="text-orange-500">+</span>
                {item.value}
              </p>
              <p className="text-xs tracking-wide uppercase text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
