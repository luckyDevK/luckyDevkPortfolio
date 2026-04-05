import ShieldIcon from '../assets/shield-check.svg?url';
import PuzzleIcon from '../assets/puzzle.svg?url';
import CreditCardIcon from '../assets/credit-card.svg?url';
import GlobeIcon from '../assets/globe.svg?url';

const About = () => {
  const highlights = [
    {
      icon: ShieldIcon,
      title: 'Security First',
      desc: 'AES-256-GCM encryption, secure key derivation, and dynamic decryption workflows',
    },
    {
      icon: PuzzleIcon,
      title: 'Clean Architecture',
      desc: 'System decomposition with clear separation of concerns and maintainable code',
    },
    {
      icon: CreditCardIcon,
      title: 'Financial Systems',
      desc: 'Bank settlements (DKI, Mandiri, BNI, BCA, BRI) with strong ACID compliance',
    },
    {
      icon: GlobeIcon,
      title: 'Fullstack Capable',
      desc: 'Next.js, React for building complete end-to-end solutions',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0">
            Fullstack engineer with a passion for building high-performance, reliable systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - About text */}
          <div className="order-2 lg:order-1">
            <div className="animated-border rounded-xl p-4 sm:p-6 md:p-8">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                I'm a fullstack engineer specializing in <span className="text-go-cyan font-semibold">Golang</span> for backend development,
                focused on building high-performance, reliable, and scalable systems.
                Experienced in designing and optimizing backend services, improving system performance,
                and ensuring maintainability.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Skilled in backend development, API design, and system architecture, with additional
                experience in <span className="text-go-cyan">full-stack development</span> (Next.js, React).
                Familiar with Linux environments, database systems, and secure data handling.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Passionate about building reliable and efficient systems with clean, maintainable code.
                I enjoy diving deep into how things work under the hood, exploring computer architecture,
                and strengthening problem-solving skills through DSA.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-dark-800 border border-dark-700 rounded-xl p-4 sm:p-5 md:p-6 card-hover"
              >
                <img src={item.icon} alt="" className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
