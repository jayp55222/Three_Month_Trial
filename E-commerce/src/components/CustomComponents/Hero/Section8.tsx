import React from 'react';

const Section8: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white border-b-gray-200">
      <div className="flex space-x-12">
        {/* Logo 1 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="mt-2 text-xs text-gray-500 uppercase font-sans">Company</span>
        </div>

        {/* Logo 2 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4m-4 4h4"
            />
          </svg>
          <span className="mt-2 text-xs text-gray-500 uppercase font-sans">Brand</span>
        </div>

        {/* Logo 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center">
            <div className="w-6 h-6 bg-white" />
          </div>
          <span className="mt-2 text-xs text-gray-500 uppercase font-sans">Brand</span>
        </div>

        {/* Logo 4 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13a3 3 0 11-6 0 3 3 0 016 0zm-6 0h6a3 3 0 10-6 0z"
            />
          </svg>
          <span className="mt-2 text-xs text-gray-500 uppercase font-sans">Company</span>
        </div>

        {/* Logo 5 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
          <span className="mt-2 text-xs text-gray-500 uppercase font-sans">Brand</span>
        </div>
      </div>
    </div>
  );
};

export default Section8;