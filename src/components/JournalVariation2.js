import React, { useState } from 'react';
import { Search, Plus, BookOpen, Heart, Baby, Zap, Calendar, Share2, Lock, Edit3, Filter, Star, Camera, Mic } from 'lucide-react';

const JournalVariation2 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const journalCategories = [
    { id: 'all', name: 'All', count: 62, color: '#4A5D4F' },
    { id: 'grief', name: 'Grief', count: 12, color: '#B85C7A' },
    { id: 'pregnancy', name: 'Pregnancy', count: 8, color: '#E6B85C' },
    { id: 'gratitude', name: 'Gratitude', count: 24, color: '#6B8E23' },
    { id: 'prayer', name: 'Prayer', count: 18, color: '#5B8FA8' },
  ];

  const todayPrompts = [
    { id: 1, type: 'gratitude', prompt: 'What small blessing did you notice today?', icon: Star },
    { id: 2, type: 'prayer', prompt: 'Who is God calling you to pray for today?', icon: Heart },
    { id: 3, type: 'reflection', prompt: 'How did you see God working in your day?', icon: BookOpen },
  ];

  const recentEntries = [
    { id: 1, title: 'Grateful for unexpected kindness', type: 'gratitude', date: 'Today, 3:45 PM', mood: 'peaceful', hasImage: true, isShared: false },
    { id: 2, title: '20 weeks milestone', type: 'pregnancy', date: 'Yesterday, 8:30 AM', mood: 'excited', hasImage: true, isShared: true },
    { id: 3, title: 'Processing the loss', type: 'grief', date: '2 days ago', mood: 'reflective', hasImage: false, isShared: false },
  ];

  return (
    <div className="w-[375px] h-[812px] bg-[#FDFCF8] rounded-[40px] border-8 border-black relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] bg-black rounded-t-[32px] flex items-center justify-between px-6">
        <div className="text-white text-sm font-medium">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-[17px] h-[10px] bg-white rounded-sm"></div>
          <div className="w-[15px] h-[10px] bg-white rounded-sm"></div>
          <div className="w-[24px] h-[11px] bg-white rounded-lg"></div>
        </div>
      </div>

      {/* Header */}
      <div className="mt-[44px] bg-gradient-to-r from-[#4A5D4F] to-[#6B8E23] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Sacred Journal</h1>
            <p className="text-white text-sm opacity-80">Your spiritual journey</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
          <div className="text-center">
            <div className="text-white text-lg font-bold">62</div>
            <div className="text-white text-xs opacity-80">Total Entries</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">7</div>
            <div className="text-white text-xs opacity-80">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">12</div>
            <div className="text-white text-xs opacity-80">This Month</div>
          </div>
        </div>
      </div>

      {/* Today's Prompts */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[#2C2C2C] text-base font-semibold">Today's Prompts</h2>
          <button className="text-[#4A5D4F] text-sm font-medium">Refresh</button>
        </div>
        
        <div className="space-y-2">
          {todayPrompts.map((prompt) => {
            const IconComponent = prompt.icon;
            return (
              <div key={prompt.id} className="bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4A5D4F] bg-opacity-10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#4A5D4F]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#2C2C2C] font-medium">{prompt.prompt}</p>
                    <p className="text-xs text-[#8B8B8B] capitalize">{prompt.type} journal</p>
                  </div>
                  <button className="text-[#4A5D4F] text-sm font-medium">Write</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {journalCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex items-center space-x-1 ${
                activeCategory === category.id 
                  ? 'text-white' 
                  : 'bg-[#F8F6F3] text-[#8B8B8B]'
              }`}
              style={{ 
                backgroundColor: activeCategory === category.id ? category.color : undefined 
              }}
            >
              <span>{category.name}</span>
              <span className="bg-black bg-opacity-20 px-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Entries */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="space-y-4">
          {recentEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Entry Header */}
              <div className="p-4 pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#6B8E23]"></div>
                    <span className="text-xs text-[#8B8B8B] capitalize">{entry.type}</span>
                    <span className="text-xs text-[#8B8B8B]">•</span>
                    <span className="text-xs text-[#8B8B8B]">{entry.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {entry.isShared ? (
                      <Share2 className="w-4 h-4 text-[#6B8E23]" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#8B8B8B]" />
                    )}
                    <Edit3 className="w-4 h-4 text-[#8B8B8B]" />
                  </div>
                </div>
                
                <h3 className="font-medium text-[#2C2C2C] text-base mb-2">{entry.title}</h3>
                
                {/* Mood indicator */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs text-[#8B8B8B]">Mood:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded-full bg-[#E6B85C]"></div>
                    <span className="text-xs text-[#2C2C2C] capitalize">{entry.mood}</span>
                  </div>
                </div>
                
                {/* Entry preview */}
                <p className="text-sm text-[#2C2C2C] leading-relaxed line-clamp-3">
                  This morning I was rushing to get to work and a stranger held the elevator for me. Such a small act of kindness, but it reminded me that God works through people in the most ordinary moments...
                </p>
              </div>
              
              {/* Media indicator */}
              {entry.hasImage && (
                <div className="px-4 pb-3">
                  <div className="w-full h-32 bg-[#F8F6F3] rounded-lg flex items-center justify-center">
                    <Camera className="w-8 h-8 text-[#8B8B8B]" />
                  </div>
                </div>
              )}
              
              {/* Actions */}
              <div className="px-4 py-3 bg-[#F8F6F3] flex items-center justify-between">
                <button className="text-[#4A5D4F] text-sm font-medium">Read More</button>
                <div className="flex items-center space-x-4">
                  <button className="text-[#8B8B8B] text-sm">Edit</button>
                  {!entry.isShared && (
                    <button className="text-[#6B8E23] text-sm">Share</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Menu */}
      <div className="absolute bottom-[100px] right-4">
        <div className="flex flex-col items-end space-y-2">
          <button className="w-12 h-12 bg-[#5B8FA8] rounded-full flex items-center justify-center shadow-lg">
            <Mic className="w-5 h-5 text-white" />
          </button>
          <button className="w-12 h-12 bg-[#E6B85C] rounded-full flex items-center justify-center shadow-lg">
            <Camera className="w-5 h-5 text-white" />
          </button>
          <button className="w-14 h-14 bg-[#4A5D4F] rounded-full flex items-center justify-center shadow-lg">
            <Edit3 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-white border-t border-[#E0E0E0] flex items-center justify-around px-4">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Feed</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Hubs</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#4A5D4F] rounded"></div>
          <span className="text-xs text-[#4A5D4F] font-medium">Grow</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default JournalVariation2;