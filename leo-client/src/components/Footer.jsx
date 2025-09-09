import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Social */}
        <div className="flex flex-col items-start min-w-[200px]">
          <h2 className="text-3xl font-extrabold mb-2">Leo9 Studio</h2>
          <div className="flex gap-3 mb-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><i className="ri-facebook-fill"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700"><i className="ri-linkedin-fill"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><i className="ri-instagram-line"></i></a>
            <a href="#" aria-label="Dribbble" className="hover:text-pink-400"><i className="ri-dribbble-line"></i></a>
            <a href="#" aria-label="X" className="hover:text-black"><i className="ri-twitter-x-line"></i></a>
          </div>
          <div className="text-sm text-black mb-1">© Leo9Studio.</div>
          <div className="text-sm text-black">All rights reserved 2025</div>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-bold text-xl mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Design</li>
            <li>Technology</li>
            <li>Neuromarketing</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold text-xl mb-2">About</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Team</li>
            <li>Career</li>
            <li>Clients</li>
          </ul>
        </div>
        {/* Quick Links 1 */}
        <div>
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Work</li>
            <li>Blog</li>
            <li>Reach Us</li>
            <li>Site Map</li>
          </ul>
        </div>
        {/* Quick Links 2 */}
        <div>
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Refund Policy</li>
            <li>Copyrights Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
