// src/app/More.tsx

'use client'; // This page uses client-side interactivity (form, potential animations)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText'; 
import Squares from '@/blocks/Backgrounds/Squares/Squares';
import RollingGallery from '@/blocks/Components/RollingGallery/RollingGallery';

// Define social media links (can reuse from layout or define here)
const socialLinks = [
    { platform: "GitHub", href: "https://github.com/DenisKai7", iconPath: "/icons/github_icon.svg" }, 
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/jofanza-denis-aldida/", iconPath: "/icons/linkedin_icon.svg" }, 
    { platform: "Gmail", href: "mailto:aldidajofanzadenis@gmail.com", iconPath: "/icons/gmail_icon.svg" }, 
];

// Define More information
const MoreInfo = {
    email: "aldidajofanzadenis@gmail.com",
};


export default function More() {
  // Dokumentasi kegiatan pribadi
  const activityImages = [
    "/activity/activity1.jpg",
    "/activity/activity2.jpg",
    "/activity/activity3.jpg",
    "/activity/activity4.jpg",
    "/activity/activity5.jpg",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        {/* Using BlurText for consistency, adjust as needed */}
        <BlurText
          text="Get In Touch"
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
        />
      </div>

      {/* More Content Container */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* More Information Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">More Information</h2>
          {MoreInfo.email && (
            <div className="flex items-center text-white/80">
              {/* You can add an icon here, e.g., a mail icon SVG or Image */}
              <span className="mr-2 text-cyan-500">📧</span> {/* Example icon */}
              <a href={`mailto:${MoreInfo.email}`} className="hover:underline text-base sm:text-lg">{MoreInfo.email}</a>
            </div>
          )}
          {/* Add phone and location here if included in MoreInfo */}
          {/*
          {MoreInfo.phone && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📞</span>
              <a href={`tel:${MoreInfo.phone}`} className="hover:underline text-base sm:text-lg">{MoreInfo.phone}</a>
            </div>
          )}
          {MoreInfo.location && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📍</span>
              <span className="text-base sm:text-lg">{MoreInfo.location}</span>
            </div>
          )}
          */}

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={link.iconPath} // Use the icon path
                    alt={`${link.platform} icon`}
                    width={30} // Adjust size as needed
                    height={30} // Adjust size as needed
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain" // Responsive sizing
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Documentation Gallery Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Activity Documentation</h2>
          <RollingGallery images={activityImages} autoplay={true} pauseOnHover={true} />
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
      <Squares 
        speed={0.5} 
        squareSize={50} // Adjust size as needed
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#fff'
        hoverFillColor='#222'
        />
      </div>

      {/* Optional: Add a footer here if this page doesn't use the global layout footer */}
       {/* <footer className="mt-16 text-center text-white/50 text-sm">
         <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p>
       </footer> */}
    </main>
  );
}
