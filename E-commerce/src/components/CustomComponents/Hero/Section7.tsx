import React from 'react';

// Reusable Product Card Component
interface ProductCardProps {
  imageSrc: string;
  name: string;
  currentPrice: string;
  oldPrice?: string; // Optional for sale items
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, currentPrice, oldPrice }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        <img src={imageSrc} alt={name} className="max-w-[80%] max-h-[80%] object-contain" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">{name}</h4>
        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-sm font-bold text-gray-900">{currentPrice}</span>
          {oldPrice && (
            <span className="text-xs text-gray-500 line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Section7: React.FC = () => {
  const onSaleProducts = [
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Laptop', name: 'Smart Folio iPad Pro', currentPrice: '$590.00', oldPrice: '$699.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Camera', name: 'Canon full frame Camera', currentPrice: '$490.00', oldPrice: '$599.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Watch', name: 'Apple Smartwatch', currentPrice: '$149.00', oldPrice: '$199.00' },
  ];

  const trendingProducts = [
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=USB', name: 'Sony 1TB Memory', currentPrice: '$14.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Speaker', name: 'Apple Audio Speaker', currentPrice: '$35.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Watch', name: 'Apple Smartwatch', currentPrice: '$149.00', oldPrice: '$199.00' }, // Assuming this is also trending
  ];

  const bestSellers = [
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Laptop', name: 'Hp Ipad Laptop', currentPrice: '$490.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Speaker', name: 'Apple Audio Speaker', currentPrice: '$35.00' },
    { imageSrc: 'https://via.placeholder.com/100x100/F5F5F5?text=Washer', name: '9.0KG Washing Machine', currentPrice: '$450.00' },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* On Sale Products Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">ON SALE PRODUCTS</h3>
            {onSaleProducts.map((product, index) => (
              <ProductCard
                key={`on-sale-${index}`}
                imageSrc={product.imageSrc}
                name={product.name}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>

          {/* Trending Products Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">TRENDING PRODUCTS</h3>
            {trendingProducts.map((product, index) => (
              <ProductCard
                key={`trending-${index}`}
                imageSrc={product.imageSrc}
                name={product.name}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>

          {/* Best Sellers Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">BEST SELLERS</h3>
            {bestSellers.map((product, index) => (
              <ProductCard
                key={`best-seller-${index}`}
                imageSrc={product.imageSrc}
                name={product.name}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;