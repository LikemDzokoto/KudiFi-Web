import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Montserrat'] mb-4">
            Contact & Support
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help you with any questions or issues you might have about KudiFI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-[#0E49A1] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.768 0 1.588.646 3.025 1.688 4.068l-1.108 3.287 3.394-1.108c1.034.982 2.423 1.589 3.944 1.589 3.181 0 5.767-2.586 5.767-5.768 0-3.183-2.586-5.768-5.767-5.768zm0 10.636c-1.339 0-2.572-.48-3.533-1.275l-2.46.811.82-2.433c-.845-.984-1.361-2.261-1.361-3.657 0-3.106 2.526-5.632 5.632-5.632 3.107 0 5.633 2.525 5.633 5.632.001 3.106-2.526 5.632-5.633 5.632zm3.412-4.212c-.17-.085-1.001-.497-1.157-.552-.156-.056-.27-.084-.382.084-.113.17-.425.552-.522.666-.096.114-.192.127-.361.042-.17-.084-.716-.263-1.362-.845-.502-.45-.842-1.006-.94-1.176-.099-.17-.011-.262.075-.346.075-.076.17-.197.255-.296.084-.1.112-.17.17-.283.056-.112.028-.211-.015-.296-.042-.084-.382-.91-.523-1.246-.134-.323-.276-.279-.381-.284-.1-.006-.214-.006-.327-.006-.114 0-.297.042-.452.211-.155.17-.593.579-.593 1.407 0 .829.605 1.628.69 1.742.084.114 1.182 1.734 2.861 2.472.4.17.712.264.954.347.409.125.783.107 1.078.065.329-.049 1.015-.414 1.157-.814.143-.4.143-.743.1-.815-.042-.072-.156-.115-.326-.198z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">WhatsApp Support</h4>
                  <p className="text-gray-600 mb-1">Our fastest support channel</p>
                  <a href="https://wa.me/233XXXXXXXXX" className="text-[#0E49A1] font-medium hover:underline">+233 XX XXX XXXX</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#0E49A1] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 mb-1">For general inquiries</p>
                  <a href="mailto:support@KudiFI.com" className="text-[#0E49A1] font-medium hover:underline">support@KudiFI.com</a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex items-start">
                <div className="bg-[#0E49A1] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Social Media</h4>
                  <p className="text-gray-600 mb-2">Follow us for updates and tips</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-[#0E49A1]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#0E49A1]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">USSD Support</h4>
              <p className="text-gray-600 mb-4">
                Need help directly from your phone? Dial *123# and select option 6 "Help" for immediate assistance.
              </p>
              <Button href="#dial-now">
                Dial *123# Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E49A1]"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E49A1]"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E49A1]"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E49A1]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Partner Section */}
        <div className="mt-20 p-8 bg-white rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Become a Partner</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Are you an agent, merchant, or mobile network operator interested in partnering with KudiFI?
              Join our network and earn commissions on cash-in/cash-out transactions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Button 
              href="/partners"
              className="px-8 md:mr-4 mb-4 md:mb-0"
            >
              Partner Program
            </Button>
            <Button 
              primary={false}
              href="mailto:partners@KudiFI.com"
            >
              Email Our Business Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;