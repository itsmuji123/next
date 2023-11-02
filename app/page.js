"use client";
import React, { useState}  from "react";
import Image from "next/image";
import img from '../public/ii.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const data = [
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 1",
    websiteUrl: "http://example.com",
  }, 
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 2",
    websiteUrl: "http://example2.com",
  },
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 1",
    websiteUrl: "http://example.com",
  }, 
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 2",
    websiteUrl: "http://example2.com",
  },
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 1",
    websiteUrl: "http://example.com",
  }, 
  {
    image: "/ii.png", // Updated image property
    year: 'YEAR',
    ceoInfo: "CEO Info 2",
    websiteUrl: "http://example2.com",
  },
  // Add more objects as needed
];


function Page() {
  const [showAll, setShowAll] = useState(false);

  const displayData = showAll ? data : data.slice(0, 5);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-4 w-1/4 m-auto" style={{background:"#D3EAFA"}}>
        <h1 className="font-bold text-black pt-20 text-3xl">Relationships</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center my-4 w-1/2 mx-auto mt-4 mb-4">
        <div className="relative w-full">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg p-2 pr-10 w-full"
            placeholder="Search..."
          />
          <div className="absolute right-3 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 17a7 7 0 017-7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5-5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Component mapping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {displayData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border-2 border-solid border-black mx-12 grid grid-cols-4"
          >
            <div className="flex-col text-center border-r-2 border-solid border-black flex items-center justify-center col-1/2">
              <Image src={img} width={100} height={100} alt="Image" />
              <h2 className="font-bold">Logo</h2>
    
            </div>
            <div className="text-center border-r-2 border-solid border-black flex items-center justify-center font-bold">{item.year}</div>
            <div className="text-center border-r-2 border-solid border-black flex items-center justify-center font-bold">{item.ceoInfo}</div>
            <div className="text-center flex items-center justify-center">
              <a href={item.websiteUrl} target="_blank" className="flex justify-center items-center" rel="noopener noreferrer">  <h2 className="mr-10 font-bold">Website</h2>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
              </a>
            </div>
          </div> 
        ))}
      </div>

      {/* Show more button */}
      {data.length > 5 && (
        <div className="text-center my-4">
          <button
            className="text-black font-bold border border-solid border-black py-2 px-4 rounded-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"} <FontAwesomeIcon icon={faArrowRight} className="ml-3"/>
          </button>
        </div>
      )}
    </main>
  );
}

export default Page;
