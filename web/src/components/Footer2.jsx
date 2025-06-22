import React from 'react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer2 = () => {
  return (
    <section id="contact" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              Get Support & Stay Connected
            </h2>
            <p className="text-xl text-gray-300">
              We're here to help you succeed with KudiFi. Reach out anytime!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp Support</h3>
              <p className="text-gray-300 mb-3">Get help instantly via WhatsApp</p>
              <a href="https://wa.me/" className="text-green-400 hover:text-green-300 font-medium">
                +233 
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-300 mb-3">For detailed inquiries</p>
              <a href="mailto:support@KudiFi.com" className="text-blue-400 hover:text-blue-300 font-medium">
                support@KudiFi.com
              </a>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">USSD Code</h3>
              <p className="text-gray-300 mb-3">Access KudiFi directly</p>
              <a href="tel:*123#" className="text-purple-400 hover:text-purple-300 font-bold text-xl">
                *123#
              </a>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-300 mb-3">Serving all of Africa</p>
              {/* <span className="text-orange-400 font-medium">Accra • Kumasi • Tamale</span> */}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Partner With Us
              </h3>
              <p className="text-gray-300">
                Are you a mobile money agent, merchant, or MNO? Join our partner network and earn commissions.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none">
                <option value="">Select Business Type</option>
                <option value="agent">Mobile Money Agent</option>
                <option value="merchant">Merchant</option>
                <option value="mno">Mobile Network Operator</option>
                <option value="ngo">NGO/Organization</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Join Partner Network
              </button>
            </form>
          </div>

          <div className="text-center mt-12">
            {/* <div className="flex justify-center space-x-6 mb-6">
              <a href="https://twitter.com/KudiFi" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">X (Twitter)</span>
                @KudiFi
              </a>
              <a href="https://instagram.com/KudiFi" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                @KudiFi
              </a>
            </div> */}
            <p className="text-gray-400 text-sm">
               &copy; {new Date().getFullYear()} KudiFi. Empowering Africa's unbanked with crypto via USSD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer2 ;