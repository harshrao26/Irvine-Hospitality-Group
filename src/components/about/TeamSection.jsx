import TeamCard from '@/components/TeamCard';

const teamMembers = [
  { name: 'Alexander Spiridigliozzi', title: 'Director of Operations', image: 'https://images.unsplash.com/photo-1594751684241-bcef815d5a57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Fabian MEDEIROS', title: 'Design & Build Director', image: 'https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'John Doe', title: 'Finance Head', image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Jane Smith', title: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1509839862600-309617c3201e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

export default function TeamSection() {
  return (
    <section className="bg-[#fcfbf8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-2">A steering committee,</h2>
        <p className="italic text-xl text-gray-700 mb-12">the reflection of our experience</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
