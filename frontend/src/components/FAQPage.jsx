import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {title}
      </h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 hover:border-blue-500/50 transition-colors"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-white font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <div
              className={`px-6 transition-all duration-200 ease-in-out ${
                openIndex === index ? 'py-4 border-t border-gray-800' : 'max-h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-300">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
    const buildingQuestions = [
        {
          question: "How does your PC building service work?",
          answer: "You can use our interactive tool to select parts for your custom PC build. Once you've selected all the components, you'll be redirected to Amazon to complete your purchase. We guide you through the process to ensure compatibility and performance."
        },
        {
          question: "How do I know if the PC I build is good for my needs?",
          answer: "Our PC building tool offers suggested configurations for different use cases such as gaming, professional work, and editing. You can choose from a variety of templates, and we also provide helpful descriptions to guide your choices based on your needs."
        },
        {
          question: "Do you offer pre-built PCs?",
          answer: "Yes, we offer pre-configured builds for specific use cases, including gaming PCs, professional workstations, and editing setups. You can browse these options in our 'Prebuild PCs' section."
        },
        {
          question: "Can I build a PC on a budget?",
          answer: "Absolutely! Our tool lets you filter components based on your budget, ensuring you get the best performance for the price. We also provide budget-friendly build recommendations for gaming, work, and other needs."
        }
      ];
    
      const compatibilityQuestions = [
        {
          question: "Are the parts compatible with each other?",
          answer: "Yes, we ensure that all components recommended are compatible with each other. If you're unsure about any part, you can always check the compatibility information on our site or contact our support team for assistance."
        },
        {
          question: "Do I need to buy all the components listed?",
          answer: "Not at all! The parts listed are recommendations based on the specifications you've chosen, but you can always make adjustments. Our tool ensures that the parts are compatible, but you are free to customize your build further."
        },
        {
          question: "Can I use parts from other websites?",
          answer: "While we mainly work with Amazon for affiliate purposes, you're welcome to buy parts from any website. We provide compatibility details to help guide you in making informed decisions."
        },
        {
          question: "Do you provide support for assembling the PC?",
          answer: "We do not provide assembly services, but we offer guides and videos to help you assemble your PC. You can also find professional assembly services on Amazon or at local stores if needed."
        }
      ];
    
      const purchaseQuestions = [
        {
          question: "Will I save money by using your platform?",
          answer: "We aim to offer competitive pricing, and using our platform ensures you're purchasing compatible components for your build. Additionally, purchasing through our affiliate links helps support our site at no extra cost to you."
        },
        {
          question: "How secure is the payment process on Amazon?",
          answer: "Amazon uses industry-standard encryption and security protocols to ensure a safe and secure transaction process. When purchasing through our affiliate links, you're redirected to Amazon's trusted platform."
        },
        {
          question: "Do you provide shipping?",
          answer: "We do not handle shipping directly. Once you've built your custom PC and confirmed your purchase on Amazon, the shipping process will be handled by Amazon."
        },
        {
          question: "What is the estimated time to receive the parts after purchase?",
          answer: "The delivery time depends on your location and the seller on Amazon. You can check the estimated delivery time when purchasing the parts. Generally, Amazon provides fast and reliable shipping options."
        }
      ];
    
      const supportQuestions = [
        {
          question: "What if I face issues while building my PC?",
          answer: "If you encounter any issues, our support team is ready to help. Simply visit our contact page, and we'll assist you in resolving any concerns you may have."
        },
        {
          question: "Can I change or cancel my order after completing it?",
          answer: "Since you complete your purchase on Amazon, any changes or cancellations must be handled through your Amazon account directly."
        },
        {
          question: "Do you provide a warranty for the parts?",
          answer: "Warranty details depend on the manufacturer of each part. You can check the warranty information for individual components on Amazon or from the manufacturer's website."
        },
        {
          question: "How can I get in touch with customer support?",
          answer: "If you need assistance, you can visit our 'Contact Us' page, where you can find multiple ways to reach out, including email and live chat options."
        }
      ];

  return (
    <div className="min-h-screen bg-600 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our PC builds, compatibility, and support services.
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-8">
        <FAQSection title="PC Building & Selection" questions={buildingQuestions} />
          <FAQSection title="Compatibility & Assembly" questions={compatibilityQuestions} />
          <FAQSection title="Purchase & Delivery" questions={purchaseQuestions} />
          <FAQSection title="Support & Warranty" questions={supportQuestions} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:support@pc_forge.com?subject=Support Request&body=Hello, I need help with..."
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;