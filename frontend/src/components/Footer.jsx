import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-cyan-600 bg-black backdrop-blur ">
      <div className="px-6 py-4">
        <div className="py-2">
          <p className="text-cyan-500 text-sm leading-relaxed">
            A modern post management system built with passion for writers and
            creators.
          </p>
        </div>

        <div className="pt-8 border-t-2 border-cyan-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyan-500 text-xs font-mono flex items-center gap-2">
            © {currentYear} The Post Room. Made with{" "}
            <span className="animate-bounce">❤️</span> for creators
          </p>
          <p className="text-cyan-500 text-xs uppercase font-bold">
            Version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
