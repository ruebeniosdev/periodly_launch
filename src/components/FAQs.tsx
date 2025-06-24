import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Periodly?",
      answer:
        "Periodly is a smart, simple, and beautiful mobile app that helps you track your menstrual cycle, predict periods, and get personalized AI-powered health tips.",
    },
    {
      id: 2,
      question: "Is Periodly free to use?",
      answer:
        "Yes! Periodly is free to download and use. We also offer optional premium features for advanced insights and customization.",
    },
    {
      id: 3,
      question: "Will my data be private and secure?",
      answer:
        "Absolutely. Your health data is encrypted and stored securely. We never sell your information. Privacy is our top priority.",
    },
    {
      id: 4,
      question: "Who is Periodly for?",
      answer:
        "Periodly is for anyone who menstruates and wants to better understand their body—whether you're tracking for health, fertility, or general awareness.",
    },
    {
      id: 5,
      question: "When will Periodly be available?",
      answer:
        "We're launching soon! Join our waitlist to be the first to get notified when we go live.",
    },
  ];

  return (
    <section id="faqs" className="bg-white py-16 px-6 md:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12">
          Still curious? We’ve got answers to your most common questions.
        </p>
        <div className="space-y-4 text-left">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                // onClick={() => toggle(index)}
              >
                <span className="text-md font-medium text-gray-800">
                  {faq.question}
                </span>
                {/* {openIndex === index ? ( */}
                {/* <ChevronUp className="text-pink-600" /> */}
                {/* ) : ( */}
                <ChevronDown className="text-pink-600" />
                {/* )} */}
              </button>
              {/* {openIndex === index && ( */}
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              {/* //   )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
