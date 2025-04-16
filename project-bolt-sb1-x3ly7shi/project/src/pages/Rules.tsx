import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

function Rules() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Safety Rules and Guidelines</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Safety is our top priority. All members must follow these rules and guidelines
          to ensure a safe and enjoyable experience for everyone.
        </p>
      </div>

      {/* General Safety Rules */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">General Safety Rules</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Personal Safety</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Always wear safety glasses during construction and launches</li>
              <li>• Use appropriate protective equipment when handling tools</li>
              <li>• No loose clothing near machinery or during launches</li>
              <li>• Follow all instructions from club advisors and safety officers</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Workshop Safety</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Keep work area clean and organized</li>
              <li>• No food or drinks in the workshop</li>
              <li>• Report any damaged tools or equipment</li>
              <li>• Follow proper tool handling procedures</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2">Launch Safety</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Follow the NAR Safety Code</li>
              <li>• Use only approved launch systems</li>
              <li>• Maintain safe distances during launches</li>
              <li>• Weather conditions must be suitable for launching</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Warnings */}
      <div className="bg-red-50 p-6 rounded-lg">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <h2 className="text-2xl font-bold text-red-600">Important Warnings</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-semibold text-red-600 mb-2">Never</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Launch rockets without supervision</li>
              <li>• Modify rocket motors or use homemade propellants</li>
              <li>• Attempt to recover a rocket from a dangerous location</li>
              <li>• Ignore weather conditions or safety warnings</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-semibold text-yellow-600 mb-2">Always</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Check with range safety officer before launching</li>
              <li>• Use the buddy system during launches</li>
              <li>• Follow the pre-launch checklist</li>
              <li>• Report any safety concerns immediately</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Procedures */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Emergency Procedures</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Emergency Contacts</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Faculty Advisor: (555) 123-4567</li>
              <li>Safety Officer: (555) 234-5678</li>
              <li>School Office: (555) 345-6789</li>
              <li>Emergency: 911</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">First Aid</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• First aid kit locations clearly marked</li>
              <li>• AED located in main hallway</li>
              <li>• Emergency procedures posted</li>
              <li>• Trained first aid responders on site</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;