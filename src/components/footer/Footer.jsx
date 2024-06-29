import React from 'react'
import { ChevronRight } from 'lucide-react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';


function Footer() {
  return (
    <footer className="w-full mt-8 border-t-2 border-gray-200">
      <section className="relative overflow-hidden bg-white py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-full sm:w-auto p-8 text-center sm:text-left">
              <a href="#">
                <div className="inline-flex items-center justify-center sm:justify-start">
                  <Logo />
                  <span className="ml-4 text-lg font-bold">ByteBlog</span>
                </div>
              </a>
            </div>
            <div className="w-full sm:w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center justify-center sm:justify-end">
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Terms of Service
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Return Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto p-8">
              <div className="-m-1.5 flex flex-wrap justify-center sm:justify-end">
                <div className="w-auto p-1.5">
                  <a href="https://www.linkedin.com/in/rupa-mahindrakar1/" target="_blank" rel="noopener noreferrer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="https://x.com/Rupa_30" target="_blank" rel="noopener noreferrer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="https://github.com/Rupa30" target="_blank" rel="noopener noreferrer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
    
  )
}

export default Footer
