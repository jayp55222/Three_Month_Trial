import { Card } from "@/components/ui/card";
import { img } from "@/GlobalVariable";
import React from "react";
// Assuming you have a Card component from shadcn-ui
// import { Card, CardContent } from "@/components/ui/card"; // Adjust import path as per your project setup

// A simplified Card component if not using shadcn-ui directly, for demonstration.
// In a real shadcn-ui setup, you'd use their Card component.
const CustomCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-lg bg-white shadow-sm h-64 w-48 flex flex-col justify-between items-center ${className}`}
  >
    {children}
  </div>
);

// A simplified CardContent component
const CustomCardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center p-4 h-full ${className}`}
  >
    {children}
  </div>
);

interface ProductItemProps {
  imageSrc: string;
  altText: string;
  categoryName: string;
}

const ProductCard: React.FC<ProductItemProps> = ({
  imageSrc,
  altText,
  categoryName,
}) => {
  return (
    <CustomCard className="w-80 h-64 bg-gray-50 p-0 flex flex-col justify-between">
      <CustomCardContent className="w-full flex flex-col items-center p-0 justify-center h-full">
        <img
          src={imageSrc}
          alt={altText}
          className="max-h-32 object-contain mb-4"
        />
        <span className="text-sm font-medium text-gray-700">
          {categoryName}
        </span>
      </CustomCardContent>
    </CustomCard>
  );
};

const Section2: React.FC = () => {
  const products = [
    {
      imageSrc:
        "https://pixabay.com/get/gcafd7b4b1e1b8e991aeaad4659725930523e3fc700f4fb423158d6220441571cbf21a5925e20148750e959cbcf1a5abf_1280.jpg",
      altText: "Smartphone",
      categoryName: "Smartphone",
    },
    {
      imageSrc:
        "https://pixabay.com/get/g291a0bae95e66c43b716a677545811b9c12294308ef57222bbd75663587fbfe17f9e06a83362ea16ca294a495d56f63549a4fcb12c88c66a2fbc5167d7fd0dad_1280.jpg",
      altText: "Headphone",
      categoryName: "Headphone",
    },
    {
      imageSrc:
        "https://pixabay.com/get/gec5abce3ea609d7a9dcaef20c2fad9bd0cd03b82deaaa8f2ecc0e4a9c4457ec08d4bf0012f221553dcb5c900b0f321ce_1280.png",
      altText: "Speakers",
      categoryName: "Speakers",
    },
    {
      imageSrc:
        "https://pixabay.com/get/gad5c7294b0170a1374d424b4efa3fa81250fe49515c38ef8547480c16caf0eb2f102fd293a7d0b07b91c8856d8478b9d7b8e2cf7121359c55df55d91dbc17152_1280.jpg",
      altText: "Computers",
      categoryName: "Computers",
    },
    {
      imageSrc:
        "https://pixabay.com/get/g7c1a3c96a741faf26957dbfe623dbd2ab777f1a87a76ef7183c2c42b58f0166e640c23b7d7ae693329ea3d898f6acff0_1280.jpg",
      altText: "Mouse",
      categoryName: "Mouse",
    },
    {
      imageSrc:
        "https://pixabay.com/get/gcafd7b4b1e1b8e991aeaad4659725930523e3fc700f4fb423158d6220441571cbf21a5925e20148750e959cbcf1a5abf_1280.jpg",
      altText: "Smartphone",
      categoryName: "Smartphone",
    },
    {
      imageSrc:
        "https://pixabay.com/get/g291a0bae95e66c43b716a677545811b9c12294308ef57222bbd75663587fbfe17f9e06a83362ea16ca294a495d56f63549a4fcb12c88c66a2fbc5167d7fd0dad_1280.jpg",
      altText: "Headphone",
      categoryName: "Headphone",
    },
    {
      imageSrc:
        "https://pixabay.com/get/gec5abce3ea609d7a9dcaef20c2fad9bd0cd03b82deaaa8f2ecc0e4a9c4457ec08d4bf0012f221553dcb5c900b0f321ce_1280.png",
      altText: "Speakers",
      categoryName: "Speakers",
    },
    {
      imageSrc:
        "https://pixabay.com/get/gad5c7294b0170a1374d424b4efa3fa81250fe49515c38ef8547480c16caf0eb2f102fd293a7d0b07b91c8856d8478b9d7b8e2cf7121359c55df55d91dbc17152_1280.jpg",
      altText: "Computers",
      categoryName: "Computers",
    },
    {
      imageSrc:
        "https://pixabay.com/get/g7c1a3c96a741faf26957dbfe623dbd2ab777f1a87a76ef7183c2c42b58f0166e640c23b7d7ae693329ea3d898f6acff0_1280.jpg",
      altText: "Mouse",
      categoryName: "Mouse",
    },
  ];

  const categories = [
    {
      name: "Smartphone",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Smartphone",
    },
    {
      name: "Headphone",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Headphone",
    },
    {
      name: "Speakers",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Speakers",
    },
    {
      name: "Computers",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Computers",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
    {
      name: "Mouse",
      image: "https://via.placeholder.com/200/F5F5F5/333333?text=Mouse",
    },
  ];
  return (
    <>
      {/* Categories Section */}
      <section className="mb-12">
        <div className="w-full flex p-4 gap-4 no-scrollbar justify-center">
          <div className="flex w-1/2 overflow-x-auto gap-11 ">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="w-48 h-64 bg-cover bg-[url('img.jpg')] flex-shrink-0 flex flex-col justify-between items-center p-4"
              >
                <img
                  // src={category.image}
                  src={img}
                  alt={category.name}
                  className="max-h-32 object-contain mb-4"
                />
                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
