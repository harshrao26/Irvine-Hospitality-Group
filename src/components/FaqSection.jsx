"use client"
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  { question: "What is architectural hospitality design?", answer: "It’s a design approach that blends architectural functionality with hospitality principles to create engaging spaces like coworking, coliving, and branded environments." },
  { question: "What type of assets benefit most from this approach?", answer: "Commercial buildings, retail spaces, underutilized properties, and new developments all benefit from this experiential design focus." },
  { question: "Can existing properties be converted into hospitality spaces?", answer: "Yes. We specialize in adaptive reuse and transformation of existing buildings into community-driven, revenue-generating spaces." },
  { question: "What are the stages involved in designing a coworking space?", answer: "Discovery, concept development, layout planning, detailed design, branding, and implementation support." },
  { question: "What makes a hospitality-led workspace different from regular offices?", answer: "It focuses on user experience, comfort, and community—similar to hotels or lounges—boosting engagement and retention." },
  { question: "Do you assist with brand identity and space storytelling?", answer: "Absolutely. We integrate spatial branding and narratives into every design." },
  { question: "Can I work with you if I already have an architect or contractor?", answer: "Yes. We can collaborate with existing teams or lead the design end-to-end." },
  { question: "What are your customization options for operator-led spaces?", answer: "We offer flexible layouts, themed interiors, acoustic planning, and modular zoning options." },
  { question: "What’s the ROI of designing for community & experience?", answer: "Improved occupancy, higher pricing potential, longer retention, and brand loyalty." },
  { question: "Where can I view case studies or past projects?", answer: "We’d be happy to share our portfolio. Contact us directly for access to relevant case studies." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-8">Find answers to common questions about our architectural hospitality services. Contact us if you need more info.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 p-5 rounded-md shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900"
            >
              {faq.question}
              {openIndex === index ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </button>
            <div
              className={`mt-2 text-gray-700 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="mt-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
