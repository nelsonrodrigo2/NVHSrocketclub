import React from 'react';
import { Play } from 'lucide-react';

function Tutorials() {
  const tutorials = [
    {
      title: "Rocket Building Basics",
      description: "Learn the fundamentals of rocket construction and design.",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1567416661576-659c4298a2b6?auto=format&fit=crop&q=80&w=1470",
    },
    {
      title: "Safety Procedures",
      description: "Essential safety guidelines for rocket launches.",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1470",
    },
    {
      title: "Engine Selection Guide",
      description: "How to choose the right engine for your rocket.",
      duration: "18:20",
      thumbnail: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=1470",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Video Tutorials</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn the fundamentals of rocketry through our comprehensive video tutorials.
          From basic construction to advanced techniques, we've got you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={tutorial.thumbnail}
                alt={tutorial.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white rounded-full p-3">
                  <Play className="h-6 w-6 text-blue-600" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {tutorial.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{tutorial.title}</h3>
              <p className="text-gray-600">{tutorial.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="bg-blue-50 p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Documentation</h3>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">Rocket Design Guide (PDF)</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Safety Checklist (PDF)</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Launch Procedures Manual</a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">National Rocketry Association</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Rocket Simulation Software</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Competition Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;