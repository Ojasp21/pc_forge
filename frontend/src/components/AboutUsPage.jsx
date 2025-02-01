import React from "react";
import { Search, Check, Share2, Shield, ShoppingCart, Zap } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Smart Part Selection",
      description: "Advanced filtering and search tools to help you find the perfect components for your build."
    },
    {
      icon: <Check className="w-8 h-8 text-blue-400" />,
      title: "Compatibility Check",
      description: "Real-time compatibility verification ensures all your chosen components work together seamlessly."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      title: "Easy Amazon Purchase",
      description: "Direct links to Amazon for hassle-free ordering of your selected components."
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-6">
            Build Your Perfect PC with Confidence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We help you choose the right components, verify compatibility, and find the best deals on Amazon.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Who We Are</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're a team of PC enthusiasts and tech experts who understand the challenges
                of building your own PC. Our platform simplifies the component selection process,
                ensures compatibility, and connects you directly with trusted Amazon sellers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower PC builders with the tools and knowledge they need to create their
                perfect setup. We eliminate the guesswork from component selection and make
                the purchasing process seamless through Amazon integration.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300">Select Components</h3>
                    <p className="text-gray-300">Browse and filter through our curated selection of PC parts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300">Verify Compatibility</h3>
                    <p className="text-gray-300">Our system automatically checks component compatibility in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300">Purchase on Amazon</h3>
                    <p className="text-gray-300">Click through to Amazon to complete your purchase with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
            Why Choose Our Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 mt-20 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Ready to Start Your PC Build?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Find the perfect components for your dream PC.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
            Start Component Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;