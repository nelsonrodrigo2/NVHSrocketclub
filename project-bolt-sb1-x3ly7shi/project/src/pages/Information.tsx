import React from 'react';
import { Calendar, Trophy, PenTool as Tool, Users } from 'lucide-react';

function Information() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Club Information</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn more about our high school rocket club, its mission, and how you can get involved
          in this exciting STEM activity.
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">About Our Club</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            The High School Rocket Club was founded in 2015 with the mission of inspiring
            students to explore aerospace engineering and rocket science. Our members learn
            valuable STEM skills while having fun designing, building, and launching rockets.
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Regular Activities</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Weekly rocket building sessions</li>
            <li>• Monthly launches</li>
            <li>• Safety training workshops</li>
            <li>• Guest speaker presentations</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Competitions</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Regional Rocketry Challenge</li>
            <li>• National Student Rocketry Competition</li>
            <li>• STEM Fair Presentations</li>
            <li>• Inter-school Competitions</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Tool className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Equipment & Facilities</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Fully equipped workshop</li>
            <li>• Launch pad and equipment</li>
            <li>• Safety gear</li>
            <li>• Design software</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Membership</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Open to all high school students</li>
            <li>• No prior experience needed</li>
            <li>• Annual membership fee: $25</li>
            <li>• Equipment provided</li>
          </ul>
        </div>
      </div>

      {/* Achievement Showcase */}
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Teams that made nationals</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">70+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;