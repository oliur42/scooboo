'use client';
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { BsChatDots, BsBoxArrowRight, BsGift, BsBoxSeam } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Top Feature Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 border-b border-gray-200">
        <div>
          <BsChatDots className="mx-auto text-2xl" />
          <p className="font-semibold mt-2">Get in touch</p>
          <p className="text-sm text-gray-600">Expert help & advice</p>
        </div>
        <div>
          <BsBoxArrowRight className="mx-auto text-2xl" />
          <p className="font-semibold mt-2">Returns & exchanges</p>
          <p className="text-sm text-gray-600">All you need to know</p>
        </div>
        <div>
          <BsGift className="mx-auto text-2xl" />
          <p className="font-semibold mt-2">Rewards</p>
          <p className="text-sm text-gray-600">Unlock Exclusive Benefits</p>
        </div>
        <div>
          <BsBoxSeam className="mx-auto text-2xl" />
          <p className="font-semibold mt-2">Bulk Order</p>
          <p className="text-sm text-gray-600">Get Customized Stationery</p>
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center py-4 border-b border-gray-200">
        <p className="font-semibold text-sm">Back to top</p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-700 px-6 py-10">
        {/* Delivery & Returns */}
        <div>
          <h3 className="font-semibold mb-3">Delivery & Returns</h3>
          <ul className="space-y-1">
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Return & Exchange</li>
            <li>Cancellation Policy</li>
            <li>Help & FAQs</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold mb-3">Programs</h3>
          <ul className="space-y-1">
            <li>Affiliate Program</li>
            <li>Rewards</li>
            <li>Bulk Orders</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-3">Company Info</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl mt-2">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}
