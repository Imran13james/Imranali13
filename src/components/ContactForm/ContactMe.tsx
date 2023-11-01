import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { InstagramIcon } from 'lucide-react';
import { TwitterIcon } from 'lucide-react';
import { useContact } from '../Provider';


const ContactMe = () => {
  const { showForm, setFormVisibility } = useContact();
  return (
    <section style={{ fontFamily: 'Montserrat' }} className="bg-[#071e34] flex font-medium items-center justify-center h-screen" >

      <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">2d ago</span>
              <span className="text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
              <Image src="/images/KRVME9180.JPG" className="rounded-full w-28 h-28" alt="profile picture" width={120} height={120} />
          </div>

          <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">Imran <br/> Ali</h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5" >
              Mern stack Developer
          </p>
          <div className="mt-3 text-white text-sm flex">
  <div className="ml-3">
    <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition duration-500 ease-in-out">
      <TwitterIcon size={18} /> 
    </a>
  </div>
  <div className="ml-3">
    <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-600 transition duration-500 ease-in-out">
      <InstagramIcon size={18} /> 
    </a>
  </div>
  <div className="ml-3">
    <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-600 transition duration-500 ease-in-out">
      <Linkedin size={18} /> 
    </a>
  </div>
</div>



      </section>
    </section>
  );
};

export default ContactMe;
