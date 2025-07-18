import React, { useState } from 'react';
import { Search, Plus, BookOpen, Heart, Baby, Zap, Calendar, Share2, Lock, Edit3, Filter, Clock, Bookmark, Tag, TrendingUp } from 'lucide-react';

const JournalVariation3 = () => {
  const [viewMode, setViewMode] = useState('timeline');

  const journalTemplates = [
    { id: 'grief', name: 'Grief & Loss', description: 'Process loss with guided reflection', color: '#B85C7A', icon: Heart, active: true },
    { id: 'pregnancy', name: 'Pregnancy Journey', description: 'Document your miracle in progress', color: '#E6B85C', icon: Baby, active: true },
    { id: 'gratitude', name: 'Daily Gratitude', description: 'Count your blessings each day', color: '#6B8E23', icon: Zap, active: true },
    { id: 'prayer', name: 'Prayer Life', description: 'Deepen your conversation with God', color: '#5B8FA8', icon: BookOpen, active: false },
    { id: 'healing', name: 'Healing Journey', description: 'Physical, emotional, or spiritual healing', color: '#4A8B8B', icon: Heart, active: false },
    { id: 'parenting', name: 'Parenting Faith', description: 'Raising children in God\'s love', color: '#8B7D8B', icon: Baby, active: false },
  ];

  const timelineEntries = [
    { id: 1, title: 'Morning gratitude', type: 'gratitude', time: '7:30 AM', preview: 'Grateful for this new day and the strength to face whatever comes...', tags: ['morning', 'strength'] },
    { id: 2, title: 'Baby movements', type: 'pregnancy', time: '2:15 PM', preview: 'Little one is so active today! Each kick reminds me of the miracle...', tags: ['20weeks', 'miracle'] },
    { id: 3, title: 'Missing dad', type: 'grief', time: '6:45 PM', preview: 'Saw his favorite flower today and felt his presence. The pain is still there but...', tags: ['memories', 'presence'] },
  ];

  const insights = [
    { metric: 'Entries this week', value: '12', trend: '+3' },
    { metric: 'Most active time', value: '7 AM', trend: 'morning' },
    { metric: 'Favorite template', value: 'Gratitude', trend: '45%' },
    { metric: 'Longest streak', value: '14 days', trend: 'record' },
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
          <div>
            <h1 className="text-white text-xl font-semibold">Journal Studio</h1>
            <p className="text-white text-sm opacity-80">Template-driven spiritual reflection</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Filter className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center bg-white bg-opacity-20 rounded-lg p-1">
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'timeline' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setViewMode('templates')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'templates' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => setViewMode('insights')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'insights' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Insights
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {viewMode === 'timeline' && (
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold">Today's Entries</h2>
              <button className="text-[#4A5D4F] text-sm font-medium">View All</button>
            </div>
            
            <div className="space-y-4">
              {timelineEntries.map((entry, index) => {
                const template = journalTemplates.find(t => t.id === entry.type);
                const IconComponent = template?.icon || BookOpen;
                
                return (
                  <div key={entry.id} className="relative">
                    {/* Timeline connector */}
                    {index < timelineEntries.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-[#E0E0E0]"></div>
                    )}
                    
                    <div className="flex items-start space-x-3">
                      {/* Timeline dot */}
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: `${template?.color}20` }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: template?.color }} />
                      </div>
                      
                      {/* Entry content */}
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-[#2C2C2C] text-sm">{entry.title}</h3>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#8B8B8B]" />
                            <span className="text-xs text-[#8B8B8B]">{entry.time}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-[#2C2C2C] leading-relaxed mb-3">{entry.preview}</p>
                        
                        {/* Tags */}
                        <div className="flex items-center space-x-2 mb-3">
                          {entry.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-[#F8F6F3] text-[#8B8B8B] px-2 py-1 rounded-full text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <button className="text-[#4A5D4F] text-sm font-medium">Continue Writing</button>
                          <div className="flex items-center space-x-3">
                            <Bookmark className="w-4 h-4 text-[#8B8B8B]" />
                            <Share2 className="w-4 h-4 text-[#8B8B8B]" />
                            <Edit3 className="w-4 h-4 text-[#8B8B8B]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {viewMode === 'templates' && (
          <div className="px-4 py-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Active Templates</h2>
              <p className="text-sm text-[#8B8B8B]">Choose a template to guide your reflection</p>
            </div>
            
            <div className="space-y-3">
              {journalTemplates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <div key={template.id} className={`bg-white rounded-xl p-4 shadow-sm ${template.active ? 'border-2' : 'border'}`} style={{ borderColor: template.active ? template.color : '#E0E0E0' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${template.color}20` }}
                        >
                          <IconComponent className="w-5 h-5" style={{ color: template.color }} />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#2C2C2C] text-sm">{template.name}</h3>
                          <p className="text-xs text-[#8B8B8B]">{template.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {template.active && (
                          <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
                        )}
                        <button className={`px-3 py-1 rounded-full text-xs font-medium ${
                          template.active 
                            ? 'bg-[#4A5D4F] text-white' 
                            : 'bg-[#F8F6F3] text-[#8B8B8B]'
                        }`}>
                          {template.active ? 'Active' : 'Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {viewMode === 'insights' && (
          <div className="px-4 py-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Journal Insights</h2>
              <p className="text-sm text-[#8B8B8B]">Track your spiritual writing journey</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {insights.map((insight, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-4 h-4 text-[#6B8E23]" />
                    <span className="text-xs text-[#6B8E23] font-medium">+{insight.trend}</span>
                  </div>
                  <div className="text-2xl font-bold text-[#2C2C2C] mb-1">{insight.value}</div>
                  <div className="text-xs text-[#8B8B8B]">{insight.metric}</div>
                </div>
              ))}
            </div>
            
            {/* Writing Streak */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-[#2C2C2C] text-sm">Writing Streak</h3>
                <span className="text-[#6B8E23] text-sm font-medium">7 days</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#6B8E23] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-[#2C2C2C] text-sm mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['gratitude', 'prayer', 'healing', 'growth', 'peace', 'strength'].map((tag) => (
                  <span key={tag} className="bg-[#F8F6F3] text-[#8B8B8B] px-3 py-1 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Write Button */}
      <div className="absolute bottom-[100px] right-4">
        <button className="w-14 h-14 bg-[#4A5D4F] rounded-full flex items-center justify-center shadow-lg">
          <Plus className="w-6 h-6 text-white" />
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

export default JournalVariation3;