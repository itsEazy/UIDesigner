import React, { useState } from 'react';
import { Search, Plus, BookOpen, Heart, Baby, Zap, Calendar, Share2, Lock, Edit3, Filter, ChevronRight } from 'lucide-react';

const JournalVariation1 = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const journalTypes = [
    { id: 'grief', name: 'Grief Journey', icon: Heart, color: '#B85C7A', entries: 12 },
    { id: 'pregnancy', name: 'Pregnancy', icon: Baby, color: '#E6B85C', entries: 8 },
    { id: 'gratitude', name: 'Gratitude', icon: Zap, color: '#6B8E23', entries: 24 },
    { id: 'prayer', name: 'Prayer Journal', icon: BookOpen, color: '#5B8FA8', entries: 18 },
  ];

  const recentEntries = [
    { id: 1, title: 'Feeling His presence today', type: 'gratitude', date: '2 hours ago', preview: 'The sunrise reminded me of God\'s faithfulness...', shared: false },
    { id: 2, title: 'Baby\'s first kick', type: 'pregnancy', date: '1 day ago', preview: 'What an amazing miracle happening inside me...', shared: true },
    { id: 3, title: 'Missing mom today', type: 'grief', date: '2 days ago', preview: 'The holidays are approaching and I find myself...', shared: false },
    { id: 4, title: 'Praying for healing', type: 'prayer', date: '3 days ago', preview: 'Lord, I lift up my friend Sarah who is struggling...', shared: true },
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
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-xl font-semibold">My Journal</h1>
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#8B8B8B]" />
          <input 
            type="text" 
            placeholder="Search your entries..."
            className="flex-1 text-sm bg-transparent outline-none text-[#2C2C2C]"
          />
        </div>
      </div>

      {/* Journal Types */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[#2C2C2C] text-base font-semibold">Journal Types</h2>
          <button className="text-[#4A5D4F] text-sm font-medium">Manage</button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {journalTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <div key={type.id} className="bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${type.color}20` }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: type.color }} />
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
                </div>
                <h3 className="font-medium text-[#2C2C2C] text-sm mb-1">{type.name}</h3>
                <p className="text-xs text-[#8B8B8B]">{type.entries} entries</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'all' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            All Entries
          </button>
          <button
            onClick={() => setSelectedTab('recent')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'recent' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setSelectedTab('shared')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'shared' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Shared
          </button>
          <button
            onClick={() => setSelectedTab('private')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'private' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Private
          </button>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="space-y-3">
          {recentEntries.map((entry) => {
            const journalType = journalTypes.find(type => type.id === entry.type);
            const IconComponent = journalType?.icon || BookOpen;
            
            return (
              <div key={entry.id} className="bg-white rounded-xl p-4 shadow-sm border-l-4" style={{ borderLeftColor: journalType?.color || '#4A5D4F' }}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${journalType?.color || '#4A5D4F'}20` }}
                    >
                      <IconComponent className="w-4 h-4" style={{ color: journalType?.color || '#4A5D4F' }} />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C2C2C] text-sm">{entry.title}</h3>
                      <p className="text-xs text-[#8B8B8B]">{journalType?.name} • {entry.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {entry.shared ? (
                      <Share2 className="w-4 h-4 text-[#6B8E23]" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#8B8B8B]" />
                    )}
                    <Edit3 className="w-4 h-4 text-[#8B8B8B]" />
                  </div>
                </div>
                
                <p className="text-sm text-[#2C2C2C] leading-relaxed mb-3">{entry.preview}</p>
                
                <div className="flex items-center justify-between">
                  <button className="text-[#4A5D4F] text-sm font-medium">Read More</button>
                  <div className="flex items-center space-x-2">
                    {!entry.shared && (
                      <button className="text-[#6B8E23] text-xs font-medium">Share</button>
                    )}
                    <button className="text-[#8B8B8B] text-xs font-medium">Edit</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Write Button */}
      <div className="absolute bottom-[100px] right-4">
        <button className="w-14 h-14 bg-[#4A5D4F] rounded-full flex items-center justify-center shadow-lg">
          <Edit3 className="w-6 h-6 text-white" />
        </button>
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

export default JournalVariation1;