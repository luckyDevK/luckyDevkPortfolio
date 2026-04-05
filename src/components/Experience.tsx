const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Setiabudi, South Jakarta',
      period: '2025 – Present',
      current: true,
      achievements: [
        'Developed Kasirku Vending Machine Flazz (BCA) system for card testing and dispenser operations with configurable scheduling using Python and QML',
        'Develop Vending Machine Ticketing (BAG) supporting cash, E-wallet and QRIS payments with secure dynamic decryption and validation',
        'Develop Kasirku Gateway Dashboard as a full-stack application using Nuxt.js (Vue) and Golang with RBAC',
        'Designed multiple internal dashboard modules (Merchant, Sites ,Terminal, Analytics, Card Operator)',
        'Developed backend services for MrBrown public facility system using Golang and Gin, handling business logic, data aggregation, and bank settlement reporting (DKI, Mandiri, BNI, BCA, BRI) with ACID-compliant transactions.',
        'Built vm-service-android backend in Golang with secure encryption/decryption workflows and dynamic key derivation',
        'Developed PWA for parkour membership renewal using Next.js',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Gondang, Mojokerto, East Java',
      period: 'Jun 2022 – Dec 2022',
      current: false,
      achievements: [
        'Developed and maintained web interfaces using HTML, CSS, and JavaScript',
        'Assisted in backend development using PHP for data processing',
        'Contributed to internal tools that improved workflow efficiency',
        'Collaborated with team members to implement features and troubleshoot issues',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey building software solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-dark-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-go-cyan rounded-full border-4 border-dark-900 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 bg-go-cyan rounded-full animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8`}>
                  <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-go-cyan">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.current
                          ? 'bg-go-cyan/20 text-go-cyan border border-go-cyan/30'
                          : 'bg-dark-700 text-gray-400'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="text-go-cyan mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
