import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, CircleUserRound } from "lucide-react";
import { cn } from "../lib/utils";
import { Card } from "./ui/card";
import QRCode from "./QRCode";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Project 1",
      description: "A breakthrough application that revolutionizes workflow",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Interactive platform for seamless collaboration",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Innovative solution for modern challenges",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://www.github.com/Tomercio",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.Linkedin.com/in/Tomercio",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:tomereb4@gmail.com",
      label: "Email",
    },
    {
      icon: <CircleUserRound size={24} />,
      href: "https://www.TAWebStudio.com",
      label: "Personal Website",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Photo Section */}
      <div className="coverphoto relative h-64">
        <img
          src="./beamrlogo2.png"
          alt="Beamr Logo"
          className="absolute top-4 left-4 h-16 z-10"
        />
        <QRCode url="https://tawebstudio.com" />
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="profile-container">
            <img
              src="./profile2.png"
              alt="Profile picture"
              className="profile-image"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white px-6 py-2 rounded-full shadow-md">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className={cn(
          "mt-32 px-4 max-w-4xl mx-auto transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Tomer Amitai</h1>
          <p className="text-xl text-gray-600 mt-4">
            BizDev & Frontend Developer
          </p>
        </div>

        <Card className="mt-2">
          <div className="p-8">
            <p className="text-gray-600 leading-relaxed">
              Hey there! 👋 I'm a business developer and sales manager who fell
              in love with coding. After 5+ years of helping companies grow
              through sales and strategic partnerships, I decided to embrace my
              passion for tech and jumped into frontend development. I get
              excited about connecting with people, exploring new technologies,
              and never stop learning. Whether I'm closing deals or writing
              code, I bring the same energy and curiosity to everything I do.
              Let's create something amazing together!
            </p>
          </div>
        </Card>
      </div>

      {/* Projects Section */}
      <div className="flex justify-center mt-20 px-4 max-w-4xl mx-auto">
        <a href="https://github.com/Tomercio?tab=repositories">
          <button>PROJECTS</button>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: amitayy4@gmail.com</li>
                <li>Phone: +972 (52) 426-0338 </li>
                <li>Location: Rehovot, ISR</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Tomer Amitai. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
