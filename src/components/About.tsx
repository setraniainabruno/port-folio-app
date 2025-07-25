import React from 'react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';
import profile from '../assets/photo.png';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const qualities = [
    { icon: Brain, title: 'Intelligence Artificielle', description: 'Passionné par le machine learning et l\'analyse de données' },
    { icon: Code, title: 'Développement Fullstack', description: 'Expertise en React, Node.js, Python et Java' },
    { icon: Database, title: 'Gestion de Données', description: 'Maîtrise des bases de données relationnelles et NoSQL' },
    { icon: Lightbulb, title: 'Innovation', description: 'Toujours à la recherche de solutions créatives' },
  ];

  const personalQualities = [
    { label: 'Rigueur', color: 'bg-blue-100 text-blue-800' },
    { label: 'Esprit d\'équipe', color: 'bg-purple-100 text-purple-800' },
    { label: 'Curiosité', color: 'bg-green-100 text-green-800' },
  ];

  const languages = [
    { name: 'Malgache', level: 'Natif' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 order-2 lg:order-1">
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Étudiant passionné en Master Science de Données et IA à l'EMIT, je transforme les idées
              en solutions technologiques innovantes. Mon parcours combine développement fullstack
              et intelligence artificielle pour créer des applications qui font la différence.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Spécialisé dans le <span className="font-semibold text-blue-600">développement web moderne</span>
              (React, Node.js, Spring boot, Python) et l'<span className="font-semibold text-purple-600">intelligence artificielle</span>,
              j'ai déjà réalisé plusieurs projets concrets incluant des applications de gestion
              déployées en production et des solutions IA primées en hackathon.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Toujours en quête d'apprentissage et d'innovation, je cherche à contribuer à des projets
              ambitieux où technologie rime avec impact positif. Mon objectif : devenir un expert
              reconnu en IA tout en gardant une approche pragmatique du développement.
            </p>
          </div>

          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                  {/* Motif de fond */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    <div className="absolute top-12 right-8 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white"></div>
                  </div>

                  {/* Initiales stylisées */}
                  <div className="text-center z-10">
                    <div className="text-8xl font-bold text-white mb-2 tracking-wider">
                      <img
                        src={profile}
                        alt='Profile'
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                     </div>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform -skew-x-12 hover:skew-x-12 transition-transform duration-700"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-16">
          {qualities.map((quality, index) => (
            <div key={index} className={`p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isDarkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}>
              <quality.icon className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{quality.title}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{quality.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Qualities */}
          <div className={`p-8 rounded-2xl ${isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-gray-700'
              : 'bg-gradient-to-br from-gray-50 to-blue-50'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Qualités personnelles</h3>
            <div className="flex flex-wrap gap-3">
              {personalQualities.map((quality, index) => (
                <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${quality.color}`}>
                  {quality.label}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`p-8 rounded-2xl ${isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-gray-700'
              : 'bg-gradient-to-br from-gray-50 to-purple-50'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Langues</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>{language.name}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${isDarkMode
                      ? 'text-gray-300 bg-gray-600'
                      : 'text-gray-600 bg-white'
                    }`}>
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Objectifs */}
          <div className={`p-8 rounded-2xl ${isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-gray-700'
              : 'bg-gradient-to-br from-gray-50 to-green-50'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Objectifs 2025</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Maîtriser le Machine Learning
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Contribuer à l'open source
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Décrocher un stage en IA
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Interests */}
        <div className="mt-12 text-center">
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Centres d'intérêt</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-medium">
              ⚽ Football
            </div>
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
              💻 Codingame
            </div>
            <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-medium">
              🏓 Ping-pong
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;