import React, { useState } from 'react';

const servicesCards = [
  {
    title: 'Design.',
    desc: 'Handcraft the user experience.',
    bg: 'bg-pink-100',
  },
  {
    title: 'Technology.',
    desc: 'Leverage the power of code.',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Marketing.',
    desc: 'Creative strategies for brands.',
    bg: 'bg-purple-100',
  },
];

const aboutCards = [
  {
    title: 'About Us.',
    desc: 'We are super-efficient yet humble to serve you!',
    bg: 'bg-pink-100',
  },
  {
    title: 'Team.',
    desc: 'We are proud of our experienced and accomplished team!',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Career.',
    desc: 'Can you offer such experience?',
    bg: 'bg-purple-100',
  },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { name: 'Work', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Clients', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Knowledge', href: '#' },
  ];

  // Cards to show based on hovered menu
  let cards = null;
  if (hoveredMenu === 'Services') cards = servicesCards;
  if (hoveredMenu === 'About') cards = aboutCards;

  return (
    <>
      <header className={darkMode ? 'sticky top-0 z-50 bg-black shadow' : 'sticky top-0 z-50 bg-white shadow'}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src="/leologo.svg" alt="Leo9 Logo" className="h-10 w-auto" />
          </a>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {menuItems.map(item => (
              <li
                key={item.name}
                onMouseEnter={() => {
                  if (item.name === 'Services' || item.name === 'About') setHoveredMenu(item.name);
                  else setHoveredMenu(null);
                }}
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative"
              >
                <a
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    hoveredMenu === item.name
                      ? 'text-pink-600 font-semibold'
                      : 'hover:text-red-600'
                  }`}
                >
                  {item.name}
                  {/* Add dot or arrow for active */}
                  {hoveredMenu === item.name && (
                    <span className="ml-1 align-middle">
                      {item.name === 'Services' || item.name === 'About' ? (
                        <span className="text-pink-600">&#9660;</span>
                      ) : (
                        <span className="text-pink-600">&#9679;</span>
                      )}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              className={darkMode ? 'text-xl hover:text-yellow-400' : 'text-xl hover:text-yellow-500'}
              aria-label="Switch to light mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <i className="ri-sun-fill"></i>
              ) : (
                <i className="ri-moon-fill"></i>
              )}
            </button>
            <a href="#" className={darkMode ? 'bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-200 transition-colors duration-200' : 'bg-black text-white px-5 py-2 rounded font-semibold hover:bg-red-700 transition-colors duration-200'}>
              Contact
            </a>
            {/* Hamburger for mobile */}
            <button className={darkMode ? 'md:hidden text-2xl text-white' : 'md:hidden text-2xl'} aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </nav>
      </header>
      {/* Hover Cards Section */}
      {cards && (
        <div
          className="max-w-7xl mx-auto flex gap-8 mt-8 px-4"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {cards.map(card => (
            <div
              key={card.title}
              className={`${card.bg} rounded-xl p-8 flex-1 transition-shadow shadow hover:shadow-lg`}
              style={{ minWidth: '260px' }}
            >
              <h2 className="text-3xl font-extrabold mb-2">{card.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{card.desc}</p>
              <span className="text-2xl font-bold text-gray-900 float-right">&rarr;</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}