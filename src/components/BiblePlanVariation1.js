import React, { useState } from 'react';
import { Search, Plus, BookOpen, Users, Calendar, Clock, Star, CheckCircle, ChevronRight, Filter, Play, Bookmark } from 'lucide-react';

const BiblePlanVariation1 = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const activePlans = [
    {
      id: 1,
      title: 'New Testament in 90 Days',
      description: 'Journey through the complete New Testament',
      progress: 45,
      dayProgress: '40/90 days',
      currentReading: 'Romans 8:1-17',
      nextReading: 'Romans 8:18-39',
      streak: 12,
      category: 'systematic',
      difficulty: 'Medium',
      participants: '2.3k',
      color: '#5B8FA8'
    },
    {
      id: 2,
      title: 'Psalms of Comfort',
      description: 'Finding peace in troubled times',
      progress: 78,
      dayProgress: '23/30 days',
      currentReading: 'Psalm 91',
      nextReading: 'Psalm 103',
      streak: 8,
      category: 'topical',
      difficulty: 'Easy',
      participants: '1.8k',
      color: '#6B8E23'
    }
  ];

  const availablePlans = [
    {
      id: 3,
      title: 'Gospels Deep Dive',
      description: 'Comprehensive study of Jesus\' life and teachings',
      duration: '120 days',
      difficulty: 'Advanced',
      participants: '3.1k',
      rating: 4.8,
      category: 'study',
      color: '#4A8B8B'
    },
    {
      id: 4,
      title: 'Daily Wisdom',
      description: 'Proverbs and Ecclesiastes for everyday life',
      duration: '60 days',
      difficulty: 'Easy',
      participants: '5.2k',
      rating: 4.9,
      category: 'devotional',
      color: '#D4A574'
    },
    {
      id: 5,
      title: 'Prophetic Voices',
      description: 'Understanding the major and minor prophets',
      duration: '180 days',
      difficulty: 'Advanced',
      participants: '892',
      rating: 4.7,
      category: 'study',
      color: '#8B7D8B'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#6B8E23';
      case 'Medium': return '#E6B85C';
      case 'Advanced': return '#B85C7A';
      default: return '#8B8B8B';
    }
  };

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
      <div className="mt-[44px] bg-[#4A8B8B] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Bible Plans</h1>
            <p className="text-white text-sm opacity-80">Grow through structured reading</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
          <div className="text-center">
            <div className="text-white text-lg font-bold">2</div>
            <div className="text-white text-xs opacity-80">Active Plans</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">12</div>
            <div className="text-white text-xs opacity-80">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">8</div>
            <div className="text-white text-xs opacity-80">Completed</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('active')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'active' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Active (2)
          </button>
          <button
            onClick={() => setSelectedTab('discover')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'discover' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setSelectedTab('completed')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'completed' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Completed (8)
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {selectedTab === 'active' && (
          <div className="space-y-4">
            {activePlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                        <span className="text-xs text-[#8B8B8B] capitalize">{plan.category}</span>
                        <div 
                          className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: getDifficultyColor(plan.difficulty) }}
                        >
                          {plan.difficulty}
                        </div>
                      </div>
                      <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                      <p className="text-sm text-[#8B8B8B] mb-3">{plan.description}</p>
                      
                      {/* Progress */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[#2C2C2C]">Progress</span>
                          <span className="text-sm font-medium text-[#6B8E23]">{plan.progress}%</span>
                        </div>
                        <div className="w-full bg-[#F8F6F3] rounded-full h-2 mb-2">
                          <div 
                            className="h-2 rounded-full bg-[#6B8E23]"
                            style={{ width: `${plan.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[#8B8B8B]">
                          <span>{plan.dayProgress}</span>
                          <span>{plan.streak} day streak 🔥</span>
                        </div>
                      </div>
                      
                      {/* Current Reading */}
                      <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[#2C2C2C]">Today's Reading</span>
                          <Play className="w-4 h-4 text-[#4A8B8B]" />
                        </div>
                        <p className="text-sm text-[#4A8B8B] font-medium mb-1">{plan.currentReading}</p>
                        <p className="text-xs text-[#8B8B8B]">Next: {plan.nextReading}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3 text-[#8B8B8B]" />
                            <span className="text-xs text-[#8B8B8B]">{plan.participants}</span>
                          </div>
                        </div>
                        <button className="bg-[#4A8B8B] text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Continue Reading
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'discover' && (
          <div className="space-y-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Recommended for You</h2>
              <p className="text-sm text-[#8B8B8B]">Based on your reading history and interests</p>
            </div>
            
            {availablePlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                        <span className="text-xs text-[#8B8B8B] capitalize">{plan.category}</span>
                        <div 
                          className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: getDifficultyColor(plan.difficulty) }}
                        >
                          {plan.difficulty}
                        </div>
                      </div>
                      <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                      <p className="text-sm text-[#8B8B8B] mb-3">{plan.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                          <span className="text-xs text-[#8B8B8B]">{plan.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-[#8B8B8B]" />
                          <span className="text-xs text-[#8B8B8B]">{plan.participants}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-[#E6B85C]" />
                          <span className="text-xs text-[#8B8B8B]">{plan.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                          Start Plan
                        </button>
                        <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                          Preview
                        </button>
                        <button className="p-2 bg-[#F8F6F3] rounded-lg">
                          <Bookmark className="w-4 h-4 text-[#8B8B8B]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'completed' && (
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#2C2C2C] text-base font-semibold mb-2">8 Plans Completed</h3>
              <p className="text-sm text-[#8B8B8B] mb-4">You've finished 8 Bible reading plans! Keep up the great work in your spiritual journey.</p>
              <button className="bg-[#4A8B8B] text-white px-6 py-2 rounded-lg text-sm font-medium">
                View History
              </button>
            </div>
          </div>
        )}
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

export default BiblePlanVariation1;