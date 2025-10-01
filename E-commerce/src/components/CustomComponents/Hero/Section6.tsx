import React from "react";
import "./Section6.scss";
interface FeatureItemProps {
  icon: React.ReactNode; // SVG icon
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <div className="flex-shrink-0 ">{icon}</div>
      <div>
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Section6: React.FC = () => {
  const features = [
    {
      title: "Free Shipping & Return",
      description: "Free shipping for all orders over $150",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-16 h-16 border border-gray-400 p-2 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75H19.5a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H10.5a2.25 2.25 0 0 0-2.25 2.25v1.5m-3 9a2.25 2.25 0 0 0 2.25 2.25H12M9 12H4.5A2.25 2.25 0 0 0 2.25 14.25v5.25m10.5-12H18a2.25 2.25 0 0 1 2.25 2.25v6.25M10.5 6H12v6H6V6h4.5Zm0 12H6v-6h4.5v6Z"
          />
        </svg>
      ),
    },
    {
      title: "Customer Support (24/7)",
      description: "Instant access to perfect support everyday",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-16 h-16 border border-gray-400 p-2 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.319a3.75 3.75 0 0 0-6.071-3.513l-1.137.368a2.25 2.25 0 0 1-2.404.103l-.315-.17a1.125 1.125 0 0 0-1.077 0l-.315.17a2.25 2.25 0 0 1-2.404-.103l-1.137-.368A3.75 3.75 0 0 0 2.25 18.231V6.75Zm1.5-3.75a.75.75 0 0 0-.75.75v3.189c0 4.14 3.36 7.5 7.5 7.5h.75a.75.75 0 0 0 .75-.75v-3.189c0-4.14-3.36-7.5-7.5-7.5h-.75Zm3.75 0a.75.75 0 0 0-.75.75v3.189c0 4.14 3.36 7.5 7.5 7.5h.75a.75.75 0 0 0-.75-.75v-3.189c0-4.14-3.36-7.5-7.5-7.5h-.75Z"
          />
        </svg>
      ),
    },
    {
      title: "100% Secure Payment",
      description: "We ensure secure payment for customers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-16 h-16 border border-gray-400 p-2 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.454-1.603 3.39M18.667 8.046L16.25 4.5M3.75 12a9.75 9.75 0 0 1 1.074-4.54A10.05 10.05 0 0 0 3 12c0 2.839 1.144 5.437 2.992 7.375M21 12a9.75 9.75 0 0 0-1.895-6.046M11.75 4.5L14.167 8.046M12 21a9.75 9.75 0 0 0 6.183-2.126M12 21a9.75 9.75 0 0 1-6.183-2.126M10.5 6.75L7.5 3"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-8 px-4 md:px-8 shadow-sm">
      <div className="grid-container">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Section6;
