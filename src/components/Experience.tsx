import React from 'react';
import { Calendar, MapPin, Trophy, Building } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const experiences = [
    {
      title: 'Hackathon Acces Development Hub',
      company: 'Acces Development Hub',
      period: 'Mars 2025',
      location: 'Madagascar',
      type: 'Compétition',
      icon: Trophy,
      description: 'Compétition de développement organisée par Accès Development Hub',
      achievements: [
        'Développement d\'une plateforme de gestion des achats pour une entreprise',
        'Technologies utilisées : React, Django et MongoDB',
        'Travail en équipe sous contrainte de temps',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Hackathon Emichack - 2ème place',
      company: 'École de Management et d\'Innovation Technologique (EMIT)',
      period: 'Mars 2025',
      location: 'Madagascar',
      type: 'Compétition',
      icon: Trophy,
      description: 'Compétition interne à l\'École de Management et d\'Innovation Technologique (EMIT)',
      achievements: [
        'Développement d\'une plateforme de gestion des épidémies',
        'Intégration du Big Data et de l\'intelligence artificielle',
        'Technologies : React, Node.js, Python et MongoDB',
        '2ème place obtenue parmi tous les participants',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Stage - Développeur Web',
      company: 'Commune Urbaine d\'Antsirabe',
      period: 'Juillet à Octobre 2024',
      location: 'Antsirabe, Madagascar',
      type: 'Stage',
      icon: Building,
      description: 'Stage effectué dans le cadre de la Commune Urbaine d\'Antsirabe',
      achievements: [
        'Développement et déploiement d\'une application web de gestion du courrier',
        'Technologies : React, Node.js et MongoDB',
        'Amélioration des processus administratifs',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Stage - Développeur Desktop',
      company: 'Direction Régionale des Impôts à Antsirabe',
      period: 'Juin à Août 2023',
      location: 'Antsirabe, Madagascar',
      type: 'Stage',
      icon: Building,
      description: 'Stage effectué à la Direction Régionale des Impôts à Antsirabe',
      achievements: [
        'Élaboration et mise en œuvre d\'une application desktop',
        'Gestion des pointages et des congés',
        'Technologies : Java Swing, PostgreSQL',
        'Interface utilisateur intuitive et fonctionnelle',
      ],
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Expériences Professionnelles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Mon parcours professionnel et mes réalisations concrètes
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${
            isDarkMode 
              ? 'bg-gradient-to-b from-blue-400 to-purple-400' 
              : 'bg-gradient-to-b from-blue-200 to-purple-200'
          }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' 
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-100'
                  }`}>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>
                    
                    <p className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {exp.company}
                    </p>
                    
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className={`mb-4 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;