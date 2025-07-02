import TeamCard from '@/components/TeamCard';

const teamMembers = [
  { name: 'Alexander Spiridigliozzi', title: 'Director of Operations', image: '/team/alexander.jpg' },
  { name: 'Fabian MEDEIROS', title: 'Design & Build Director', image: '/team/fabian.jpg' },
  { name: 'John Doe', title: 'Finance Head', image: '/team/member1.jpg' },
  { name: 'Jane Smith', title: 'Marketing Lead', image: '/team/member2.jpg' }
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
