import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const educationData = [
    {
      degree: 'Master en Science de Données et Intelligence Artificielle',
      school: 'École de Management et d\'Innovation Technologique (EMIT)',
      period: '2024 - 2025',
      status: 'En cours - Première année',
      description: 'Formation spécialisée en science des données, machine learning et intelligence artificielle',
      highlights: [
        'Machine Learning et Deep Learning',
        'Analyse et visualisation de données',
        'Algorithmes d\'optimisation',
        'Projets pratiques en IA',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Licence en Informatique',
      school: 'École de Management et d\'Innovation Technologique (EMIT)',
      period: '2022 - 2024',
      status: 'Diplômé - Troisième année',
      description: 'Formation complète en développement logiciel et systèmes informatiques',
      highlights: [
        'Développement web et mobile',
        'Bases de données et systèmes',
        'Génie logiciel',
        'Projets de développement',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Mon parcours académique en informatique et intelligence artificielle
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${
            isDarkMode 
              ? 'bg-gradient-to-b from-blue-400 to-purple-400' 
              : 'bg-gradient-to-b from-blue-200 to-purple-200'
          }`}></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' 
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-100'
                  }`}>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 leading-tight ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h3>
                    
                    <p className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {edu.school}
                    </p>
                    
                    <div className={`flex items-center mb-4 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    
                    <p className={`mb-6 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className={`font-semibold flex items-center ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Matières principales
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <div key={hlIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                            <span className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        {/* <div className={`mt-16 rounded-2xl p-8 text-center ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Objectifs Académiques
          </h3>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Actuellement en formation pour devenir un expert en science des données et intelligence artificielle, 
            je me concentre sur l'acquisition de compétences avancées en machine learning, 
            analyse prédictive et développement de solutions IA innovantes.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Education;