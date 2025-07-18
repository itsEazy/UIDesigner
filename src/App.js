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
import YourHubsVariation1 from './components/YourHubsVariation1';
import YourHubsVariation2 from './components/YourHubsVariation2';
import YourHubsVariation3 from './components/YourHubsVariation3';
import JournalVariation1 from './components/JournalVariation1';
import JournalVariation2 from './components/JournalVariation2';
import JournalVariation3 from './components/JournalVariation3';
import GoalVariation1 from './components/GoalVariation1';
import GoalVariation2 from './components/GoalVariation2';
import GoalVariation3 from './components/GoalVariation3';
import BiblePlanVariation1 from './components/BiblePlanVariation1';
import BiblePlanVariation2 from './components/BiblePlanVariation2';
import BiblePlanVariation3 from './components/BiblePlanVariation3';
import BiblePlanDiscovery1 from './components/BiblePlanDiscovery1';
import BiblePlanDiscovery2 from './components/BiblePlanDiscovery2';
import BiblePlanDiscovery3 from './components/BiblePlanDiscovery3';
import PrayerWall1 from './components/PrayerWall1';
import PrayerWall2 from './components/PrayerWall2';
import PrayerWall3 from './components/PrayerWall3';
import GuidedPrayer1 from './components/GuidedPrayer1';
import GuidedPrayer2 from './components/GuidedPrayer2';
import GuidedPrayer3 from './components/GuidedPrayer3';
import Streaks1 from './components/Streaks1';
import Streaks2 from './components/Streaks2';
import Streaks3 from './components/Streaks3';
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

        {/* Your Hubs Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Your Hubs Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">List View with Activity</h3>
              <YourHubsVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Grid with Notifications</h3>
              <YourHubsVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Stats & Activity Feed</h3>
              <YourHubsVariation3 />
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

        {/* Journal Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Journal Feature Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Type-Based Organization</h3>
              <JournalVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Prompt-Driven Writing</h3>
              <JournalVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Template Studio</h3>
              <JournalVariation3 />
            </div>
          </div>
        </div>

        {/* Goal Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Goal Feature Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Category-Based Goals</h3>
              <GoalVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Discipleship Plans</h3>
              <GoalVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Social Growth Hub</h3>
              <GoalVariation3 />
            </div>
          </div>
        </div>

        {/* Bible Plan Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Bible Plan Feature Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Progress Tracker</h3>
              <BiblePlanVariation1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Community Study</h3>
              <BiblePlanVariation2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">AI-Powered Study</h3>
              <BiblePlanVariation3 />
            </div>
          </div>
        </div>

        {/* Bible Plan Discovery Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Bible Plan Discovery Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Category & Topic Filtering</h3>
              <BiblePlanDiscovery1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Mood-Based Discovery</h3>
              <BiblePlanDiscovery2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">AI-Powered Search</h3>
              <BiblePlanDiscovery3 />
            </div>
          </div>
        </div>

        {/* Prayer Wall Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Prayer Wall Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Traditional Brick Wall</h3>
              <PrayerWall1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Modern Card Layout</h3>
              <PrayerWall2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Live Community Board</h3>
              <PrayerWall3 />
            </div>
          </div>
        </div>

        {/* Guided Prayer Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Guided Prayer Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Custom Prayer Builder</h3>
              <GuidedPrayer1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Prayer Templates</h3>
              <GuidedPrayer2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Interactive Journey</h3>
              <GuidedPrayer3 />
            </div>
          </div>
        </div>

        {/* Streaks Variations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Streaks & Habit Tracking Variations
          </h2>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Calendar View</h3>
              <Streaks1 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Dashboard Style</h3>
              <Streaks2 />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-600">Journey Timeline</h3>
              <Streaks3 />
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
