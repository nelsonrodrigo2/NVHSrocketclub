import React from 'react';
import { Rocket, Award, Users } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1470"
          alt="Rocket launch"
          className="w-full h-[500px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent rounded-xl flex items-center">
          <div className="px-8 md:px-12 space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Reach for the Stars with Rocket Club
            </h1>
            <p className="text-xl text-gray-200">
              Join us in exploring the fascinating world of rocketry through hands-on experience and teamwork.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Learn Rocketry</h3>
          <p className="text-gray-600">
            Get hands-on experience building and launching rockets while learning about aerospace engineering.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Compete</h3>
          <p className="text-gray-600">
            Participate in a national rocketry competition to showcase your skills.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
          <p className="text-gray-600">
            Connect with fellow students and create a team.
          </p>
        </div>
      </div>

      {/* Meeting Times */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Meeting Times</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Regular Meetings</h3>
            <p>Every Tuesday and Thursday</p>
            <p>2:30 PM - 4:00 PM</p>
            <p>A116</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Launch Days</h3>
            <p>Every other Saturday (Subject to change)</p>
            <p>8:00 AM - 12:00 PM</p>
            <p>Newark Illinois (Subject to change)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;