// components/CertificationsEntry.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link

interface CertificationsEntryProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  imageSrc?: string; // Optional project image source
  projectLink?: string; // Optional link for the project image
  certificationsType: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh' | 'eighth' | 'tenth' | string;
  techStackIcons?: string[]; // Optional array of paths to tech stack icons
}

// Mapping of certifications types to image paths
const certificationsImagePaths: Record<string, string> = {
  first: '/certifications/Coursera P724RBL6SNE4_page-0001.jpg', 
  second: '/certifications/Coursera ZUHKBCL4MYYH_page-0001.jpg', 
  third: '/certifications/bronze_trophy.png', 
  fourth: '/certifications/special_trophy.png', 
  fifth: '/certifications/participant_trophy.png', 
  sixth: '/certifications/asdos pbo 1.jpg',
  seventh: '/certifications/Sertifikat Asdos Genap 2023-2024_3 Jofanza Denis Aldida_page-0001.jpg',
  eighth: '/certifications/Sertifikat Asdos Genap 2023-2024_2 Jofanza Denis Aldida_page-0001.jpg',
  tenth: '/certifications/Asdos Algoritma Pemrograman 1.jpeg',
  // Add more mappings here if you have different certifications types
};

const CertificationsEntry: React.FC<CertificationsEntryProps> = ({
  entryNumber,
  title,
  award,
  description,
  imageSrc,
  projectLink, // Destructure projectLink
  certificationsType,
  techStackIcons, // Destructure techStackIcons
}) => {
  // Get the correct image path based on certificationsType from the mapping
  const certificationsImagePath = certificationsImagePaths[certificationsType];

  return (
    // Main container: flex-col on mobile, flex-row on medium screens and up
    // Added responsive padding: smaller on mobile, larger on medium+
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-6 md:py-10 last:border-b-0">
      {/* Entry Number - Displays the sequential number for the certifications entry */}
      {/* Adjusted text size for different breakpoints */}
      {/* Adjusted margin for different breakpoints */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0 w-full md:w-auto text-center md:text-left">
        {entryNumber}
      </div>

      {/* Content Area - Contains the project image and the text details */}
      {/* Flex direction changes based on screen size */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Image Placeholder for the Project Image - Displays the project image or a placeholder */}
        {/* Adjusted width for different breakpoints */}
        {/* Adjusted margin for different breakpoints */}
        <div className="w-full md:w-1/3 aspect-video flex items-center justify-center rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0"> {/* Added bg-gray-800 back for placeholder */}
          {imageSrc ? (
            // Render the project image using object-contain to prevent cropping
            // Wrap image in Link if projectLink is provided
            projectLink ? (
              <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="flex w-full h-full items-center justify-center"> {/* Ensure link covers the image area */}
                <Image
                  src={imageSrc}
                  alt={`Project for ${title}`}
                  className="object-contain w-full rounded-sm" // w-full h-full makes it responsive within its container
                  width={200} // Add appropriate width and height for Image component
                  height={300}
                />
              </Link>
            ) : (
              <Image
                src={imageSrc}
                alt={`Project for ${title}`}
                className="object-contain w-full h-full rounded-sm" // w-full h-full makes it responsive within its container
                width={500} // Add appropriate width and height for Image component
                height={300}
              />
            )
          ) : (
            // Display placeholder text if no image source is provided
            <span className="text-gray-500 text-sm sm:text-base">Project Image</span>
          )}
        </div>

        {/* Text Content - Contains the award, title, and description */}
        <div className="flex-1">
          {/* Award Section - Displays the certifications icon and the award text */}
          <div className="flex items-center text-white/80 text-sm mb-2">
            {/* Certifications Image - Renders the appropriate certifications PNG based on certificationsType */}
            {certificationsImagePath && ( // Render image only if a path is found
                <Image
                src={certificationsImagePath} // Use the path from the mapping
                alt={`${award} Certifications`}
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 object-contain" // Adjusted certifications size responsively
                width={20} // Add appropriate width and height for Image component
                height={20}
              />
            )}
            {/* Award Text */}
            <span>{award}</span>
          </div>

          {/* Title - Displays the title of the certifications entry */}
          {/* Adjusted text size for different breakpoints */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{title}</h3>

          {/* Tech Stack Icons */}
          {techStackIcons && techStackIcons.length > 0 && (
            <div className="flex items-center space-x-2 mb-4"> {/* Added margin bottom */}
              {techStackIcons.map((iconPath, iconIndex) => (
                <Image
                  key={iconIndex} // Use index as key for mapping icons
                  src={iconPath} // Path to the tech stack icon
                  alt="Tech Stack Icon"
                  className="w-5 h-5 object-contain" // Adjust size as needed
                  width={20} // Add appropriate width and height for Image component
                  height={20}
                />
              ))}
            </div>
          )}


          {/* Description - Displays the description of the certifications entry */}
          {/* Adjusted text size for different breakpoints */}
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsEntry;
