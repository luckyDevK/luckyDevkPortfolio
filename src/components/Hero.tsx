import { useEffect, useState } from 'react';


const CodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const code = `package main

func main() {
    developer := Developer{
        Name:  "Very Lucky",
        Role:  "Fullstack Engineer",
        Stack: []string{"Go", "React", "Next.js"},
        Love:  "Clean Architecture",
    }
    developer.BuildAmazingThings()
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= code.length) {
        setDisplayedCode(code.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dark-800 rounded-xl p-3 sm:p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm border border-dark-700 shadow-xl max-w-full overflow-hidden">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        <span className="ml-2 sm:ml-4 text-gray-500 text-[10px] sm:text-xs">main.go</span>
      </div>
      <pre className="text-gray-300 overflow-x-auto">
        <code>
          {displayedCode.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed sm:leading-relaxed">
              <span className="text-gray-600 mr-2 sm:mr-4 select-none text-[10px] sm:text-xs">{(i + 1).toString().padStart(2, ' ')}</span>
              {line}
            </div>
          ))}
          <span className="animate-pulse">▌</span>
        </code>
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-go-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-go-cyan/10 border border-go-cyan/30 rounded-full text-go-cyan text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-go-cyan rounded-full animate-pulse" />
              Available for hire
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Very Lucky</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-6">
              Fullstack Engineer &{' '}
              <span className="text-go-cyan">Go Enthusiast</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Building high-performance, reliable systems with clean architecture.
              Passionate about backend optimization, secure data handling, and full-stack solutions.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-go-cyan text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-go-cyan/25 text-sm sm:text-base"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-go-cyan hover:text-go-cyan transition-all text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">1</div>
                <div className="text-gray-500 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-500 text-xs sm:text-sm">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-500 text-xs sm:text-sm">Passion for Go</div>
              </div>
            </div>
          </div>

          {/* Right side - Code Block */}
          <div className="relative order-1 lg:order-2">
            <CodeBlock />
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500">
        <span className="text-xs sm:text-sm">Scroll down</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-go-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
