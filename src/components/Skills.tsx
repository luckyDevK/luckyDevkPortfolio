import CodeIcon from '../assets/code.svg?url';
import ServerIcon from '../assets/server.svg?url';
import PaintbrushIcon from '../assets/paintbrush.svg?url';
import DatabaseIcon from '../assets/database.svg?url';
import NextJsIcon from '../assets/nextJs.svg?url';
import ReactIcon from '../assets/react.svg?url';
import GinIcon from '../assets/gin.svg?url';
import GoIcon from '../assets/Go.svg?url';
import TsIcon from '../assets/ts.svg?url';
import JsIcon from '../assets/js.svg?url';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: CodeIcon,
      skills: [
        { name: 'Go', level: 95, color: 'bg-go-cyan' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Python', level: 55, color: 'bg-green-500' },
      ],
    },
    {
      title: 'Backend',
      icon: ServerIcon,
      skills: [
        { name: 'Gin (Go)', level: 95, color: 'bg-go-cyan' },
        { name: 'REST API', level: 95, color: 'bg-green-500' },
        { name: 'JWT Auth', level: 90, color: 'bg-purple-500' },
        { name: 'gRPC', level: 70, color: 'bg-indigo-500' },
      ],
    },
    {
      title: 'Frontend',
      icon: PaintbrushIcon,
      skills: [
        { name: 'Next.js', level: 80, color: 'bg-gray-500' },
        { name: 'React', level: 85, color: 'bg-cyan-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: DatabaseIcon,
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'bg-blue-600' },
        { name: 'MySQL', level: 90, color: 'bg-cyan-600' },
        { name: 'Git/GitLab/Bitbucket', level: 85, color: 'bg-orange-600' },
        { name: 'Linux', level: 80, color: 'bg-amber-600' },
      ],
    },
  ];

  const technologies = [
    { name: 'Go', logo: GoIcon },
    { name: 'TypeScript', logo: TsIcon },
    { name: 'JavaScript', logo: JsIcon },
    { name: 'Gin', logo: GinIcon },
    { name: 'Next.js', logo: NextJsIcon },
    { name: 'React', logo: ReactIcon },
    { name: 'JWT', logo: '🔑' },
    { name: 'AES-256', logo: '🔐' },
    { name: 'PBKDF2', logo: '🛡️' },
    { name: 'RBAC', logo: '👤' },
    { name: 'ACID', logo: '🔄' },
    { name: 'PWA', logo: '📱' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            Tools and technologies I use to build robust fullstack applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-dark-800 border border-dark-700 rounded-xl p-4 sm:p-5 md:p-6"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <img src={category.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base">{skill.name}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Pills */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-gray-300">
            Concepts & Practices I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-dark-800 border border-dark-700 rounded-full hover:border-go-cyan transition-colors cursor-default"
              >
                {typeof tech.logo === 'string' && !tech.logo.includes('.svg') ? (
                  <span className="text-sm sm:text-base">{tech.logo}</span>
                ) : (
                  <img src={tech.logo as string} alt={tech.name} className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
