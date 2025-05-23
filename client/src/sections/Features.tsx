import React, { useState } from "react";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import shoe1 from "../assets/Images/shoe1.png";
import shoe2 from "../assets/Images/shoe2.png";
import shoe3 from "../assets/Images/shoe3.png";
import shoe4 from "../assets/Images/shoe4.png";
import Paragraph from "../components/ui/Paragraph";
interface Feature {
  image: string;
  title: string;
  price: string;
  description: string;
  colors: string[];
}

const features: Feature[] = [
  {
    image: shoe1,
    title: "Air Comfort Pro",
    price: "$129.99",
    description: "Lightweight running shoes with enhanced cushioning for maximum comfort.",
    colors: ["Black", "White", "Red"],
  },
  {
    image: shoe2,
    title: "Urban Walker",
    price: "$99.99",
    description: "Stylish casual shoes perfect for everyday urban adventures.",
    colors: ["Navy", "Gray", "Olive"],
  },
  {
    image: shoe3,
    title: "Trail Blazer X",
    price: "$149.99",
    description: "Durable hiking shoes with superior grip for all terrains.",
    colors: ["Brown", "Black", "Orange"],
  },
  {
    image: shoe4,
    title: "Classic Elegance",
    price: "$159.99",
    description: "Timeless leather dress shoes for formal occasions.",
    colors: ["Black", "Brown", "Burgundy"],
  },
];

const FeatureSection: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<(string | null)[]>(
    Array(features.length).fill(null)
  );

  const handleColorSelect = (index: number, color: string) => {
    const updated = [...selectedColors];
    updated[index] = color;
    setSelectedColors(updated);
  };

  const handleAddToCart = (index: number) => {
    const selected = selectedColors[index];
    if (selected) {
      alert(`Added ${features[index].title} in ${selected} to cart.`);
    } else {
      alert("Please select a color before adding to cart.");
      return;
    }

    // Clear selected color for that item
    const updated = [...selectedColors];
    updated[index] = null;
    setSelectedColors(updated);
  };

  return (
    <section id="features" className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <Heading level="h2">Our Collection</Heading>
        <h2 className="text-gray-600 mt-2">
          Discover our latest shoes designed for style, comfort, and durability.
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            title=""
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-stretch h-full"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[160px] object-contain mb-4"
            />

            <div className="flex justify-between items-center w-full mb-2">
              <h3 className="text-base font-bold text-gray-800">{feature.title}</h3>
              <span className="text-teal-600 font-semibold">{feature.price}</span>
            </div>

            <Paragraph className="text-md text-gray-600 mb-3">{feature.description}</Paragraph>

            <div className="mb-4">
              <Paragraph className="text-sm font-medium text-gray-700 mb-1">Available Colors:</Paragraph>
              <div className="flex flex-wrap gap-2">
                {feature.colors.map((color, idx) => (
                  <span
                    key={idx}
                    onClick={() => handleColorSelect(index, color)}
                    className={`text-xs font-semibold px-2 py-1 rounded-full cursor-pointer transition ${
                      selectedColors[index] === color
                        ? "bg-teal-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto w-full flex justify-center">
              <Button
                onClick={() => handleAddToCart(index)}
                className="mt-fix bg-emerald-600 text-white hover:bg-emerald-700 text-sm px-6 py-2 rounded cursor-pointer"
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;



