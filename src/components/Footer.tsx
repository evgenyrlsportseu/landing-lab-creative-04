
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-neutral-200">
          <div>
            <h3 className="text-xl font-medium mb-4">LSports Marketing</h3>
            <p className="text-neutral-600 text-sm max-w-xs">
              Elevating brands through innovative marketing strategies and measurable results.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
                <span>100 Marketing Avenue, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-600">
                <Phone className="h-5 w-5 text-neutral-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-600">
                <Mail className="h-5 w-5 text-neutral-400" />
                <span>info@lsportsmarketing.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center",
                  "transition-colors hover:bg-neutral-200"
                )}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center",
                  "transition-colors hover:bg-neutral-200"
                )}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.07 4.19 20.85 3.13 21.23 1.88C20.24 2.52 19.14 2.98 18 3.22C17.07 2.13 15.84 1.5 14.5 1.5C12.15 1.5 10.26 3.41 10.26 5.77C10.26 6.12 10.3 6.47 10.38 6.8C6.94 6.55 3.84 4.89 1.85 2.38C1.5 3.07 1.3 3.86 1.3 4.67C1.3 6.23 2.09 7.63 3.3 8.47C2.44 8.44 1.63 8.23 1 7.86V7.93C1 10.03 2.48 11.8 4.5 12.24C3.8 12.41 3.08 12.44 2.38 12.33C2.88 14.05 4.43 15.3 6.28 15.34C4.54 16.64 2.26 17.36 0 17.13C1.87 18.34 4.05 19 6.35 19C13.69 19 17.54 12.67 17.54 7.16C17.54 6.94 17.53 6.73 17.5 6.53C18.5 5.8 19.28 4.97 20 4.01H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center",
                  "transition-colors hover:bg-neutral-200"
                )}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="text-sm text-neutral-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} LSports Marketing. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
