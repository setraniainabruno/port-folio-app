import React from 'react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-16 relative">
         
          <div className="absolute -bottom-22 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-2xl">👋</span>
          </div>
        </div>

        {/* Main Content */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Razafimiharison
          </span>
          <br />
          <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Setraniaina Bruno</span>
        </h2>

        <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Développeur d'applications passionné par l'<span className="text-blue-600 font-semibold">intelligence artificielle</span> et le <span className="text-purple-600 font-semibold">développement fullstack</span>
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 max-w-6xl mx-auto">
          <div className={`backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Andrainjato, Fianarantsoa</p>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <Phone className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+261 33 89 871 90</p>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <Mail className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>brunoharison18@gmail.com</p>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <Linkedin className="w-6 h-6 text-blue-700 mx-auto mb-2" />
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Setraniaina Bruno</p>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
          }`}>
            <Github className={`w-6 h-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mx-auto mb-2`} />
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>setraniainabruno</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Découvrir mon profil
          </button>
          <a 
            href="#contact" 
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border ${
              isDarkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700 border-gray-600' 
                : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200'
            }`}
          >
            Me contacter
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className={`animate-bounce transition-colors duration-300 ${
            isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;