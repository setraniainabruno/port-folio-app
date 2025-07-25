import React from 'react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Langages et Frameworks',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript/TypeScript (React/Node.js)', level: 85 },
        { name: 'Python (Django, FastAPI)', level: 83 },
        { name: 'Java (Swing, Spring Boot)', level: 80 },
        { name: 'PHP (Laravel)', level: 70 },
      ],
    },
    {
      title: 'Technologies Mobile',
      icon: '📱',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Dart (Flutter)', level: 70 },
        { name: 'React Native', level: 75},
      ],
    },
    {
      title: 'Bases de Données',
      icon: '🗄️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 77 }
      ],
    },
    {
      title: 'Outils de Développement',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git et GitHub', level: 90 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Un éventail de technologies modernes pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>{skill.name}</span>
                    </div>
                    <div className={`w-full rounded-full h-3 overflow-hidden ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Technologies supplémentaires</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST API','Machine Learning', 'Data Analysis','Agile/Scrum'].map((tech, index) => (
              <span key={index} className={`px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-200' 
                  : 'bg-white text-gray-700'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;