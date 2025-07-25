import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, FileImage, X } from 'lucide-react';
import diplomeLicence from '../assets/diplomeLicence.png';
import tableauHonneur from '../assets/tableau d\'honneur.png';
import emihack3 from '../assets/emihack.jpg';
import emihack1 from '../assets/emihack1.jpg';
import diplomeBacc from '../assets/diplomeBacc.jpg';


interface CertificationsProps {
  isDarkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certifications = [
    {
      title: 'EM!hack 3.0 – 2e Place',
      organization: 'École de Management et d\'Innovation Technologique (EMIT)',
      date: '2023',
      status: 'Participant',
      description: 'Deuxième place obtenue lors de l’événement EM!hack 3.0 grâce à la plateforme de gestion des épidémies : une solution innovante intégrant Big Data et Intelligence Artificielle pour le suivi et la gestion des épidémies.',
      skills: ['Big Data', 'Intelligence Artificielle', 'Travail en équipe'],
      color: 'from-green-500 to-emerald-500',
      hasImage: true,
      imageUrl: emihack3,
      linkUrl: null,
    },
    {
      title: 'Tableau d’Honneur – Licence Informatique',
      organization: 'École de Management et d\'Innovation Technologique (EMIT)',
      date: '2023 - 2024',
      status: 'Lauréat',
      description: 'Classé 3e major de la promotion en mention Informatique, parcours Développement d\'Application Internet / Intranet, durant l’année universitaire 2023-2024.',
      skills: ['Développement Web', 'Programmation', 'Analyse'],
      color: 'from-purple-500 to-pink-500',
      hasImage: true,
      imageUrl: tableauHonneur,
      linkUrl: null,
    },
    {
      title: 'Licence en Informatique',
      organization: 'École de Management et d\'Innovation Technologique (EMIT)',
      date: '2021 - 2024',
      status: 'Diplômé',
      description: 'Diplôme de Licence mention Informatique, parcours Développement d\'Application Internet / Intranet, obtenu avec la mention Bien pour l’année universitaire 2023-2024.',
      skills: ['Développement Web', 'Architecture Logicielle', 'Programmation', 'Analyse'],
      color: 'from-blue-500 to-cyan-500',
      hasImage: true,
      imageUrl: diplomeLicence,
      linkUrl: null,
    },

    {
      title: "Certification en Python 3",
      organization: "CodinGame by CoderPad",
      date: "14 OCT. 2024",
      status: "Certifié",
      description: "A validé ses compétences en résolution de problèmes avec python 3",
      skills: ["Python 3", "Problem Solving"],
      color: 'from-green-500 to-emerald-500',
      hasImage: false,
      imageUrl: null,
      linkUrl: 'https://www.codingame.com/certification/B0bh2iab4BFYsFr4NFlJzw',

    },
    {
      title: "EM!hack 1.0",
      organization: "École de Management et d\'Innovation Technologique (EMIT)",
      date: "28 mars au 02 avril 2022",
      status: "Participant",
      description: "Pour sa participation exceptionnelle à l'événement BUILD AND PLAY",
      skills: ["Hackathon", "Collaboration", "Innovation"],
      color: "from-purple-500 to-pink-500",

      hasImage: true,
      imageUrl: emihack1,
      linkUrl: null
    },
    {
      title: "Diplôme de bachelier de l'enseignement secondaire",
      organization: "Lycé André Resampa Antsirabe (LARA)",
      date: "26 avril 2021",
      status: "Diplômé",
      description: "Grade de Bachelier de l'Enseignement Secondaire (Série C) obtenu avec mention",
      skills: ["Baccalauréat Série C"],
      color: 'from-blue-500 to-cyan-500',
 
      hasImage: true,
      imageUrl: diplomeBacc,
      linkUrl: null
    }
  ];

  const handleCertificateClick = (cert: typeof certifications[0]) => {
    if (cert.hasImage && cert.imageUrl) {
      setSelectedCertificate(cert.imageUrl);
    } else if (cert.linkUrl) {
      window.open(cert.linkUrl, '_blank');
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className={`py-20 ${isDarkMode
      ? 'bg-gradient-to-br from-gray-900 to-gray-800'
      : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Certifications & Formations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Mon parcours de formation continue et mes certifications professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.status}
                  </span>
                  <div className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {cert.title}
                </h3>

                <p className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                  {cert.organization}
                </p>

                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {cert.description}
                </p>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 flex items-center ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Compétences acquises
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 text-sm rounded-full ${isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                        }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCertificateClick(cert)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  {cert.hasImage ? (
                    <FileImage className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  ) : (
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  )}
                  {cert.hasImage ? 'Voir le certificat' : 'Voir le profil'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        {/* <div className={`rounded-2xl p-8 text-center ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Statistiques de Formation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Années d'études</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Compétences</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Projets réalisés</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Modal pour afficher les certificats */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative max-w-4xl max-h-full animate-scaleIn">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors hover:scale-110"
            >
              <X size={32} />
            </button>
            <img
              src={selectedCertificate}
              alt="Certificat"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transform transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;