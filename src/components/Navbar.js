import React, { useState } from "react";

export default function Navbar() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        
        {/* Left: Name + Links */}
        <div className="flex items-center">
          <a href="#about" className="title-font font-medium text-white text-xl">
            Shivam Shukla
          </a>
          <nav className="ml-10 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex space-x-5 text-base">
            <a href="#projects" className="hover:text-white">Past Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </nav>
        </div>

        {/* Right: Avatar + Preview */}
        <div className="relative mt-4 md:mt-0">
          <img
            src="shivam.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
            onClick={() => setShowPreview(!showPreview)}
          />

          {showPreview && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 z-20 text-gray-800">
              <h4 className="text-lg font-semibold">Shivam Shukla</h4>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
              <p className="mt-2 text-xs">Email: shivam@example.com</p>
              <p className="text-xs">Location: India</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
