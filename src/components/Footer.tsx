import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-black' : 'bg-gray-900'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                : 'text-white'
              }`}>
              Razafimiharison Setraniaina Bruno 
            </h3>
            
            <p className={`max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-300'
              }`}>
              Développeur passionné créant des solutions innovantes avec les dernières technologies
            </p>

          </div>

          

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;