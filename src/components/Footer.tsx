
import { Link } from 'react-scroll';
import Resume from './Resume';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Deepak<span className="text-portfolio-secondary">.</span></h3>
            <p className="text-gray-300 text-sm">
              Computer Science & Mathematics student passionate about building innovative solutions through code.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-portfolio-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {['Hero', 'About', 'Projects', 'Experience', 'Education', 'Skills', 'Interests', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-portfolio-secondary">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              </li>
              <li>
                <a href="mailto:deepak@example.com" className="text-gray-300 hover:text-white transition-colors">Email</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-portfolio-secondary">Location</h4>
            <p className="text-gray-300">
              Bangalore, India
            </p>
            <div className="mt-4">
              <Resume />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Deepak Kumaran M. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Made with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
