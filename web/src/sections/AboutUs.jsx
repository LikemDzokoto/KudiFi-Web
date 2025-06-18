import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Montserrat'] mb-4">
            About KudiFI
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn more about our mission to empower Ghana's unbanked population with accessible crypto solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At KudiFI, we're on a mission to empower Ghana's unbanked population with accessible, affordable, and secure financial tools. 
              By leveraging USSD technology and mobile money infrastructure, we're bridging the gap between traditional financial systems 
              and the world of cryptocurrency.
            </p>
            <p className="text-gray-600">
              We believe that financial services should be accessible to everyone, regardless of internet connectivity or smartphone ownership.
              That's why we've built a solution that works on any phone, anywhere there's mobile network coverage.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0E49A1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><span className="font-medium">Accessibility:</span> Financial services for everyone, regardless of technology access</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0E49A1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><span className="font-medium">Security:</span> Protecting our users' funds and data with robust security measures</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0E49A1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><span className="font-medium">Innovation:</span> Bridging traditional financial systems with blockchain technology</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0E49A1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><span className="font-medium">Financial Inclusion:</span> Empowering the unbanked and underbanked</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/assets/images/about-us-image.jpg" 
              alt="African market scene" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* ApeCoin Ecosystem */}
        <div className="mt-20 p-8 bg-gradient-to-br from-[#0E49A1]/10 to-[#6F42C1]/10 rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Powered by ApeCoin</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              KudiFI is powered by ApeCoin, a global community token that enables users to participate in a thriving Web3 ecosystem.
              As an ApeCoin holder, you become part of a worldwide community with access to exclusive benefits and future opportunities.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 bg-[#6F42C1] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <h4 className="text-xl font-bold">ApeCoin DAO</h4>
              </div>
              <p className="text-gray-600 text-center">
                ApeCoin is governed by the ApeCoin DAO, a decentralized organization where holders can vote on proposals
                that shape the future of the ecosystem. Through KudiFI, we're bringing these opportunities to Ghana and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Press/Media Kit */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Press & Media Kit</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[#0E49A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="text-lg font-semibold mb-2">Logo & Brand Assets</h4>
              <p className="text-gray-600 mb-4">
                Download our official logos, brand guidelines, and visual assets.
              </p>
              <button className="text-[#0E49A1] font-medium hover:underline">
                Download ZIP
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[#0E49A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h4 className="text-lg font-semibold mb-2">Press Releases</h4>
              <p className="text-gray-600 mb-4">
                View our latest press releases and company news.
              </p>
              <button className="text-[#0E49A1] font-medium hover:underline">
                View Press Releases
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-[#0E49A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-lg font-semibold mb-2">Media Inquiries</h4>
              <p className="text-gray-600 mb-4">
                For interviews, features, or other media requests.
              </p>
              <button className="text-[#0E49A1] font-medium hover:underline">
                Contact Press Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;