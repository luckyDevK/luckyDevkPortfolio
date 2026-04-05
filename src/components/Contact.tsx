import LinkedinIcon from "../assets/linkedin.svg?url"
import GithubIcon from "../assets/github.svg?url"
import GmailIcon from "../assets/gmail.svg?url"


const Contact = () => {
  const contactMethods = [
    {
      icon: GmailIcon,
      label: 'Email',
      value: 'verylucky065@gmail.com',
      href: 'mailto:verylucky065@gmail.com',
      color: 'hover:border-red-500',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Very Lucky Kurniawan',
      href: 'https://linkedin.com/in/very-lucky-992a47183',
      color: 'hover:border-blue-500',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: '@luckyDevK',
      href: 'https://github.com/luckyDevK',
      color: 'hover:border-gray-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="grid gap-4 mb-12">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-6 bg-dark-800 border border-dark-700 rounded-xl transition-all duration-300 ${method.color} hover:-translate-y-1 hover:shadow-lg`}
              >
                {typeof method.icon === 'string' && !method.icon.includes('.svg') ? (
                  <span className="text-3xl">{method.icon}</span>
                ) : (
                  <img src={method.icon as string} alt={method.label} className="w-8 h-8" />
                )}
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">{method.label}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-gradient-to-r from-go-cyan/10 via-cyan-500/10 to-teal-500/10 border border-go-cyan/30 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always excited to work on challenging fullstack projects,
              especially those involving security, system optimization, or financial systems.
            </p>
            <a
              href="mailto:verylucky065@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-go-cyan text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-go-cyan/25"
            >
              <span>Say Hello</span>
              <span className="text-xl">👋</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold gradient-text">Very Lucky</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
