
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80)"
      }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      
      <div className="relative z-10 h-full flex flex-col">
        
        <div className="flex justify-end p-6">
          <div className="flex gap-4">
            <Link 
              to="/develop" 
              className="bg-white/90 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-white transition-all text-sm"
            >
              Developer
            </Link>
            <Link 
              to="/login" 
              className="bg-white/90 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-white transition-all text-sm"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-white/90 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-white transition-all text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>

        
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to AJD Foods</h1>
            <p className="text-xl text-white/90 italic">
              "One cannot think well, love well, sleep well, if one has not dined well."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
