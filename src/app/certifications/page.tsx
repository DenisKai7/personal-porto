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
    imageHeight: 1200,
    projectLink: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=447&cvid=oAo4EAnM9lEPzAy8symkqw==", // <-- Add the link for Procrash
    certificationsType: "/logo/Certiport_Logo.jpg", // Specify the certifications type
    techStackIcons: [ // <-- Add paths to tech stack icons for Procrash
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "02",
    title: "Certificate of Presenter",
    award: "Scopus Indonesia Conference 2025",
    description: "Awarded for contributing as a presenter at the International Conference on Emerging Trends in AI and Computational Technologies in November 2025. This reflects my active engagement with academic research and the global AI community.",
    imageSrc: '/certifications/scopus.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://iconest.info/", // <-- Add the link for Talento
    certificationsType: "/logo/Scopus_logo.png", // Specify the certifications type
    techStackIcons: [ // <-- Add paths to tech stack icons for Talento
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "03",
    title: "Google Student Ambassador 2025",
    award: "Google Indonesia",
    description: "I graduated from this program after being selected from 12,000 students nationwide. This certificate recognizes my successful participation and exceptional leadership in driving the adoption of Google AI within my university community. During my tenure, I was also awarded special recognition badges, including Rising Star, Excellence, and On-Campus Event Host.",
    imageSrc: '/certifications/Jofanza Denis Aldida_GSA_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.linkedin.com/in/jofanza-denis-aldida/", // <-- Add the link for KachingKo
    certificationsType: "/logo/google.svg", // Specify the certifications type (using participant as a placeholder for 4th)
    techStackIcons: [ // <-- Add paths to tech stack icons for KachingKo
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "04",
    title: "Machine Learning Graduate",
    award: "Bangkit Academy 2024",
    description: "I graduated from Bangkit Academy 2024 Program. This certificate recognizes my successful participation, exceptional leadership, and implementation of machine learning concepts in driving the product development by final capstone project.",
    imageSrc: '/certifications/[Bangkit 2024 Batch 2] Certificate - M463B4KY2079_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.linkedin.com/in/jofanza-denis-aldida/", // <-- Add the link for KachingKo
    certificationsType: "/logo/Bangkit.jpg", // Specify the certifications type (using participant as a placeholder for 4th)
    techStackIcons: [ // <-- Add paths to tech stack icons for KachingKo
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "05",
    title: "Crash Course on Python",
    award: "Google",
    description: "Successfully completed an online non-credit course authorized by Google and offered through Coursera. This certificate demonstrates my foundational knowledge and practical skills in Python programming.",
    imageSrc: '/certifications/Coursera P724RBL6SNE4_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/P724RBL6SNE4", // <-- Add the link for eCarga
    certificationsType: "/logo/google.svg", // Specify the certifications type
     techStackIcons: [ // <-- Add paths to tech stack icons for eCarga
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "06",
    title: "Using Python to Interact with the Operating System",
    award: "Google",
    description: "Successfully completed an online non-credit course authorized by Google and offered through Coursera. This certificate validates my ability to use Python for interacting directly with the operating system.",
    imageSrc: '/certifications/Coursera ZUHKBCL4MYYH_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/ZUHKBCL4MYYH", // <-- Add the link for Neosolutions
    certificationsType: "/logo/google.svg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "07",
    title: "Machine Learning",
    award: "Stanford University",
    description: "Successfully completed a comprehensive 3-course specialization taught by Andrew Ng. This certification validates my practical skills in applying modern machine learning concepts, including supervised and unsupervised learning, to solve real-world problems.",
    imageSrc: '/certifications/Coursera WJ55943O2OCG_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/specialization/WJ55943O2OCG", // <-- Add the link for Neosolutions
    certificationsType: "/logo/stanford.avif", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "08",
    title: "Structuring Machine Learning Projects",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my knowledge in structuring and strategizing machine learning projects effectively.",
    imageSrc: '/certifications/Coursera WK5U8F7UR24H_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/WK5U8F7UR24H", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "09",
    title: "DeepLearning.AI TensorFlow Developer",
    award: "DeepLearning.AI",
    description: "Successfully completed a comprehensive 4-course Professional Certificate program. This certification validates my ability to build and train neural networks using TensorFlow, covering applications in computer vision, natural language processing, and time series prediction.",
    imageSrc: '/certifications/Coursera L33S7FDEQS8Y_page-0001 (1).jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/specialization/L33S7FDEQS8Y", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "10",
    title: "Browser-based Models with TensorFlow.js",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing machine learning models directly in the browser using TensorFlow.js.",
    imageSrc: '/certifications/Coursera 4HQWHLQLLGIX_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/4HQWHLQLLGIX", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "11",
    title: "Device-based Models with TensorFlow Lite",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing machine learning models on edge devices using TensorFlow Lite.",
    imageSrc: '/certifications/Coursera 4C3XOQY8OHQG_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/4C3XOQY8OHQG", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "12",
    title: "Data Pipelines with TensorFlow Data Services",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate validates my ability to build efficient and scalable data pipelines for machine learning models using TensorFlow Data Services.",
    imageSrc: '/certifications/Coursera HNJUUZ8QDG2F_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/HNJUUZ8QDG2F", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "13",
    title: "Advanced Computer Vision with TensorFlow",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing advanced computer vision models using TensorFlow.",
    imageSrc: '/certifications/Coursera 4NJV2V5DOBOW_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/4NJV2V5DOBOW", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "14",
    title: "Natural Language Processing with Probabilistic Models",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing natural language processing models using probabilistic approaches.",
    imageSrc: '/certifications/Coursera OOHQM9N40Y4N_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/OOHQM9N40Y4N", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "15",
    title: "Natural Language Processing with Classification and Vector Spaces",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing natural language processing models using classification and vector space techniques.",
    imageSrc: '/certifications/Coursera FKE4YO781X8J_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/FKE4YO781X8J", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "16",
    title: "Natural Language Processing with Sequence Models",
    award: "DeepLearning.AI",
    description: "Successfully completed an online non-credit course authorized by DeepLearning.AI and offered through Coursera. This certificate demonstrates my successful completion of training focused on implementing natural language processing models using sequence models.",
    imageSrc: '/certifications/Coursera YSMKFZYNOX0U_page-0001.jpg', // Replace with the actual image path
    imageHeight: 1200,
    projectLink: "https://www.coursera.org/account/accomplishments/verify/YSMKFZYNOX0U", // <-- Add the link for Neosolutions
    certificationsType: "/logo/DLai.jpg", // Specify the certifications type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/gemini.svg',
    ],
  },
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
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 mt-2 md:mt-5 md:mb-64"> {/* Increased margin bottom significantly */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block pb-16">
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
