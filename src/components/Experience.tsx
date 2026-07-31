import React from 'react';
import { Calendar, MapPin, Trophy, Building, Briefcase } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const experiences = [
    {
      title: 'Data Scientist & Développeur IA',
      company: 'AtmoTrack Madatlas',
      period: 'Juillet 2026',
      location: 'Madagascar',
      type: 'Expérience professionnelle',
      icon: Briefcase,
      description: 'Développement d\'une plateforme d\'analyse prédictive de la qualité de l\'air',
      achievements: [
        'Détection et anticipation des épisodes de pollution par Machine Learning',
        'Conception d\'un pipeline de données et d\'un modèle XGBoost (traitement, feature engineering, prédiction)',
        'Création de tableaux de bord interactifs pour le suivi en temps réel',
        'Technologies : Python, XGBoost, Pandas, PostgreSQL, Power BI',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Développeur IA — Système Multi-Agents pour le Support Client',
      company: 'Projet personnel',
      period: 'Juin 2026',
      location: 'Madagascar',
      type: 'Expérience professionnelle',
      icon: Briefcase,
      description: 'Mise en place d\'un système multi-agents basé sur l\'automatisation intelligente du traitement des emails',
      achievements: [
        'Développement de workflows IA avec n8n pour l\'analyse, la classification et la réponse automatique aux emails',
        'Architecture Docker et base de connaissances Neo4j pour améliorer le contexte et le raisonnement des agents',
        'Technologies : n8n, Neo4j, Docker, OpenAI API, LLM',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Hackathon Emichack 4.0 - 2ème place',
      company: 'École de Management et d\'Innovation Technologique (EMIT)',
      period: 'Juin 2026',
      location: 'Madagascar',
      type: 'Compétition',
      icon: Trophy,
      description: 'Concours d\'algorithmique',
      achievements: [
        'Résolution de problèmes algorithmiques en Python',
        '2ème place obtenue parmi tous les participants',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Développeur Backend',
      company: 'Hackathon Youth Computing',
      period: 'Mai 2026',
      location: 'Madagascar',
      type: 'Compétition',
      icon: Trophy,
      description: 'Conception et développement du backend d\'une plateforme Smart City',
      achievements: [
        'Traitement des données urbaines en temps réel',
        'Implémentation des modules d\'authentification et de gestion des rôles utilisateurs',
        'Technologies : NestJS, MongoDB, WebSocket',
      ],
      color: 'from-fuchsia-500 to-purple-500',
    },
    {
      title: 'Hackathon Emichack - 2ème place',
      company: 'École de Management et d\'Innovation Technologique (EMIT)',
      period: 'Mars 2025',
      location: 'Madagascar',
      type: 'Compétition',
      icon: Trophy,
      description: 'Développeur Full Stack — plateforme de gestion des épidémies intégrant Big Data et intelligence artificielle',
      achievements: [
        'Développement backend d\'une plateforme de gestion des épidémies',
        'Gestion des données massives et intégration de modèles d\'IA pour l\'analyse prédictive',
        'Authentification et gestion des rôles',
        'Technologies : Express.js, Python, MongoDB, API REST',
        '2ème place obtenue parmi tous les participants',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Stage - Développeur Full Stack',
      company: 'Commune Urbaine d\'Antsirabe',
      period: 'Juillet à Octobre 2024',
      location: 'Antsirabe, Madagascar',
      type: 'Stage',
      icon: Building,
      description: 'Stage effectué dans le cadre de la Commune Urbaine d\'Antsirabe',
      achievements: [
        'Développement et déploiement d\'une application web de gestion du courrier entrant et sortant',
        'Authentification et notifications par email',
        'Technologies : React, Express.js, MongoDB',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Expériences Professionnelles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Mon parcours professionnel et mes réalisations concrètes
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${isDarkMode
              ? 'bg-gradient-to-b from-blue-400 to-purple-400'
              : 'bg-gradient-to-b from-blue-200 to-purple-200'
            }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${isDarkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-100'
                    }`}>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      {exp.title}
                    </h3>

                    <p className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                      {exp.company}
                    </p>

                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
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

                    <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
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