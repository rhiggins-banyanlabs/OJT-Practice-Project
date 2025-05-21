import React from "react";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";

interface Feature {
  image: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    image: "images/Screenshot 2025-05-19 134222.png",
    title: "Reliable",
    description: "Our platform guarantees 99.9% uptime and secure access.",
  },
  {
    image: "images/Screenshot 2025-05-19 134241.png",
    title: "Secure",
    description: "Advanced security features to protect your data.",
  },
  {
    image: "images/Screenshot 2025-05-19 134308.png",
    title: "Fast",
    description: "Optimized performance for speed and scalability.",
  },
  {
    image: "images/Screenshot 2025-05-19 134356.png",
    title: "Customizable",
    description: "Easily tailor features to match your unique workflow.",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-800 py-12 px-4 sm:px-8 lg:px-16">
      <Heading level="h2" className="text-center mb-10">
        Our Features
      </Heading>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col items-center gap-4 shadow-md"
            title={feature.title}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-[24px] font-semibold text-center">{feature.title}</h3>
            <Paragraph className="text-center">{feature.description}</Paragraph>
            <Button>Learn More</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
