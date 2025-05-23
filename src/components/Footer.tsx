import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-serif text-2xl mb-4">Join Our Newsletter</h3>
          <p className="text-neutral-600 mb-6">
            Subscribe to receive updates, exclusive offers, and 10% off your
            first order.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-neutral-300 focus:border-neutral-900"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">EDGE & ELEGANCE</h4>
            <p className="text-sm text-neutral-600 mb-4">
              EDGE & ELEGANCE offers premium fashion accessories crafted with
              exceptional materials and timeless design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-800 hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ele.gance789?igsh=MW5rbzQ3ODNob2xyag%3D%3D&utm_source=qr"
                className="text-neutral-800 hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-800 hover:text-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-medium text-sm uppercase tracking-wider mb-4">
              Shop
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/men"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/sales"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Sale Items
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-cards"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-medium text-sm uppercase tracking-wider mb-4">
              Help
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/customer-service"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h5 className="font-medium text-sm uppercase tracking-wider mb-4">
              About
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/our-story"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-600 hover:text-neutral-900 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 pt-8 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 EDGE & ELEGANCE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-neutral-800">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-neutral-800">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-neutral-800">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
