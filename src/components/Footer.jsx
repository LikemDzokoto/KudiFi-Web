import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0E49A1] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">KudiFI</h2>
            <p className="text-gray-200 mb-4">
              Empowering Ghana's unbanked with crypto via USSD. No internet,
              no smartphone needed. Just dial *123# to start.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.768 0 1.588.646 3.025 1.688 4.068l-1.108 3.287 3.394-1.108c1.034.982 2.423 1.589 3.944 1.589 3.181 0 5.767-2.586 5.767-5.768 0-3.183-2.586-5.768-5.767-5.768zm0 10.636c-1.339 0-2.572-.48-3.533-1.275l-2.46.811.82-2.433c-.845-.984-1.361-2.261-1.361-3.657 0-3.106 2.526-5.632 5.632-5.632 3.107 0 5.633 2.525 5.633 5.632.001 3.106-2.526 5.632-5.633 5.632zm3.412-4.212c-.17-.085-1.001-.497-1.157-.552-.156-.056-.27-.084-.382.084-.113.17-.425.552-.522.666-.096.114-.192.127-.361.042-.17-.084-.716-.263-1.362-.845-.502-.45-.842-1.006-.94-1.176-.099-.17-.011-.262.075-.346.075-.076.17-.197.255-.296.084-.1.112-.17.17-.283.056-.112.028-.211-.015-.296-.042-.084-.382-.91-.523-1.246-.134-.323-.276-.279-.381-.284-.1-.006-.214-.006-.327-.006-.114 0-.297.042-.452.211-.155.17-.593.579-.593 1.407 0 .829.605 1.628.69 1.742.084.114 1.182 1.734 2.861 2.472.4.17.712.264.954.347.409.125.783.107 1.078.065.329-.049 1.015-.414 1.157-.814.143-.4.143-.743.1-.815-.042-.072-.156-.115-.326-.198z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-gray-200">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-gray-200">Benefits</a></li>
              <li><a href="#why-KudiFI" className="hover:text-gray-200">Why KudiFI</a></li>
              <li><a href="#faq" className="hover:text-gray-200">FAQ</a></li>
              <li><a href="#about" className="hover:text-gray-200">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@KudiFI.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200" />
        
        <div className="text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} SikaCoin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;