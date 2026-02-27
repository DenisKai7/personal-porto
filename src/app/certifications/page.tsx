// src/app/certifications/page.tsx

"use client";
 
import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CertificationsEntry from "./CertificationsEntry";

const handleAnimationComplete = () => {
  console.log('Certifications page animation completed!');
};

// Define your certification entry data
const certificationsEntriesData = [
  {
    entryNumber: "01",
    title: "IC3 GS6 LEVEL 1",
    award: "Certiport",
    description: "Issued by Certiport, this globally recognized certification demonstrates a comprehensive understanding of essential digital skills. It highlights my proficiency in technology basics, digital citizenship, secure communication, collaboration, and information management.",
    imageSrc: '/certifications/Certiport.jpg', // Replace with the actual image path
    projectLink: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=447&cvid=oAo4EAnM9lEPzAy8symkqw==", // <-- Add the link for Procrash
    certificationsType: "/logo/Certiport_Logo.jpg", // Specify the certifications type
    techStackIcons: [ // <-- Add paths to tech stack icons for Procrash
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "02",
    title: "Talento",
    award: "Special Award",
    description: "Talento is a mobile app designed to help you visually showcase your talents and skills through videos and images. It's like a \"Tinder for jobs,\" allowing you to immediately grab the attention of HR professionals with your abilities, making your application unmissable.",
    imageSrc: '/solutions/talento.svg', // Replace with the actual image path
    projectLink: "https://talento-xi.vercel.app/", // <-- Add the link for Talento
    certificationsType: "second", // Specify the certifications type
    techStackIcons: [ // <-- Add paths to tech stack icons for Talento
        '/techstack/javascript.svg',
        '/techstack/css.svg',
    ],
  },
  {
    entryNumber: "03",
    title: "KachingKo",
    award: "4th Place",
    description: "Scan your receipts, unlock financial intelligence. This AI companion uses videos or images of receipts to categorize spending, analyze habits, guide your budget towards goals, and reward smart money decisions. KachingKo makes understanding your finances instant and engaging.",
    imageSrc: '/solutions/kachingko.svg', // Replace with the actual image path
    projectLink: "https://neosolve-hackit-kachingko.vercel.app/", // <-- Add the link for KachingKo
    certificationsType: "third", // Specify the certifications type (using participant as a placeholder for 4th)
    techStackIcons: [ // <-- Add paths to tech stack icons for KachingKo
        '/techstack/nextjs.svg',
        '/techstack/tailwind.svg',
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "04",
    title: "eCarga",
    award: "Finalist - 1st Place Mock Pitch",
    description: "A mobile app for booking specialized, accessible vehicles, created to cater to individuals with mobility disabilities. It serves as a direct link, connecting users in need of adapted transport (like wheelchair users) with suitable vehicles, providing convenient pickup service rather than requiring travel to a terminal.",
    imageSrc: '/solutions/ecarga.svg', // Replace with the actual image path
    projectLink: "https://github.com/Feinpoint/eCarga", // <-- Add the link for eCarga
    certificationsType: "fourth", // Specify the certifications type
     techStackIcons: [ // <-- Add paths to tech stack icons for eCarga
        '/techstack/flutter.svg',
        '/techstack/gcp.svg',
     ],
  },
  {
    entryNumber: "05",
    title: "Neosolutions",
    award: "Top 5 Finalist",
    description: "A CRM powered by Generative AI that transforms customer service by automatically detecting and processing conversations using NLP. It streamlines interactions, providing one-click access to relevant documentation and replies. Plus, it offers automated Kanban tracking for tickets and simulates AI resolution for low-level concerns.",
    imageSrc: '/solutions/neosolutions.svg', // Replace with the actual image path
    projectLink: "https://neosolutions-tenext-ai.vercel.app/", // <-- Add the link for Neosolutions
    certificationsType: "fifth", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/nextjs.svg',
        '/techstack/tailwind.svg',
        '/techstack/gemini.svg',
    ],
  }
];

export default function Certifications() {
  return (
    <>
      {/* Main content area for Certifications */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      { /* Make this hidden on mobile */ }
      {/* Added responsive hidden class */}
        <div className="hidden md:block" style={{ width: '100%', height: '600px', position: 'absolute', top: '0', zIndex: -1, opacity: 0.5 }}>
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Certifications Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Certifications"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20"> {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
            <FallingText
              text={` Besides being a developer and speaker , I am highly committed to continuous learning and validating my technical skills through professional certifications. It is a great way to deepen my expertise in Artificial Intelligence, Machine Learning, and software engineering, ensuring I can build reliable and innovative solutions. Here are some of the certifications I've earned:`}
              highlightWords={["developer", "speaker", "continuous", "learning", "professional", "certifications", "Artificial", "Intelligence", "Machine", "Learning", "software", "engineering"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10"> {/* Changed mb-25 to mb-10 for smaller mobile margin */}
            <FallingText
              text={` Besides being a developer and speaker , I am highly committed to continuous learning and validating my technical skills through professional certifications. It is a great way to deepen my expertise in Artificial Intelligence, Machine Learning, and software engineering, ensuring I can build reliable and innovative solutions. Here are some of the certifications I've earned:`}
              highlightWords={["developer", "speaker", "continuous", "learning", "professional", "certifications", "Artificial", "Intelligence", "Machine", "Learning", "software", "engineering"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>


          {/* Render Certifications Entries */}
          {/* Adjusted margin top for responsiveness */}
          <div className="mt-20 md:mt-40"> {/* Adjusted margin top */}
            {certificationsEntriesData.map((entry, index) => (
              <CertificationsEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                projectLink={entry.projectLink} // Pass the project link
                certificationsType={entry.certificationsType} // Pass the certifications type
                techStackIcons={entry.techStackIcons} // Pass the tech stack icons array
              />
            ))}
          </div>
        </div>


      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Jofanza Denis Aldida. All rights reserved.</p>
      </footer>
    </>
  );
};
