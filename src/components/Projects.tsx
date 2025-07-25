import React from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Download } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'Gestion de Courrier',
      description: 'Application web complète pour la gestion du courrier de la Commune Urbaine d\'Antsirabe',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://gestion-courrier-app.onrender.com',
      githubUrl: '',
      features: [
        'Interface utilisateur moderne et responsive',
        'Gestion complète du workflow de courrier',
        'Système d\'authentification sécurisé',
        'Tableaux de bord avec statistiques',
      ],
      status: 'Déployé',
      category: 'Web Application',
    },
    {
      title: 'Gestion de Chambres',
      description: 'Plateforme web pour la gestion et la réservation de chambres avec interface d\'administration',
      technologies: ['React', 'Spring Boot', 'MongoDB'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://gestion-chambre-app.onrender.com',
      githubUrl: '',
      features: [
        'Système de réservation en temps réel',
        'Interface d\'administration complète',
        'Gestion des disponibilités',
        'Notifications automatiques',
      ],
      status: 'Déployé',
      category: 'Web Application',
    },
    {
      title: 'Gestion de Bibliothèques',
      description: 'Application web pour la gestion complète des ressources et emprunts de bibliothèques',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      
      features: [
        'Catalogue numérique des livres',
        'Gestion des emprunts et retours',
        'Système de recherche avancée',
        'Tableau de bord administrateur',
      ],
      status: 'Terminé',
      category: 'Web Application',
    },
    {
      title: 'Plateforme de Gestion des Épidémies',
      description: 'Solution innovante intégrant Big Data et IA pour le suivi et la gestion des épidémies',
      technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://pandemie.onrender.com',
      githubUrl: '',
      features: [
        'Analyse prédictive avec machine learning',
        'Visualisation de données en temps réel',
        'Système d\'alertes intelligent',
        'Interface de suivi géographique',
      ],
      status: '2ème place - Hackathon',
      category: 'AI & Big Data',
    },
    {
      title: 'Gestion des Pointages et Congés',
      description: 'Application desktop complète pour la gestion RH avec système de pointage automatisé',
      technologies: ['Java Swing', 'PostgreSQL', 'JPA'],
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interface desktop native',
        'Gestion automatisée des pointages',
        'Calcul automatique des heures',
        'Gestion des demandes de congés',
      ],
      status: 'Déployé en entreprise',
      category: 'Desktop Application',
    },
    {
      title: 'Quiz Interactif Mobile',
      description: 'Application mobile de quiz avec système de scoring et progression personnalisée',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interface mobile native',
        'Système de progression',
        'Quiz adaptatifs',
        'Classements en temps réel',
      ],
      status: 'Terminé',
      category: 'Mobile Application',
    },
  ];

  const categories = ['Tous', 'Web Application', 'AI & Big Data', 'Desktop Application', 'Mobile Application'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={`py-20 ${isDarkMode
      ? 'bg-gradient-to-br from-gray-900 to-gray-800'
      : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Projets Réalisés
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Une sélection de mes réalisations techniques et créatives
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group ${isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status.includes('Déployé') ? 'bg-green-500 text-white' :
                    project.status.includes('place') ? 'bg-yellow-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                </div>

                <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {project.title}
                </h3>

                <p className={`mb-4 line-clamp-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0,4).map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 text-xs rounded-full ${isDarkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                      }`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-3 py-1 text-xs rounded-full ${isDarkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                      }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className={`space-y-1 mb-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Voir la démo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group border ${isDarkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
                        }`}
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Obtenir le code
                    </a>
                  )}
                  {(!project.githubUrl) && (
                    <a
                      aria-disabled
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group border ${isDarkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
                        }`}
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Code indisponible
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;