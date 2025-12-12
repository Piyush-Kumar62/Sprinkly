import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Sprinkly</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2025 Sprinkly. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="https://www.linkedin.com/in/piyush-kumar62/" className="hover:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Sprinkly LinkedIn">
            <FaLinkedin size={24} />
          </a>

          <a href="https://github.com/Piyush-Kumar62" className="hover:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Piyush's GitHub">
            <FaGithub size={24} />
          </a>

          <a href="https://x.com/PIYUSH_KUMAR6" className="hover:text-gray-200" target="_blank" rel="noopener noreferrer" aria-label="Sprinkly Twitter">
            <FaTwitter size={24} />
          </a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;