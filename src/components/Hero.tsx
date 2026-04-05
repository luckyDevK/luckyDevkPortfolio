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
    <div className="bg-dark-800 rounded-xl p-6 font-mono text-sm border border-dark-700 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-gray-500 text-xs">main.go</span>
      </div>
      <pre className="text-gray-300 overflow-x-auto">
        <code>
          {displayedCode.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed">
              <span className="text-gray-600 mr-4 select-none">{(i + 1).toString().padStart(2, ' ')}</span>
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-go-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div className="text-center md:text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-go-cyan/10 border border-go-cyan/30 rounded-full text-go-cyan text-sm mb-6">
            <span className="w-2 h-2 bg-go-cyan rounded-full animate-pulse" />
            Available for hire
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Very Lucky</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Fullstack Engineer &{' '}
            <span className="text-go-cyan">Go Enthusiast</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Building high-performance, reliable systems with clean architecture.
            Passionate about backend optimization, secure data handling, and full-stack solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-go-cyan text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-go-cyan/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-go-cyan hover:text-go-cyan transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            <div>
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-gray-500 text-sm">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-500 text-sm">Passion for Go</div>
            </div>
          </div>
        </div>

        {/* Right side - Gopher & Code */}
        <div className="relative">
          <CodeBlock />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-sm">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-go-cyan rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
