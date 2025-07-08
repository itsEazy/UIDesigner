import React from 'react';
import './App.css';
import './index.css';
import FYPVariation1 from './components/FYPVariation1';
import FYPVariation2 from './components/FYPVariation2';
import FYPVariation3 from './components/FYPVariation3';
import HubsVariation1 from './components/HubsVariation1';
import HubsVariation2 from './components/HubsVariation2';
import HubsVariation3 from './components/HubsVariation3';
import SpiritualGrowthVariation1 from './components/SpiritualGrowthVariation1';
import SpiritualGrowthVariation2 from './components/SpiritualGrowthVariation2';
import SpiritualGrowthVariation3 from './components/SpiritualGrowthVariation3';
import HubProfileVariation1 from './components/HubProfileVariation1';
import HubProfileVariation2 from './components/HubProfileVariation2';
import HubProfileVariation3 from './components/HubProfileVariation3';
import Profile from './components/Profile';
import Activity from './components/Activity';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Christian Social Platform - UI Design Variations
        </h1>
        
        {/* FYP Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            For You Page (FYP) Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Card-Based Feed</h3>
              <FYPVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Compact List View</h3>
              <FYPVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Stories + Feed</h3>
              <FYPVariation3 />
            </div>
          </div>
        </div>

        {/* Hubs Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Hubs Page Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Grid Discovery</h3>
              <HubsVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Category Tabs</h3>
              <HubsVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Featured + List</h3>
              <HubsVariation3 />
            </div>
          </div>
        </div>

        {/* Spiritual Growth Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Personal Spiritual Growth Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Dashboard Style</h3>
              <SpiritualGrowthVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Journey Timeline</h3>
              <SpiritualGrowthVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Tool Categories</h3>
              <SpiritualGrowthVariation3 />
            </div>
          </div>
        </div>

        {/* Hub Profile Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Hub Profile Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Church Community</h3>
              <HubProfileVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Youth Hub</h3>
              <HubProfileVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Bible Study Group</h3>
              <HubProfileVariation3 />
            </div>
          </div>
        </div>

        {/* Profile Screen */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Profile Screen
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Facebook-Style Profile</h3>
              <Profile />
            </div>
          </div>
        </div>

        {/* Activity Screen */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Activity Screen
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Notifications & Activity Feed</h3>
              <Activity />
            </div>
          </div>
        </div>

        {/* Create Post Screen */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Create Post Screen
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Post Creation Interface</h3>
              <CreatePost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
