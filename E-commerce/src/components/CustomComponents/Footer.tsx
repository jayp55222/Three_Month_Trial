import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-16">
      <div className="container mx-auto px-4">
        {/* Main Grid for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>
                <strong>Address:</strong>
                <br />
                123 Street Name, City Name
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                mail@email.com
              </p>
              <p>
                <strong>Working Days/Hours:</strong>
                <br />
                Mon-Sat / 9:00-18:00
              </p>
            </div>
          </div>

          {/* Our Stores */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Stores</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>New York</li>
              <li>London SF</li>
              <li>California</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>

          {/* Join Our Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Join Our Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Will be used in accordance with our privacy policy</p>
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button variant="ghost" className="bg-transparent hover:bg-transparent p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </div>
            <div className="flex space-x-4 mt-8">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <Separator className="my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {/* Payment Icons */}
            <img src="/path/to/visa.png" alt="Visa" className="h-5" />
            <img src="/path/to/mastercard.png" alt="Mastercard" className="h-5" />
            <img src="/path/to/amex.png" alt="American Express" className="h-5" />
          </div>
          <p>© Emall.Ecommerce. All Rights Reserved</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            {/* App Badges */}
            <img src="/path/to/appstore.png" alt="App Store" className="h-8" />
            <img src="/path/to/googleplay.png" alt="Google Play" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}