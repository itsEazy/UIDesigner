import React, { useState } from 'react';
import { Search, Plus, Target, Users, Calendar, Share2, Lock, CheckCircle, Clock, Star, TrendingUp, ChevronRight } from 'lucide-react';

const GoalVariation1 = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const goalCategories = [
    { id: 'discipleship', name: 'Discipleship', color: '#5B8FA8', count: 8 },
    { id: 'evangelism', name: 'Evangelism', color: '#D4A574', count: 5 },
    { id: 'service', name: 'Service', color: '#6B8E23', count: 12 },
    { id: 'study', name: 'Bible Study', color: '#4A8B8B', count: 6 },
    { id: 'prayer', name: 'Prayer Life', color: '#8B7D8B', count: 9 },
  ];

  const activeGoals = [
    { id: 1, title: 'Share the Gospel with a stranger', category: 'evangelism', progress: 60, deadline: '3 days left', shared: true, accountabilityPartner: 'Sarah M.', difficulty: 'medium' },
    { id: 2, title: 'Complete 30-day Bible reading plan', category: 'study', progress: 45, deadline: '18 days left', shared: false, accountabilityPartner: null, difficulty: 'easy' },
    { id: 3, title: 'Volunteer at local shelter 3 times', category: 'service', progress: 33, deadline: '1 week left', shared: true, accountabilityPartner: 'Mike J.', difficulty: 'medium' },
    { id: 4, title: 'Pray for 30 minutes daily', category: 'prayer', progress: 80, deadline: '5 days left', shared: false, accountabilityPartner: null, difficulty: 'hard' },
  ];

  const suggestedGoals = [
    { id: 5, title: 'Memorize Philippians 4:13', category: 'study', difficulty: 'easy', duration: '2 weeks' },
    { id: 6, title: 'Fast and pray for 24 hours', category: 'prayer', difficulty: 'hard', duration: '1 day' },
    { id: 7, title: 'Invite 3 people to church', category: 'evangelism', difficulty: 'medium', duration: '1 month' },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#6B8E23';
      case 'medium': return '#E6B85C';
      case 'hard': return '#B85C7A';
      default: return '#8B8B8B';
    }
  };

  const getCategoryColor = (category) => {
    const cat = goalCategories.find(c => c.id === category);
    return cat ? cat.color : '#4A5D4F';
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
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Spiritual Goals</h1>
            <p className="text-white text-sm opacity-80">Growing as a disciple</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
          <div className="text-center">
            <div className="text-white text-lg font-bold">4</div>
            <div className="text-white text-xs opacity-80">Active Goals</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">12</div>
            <div className="text-white text-xs opacity-80">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">73%</div>
            <div className="text-white text-xs opacity-80">Success Rate</div>
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
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Active (4)
          </button>
          <button
            onClick={() => setSelectedTab('completed')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'completed' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Completed (12)
          </button>
          <button
            onClick={() => setSelectedTab('shared')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'shared' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Shared (2)
          </button>
          <button
            onClick={() => setSelectedTab('suggested')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'suggested' 
                ? 'bg-[#4A5D4F] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Suggested
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {goalCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-1 bg-[#F8F6F3] rounded-full px-3 py-1 whitespace-nowrap">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-xs text-[#2C2C2C] font-medium">{category.name}</span>
              <span className="text-xs text-[#8B8B8B]">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        {selectedTab === 'active' && (
          <div className="space-y-4">
            {activeGoals.map((goal) => (
              <div key={goal.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getCategoryColor(goal.category) }}
                        ></div>
                        <span className="text-xs text-[#8B8B8B] capitalize">{goal.category}</span>
                        <div 
                          className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: getDifficultyColor(goal.difficulty) }}
                        >
                          {goal.difficulty}
                        </div>
                      </div>
                      <h3 className="font-medium text-[#2C2C2C] text-sm mb-2">{goal.title}</h3>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[#8B8B8B]">Progress</span>
                          <span className="text-xs font-medium text-[#6B8E23]">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-[#6B8E23]"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-[#8B8B8B]" />
                          <span className="text-xs text-[#8B8B8B]">{goal.deadline}</span>
                        </div>
                        {goal.accountabilityPartner && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3 text-[#B85C7A]" />
                            <span className="text-xs text-[#B85C7A]">{goal.accountabilityPartner}</span>
                          </div>
                        )}
                        {goal.shared && (
                          <Share2 className="w-3 h-3 text-[#6B8E23]" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#4A5D4F] text-sm font-medium">Update Progress</button>
                    <div className="flex items-center space-x-2">
                      <button className="text-[#8B8B8B] text-sm">Edit</button>
                      {!goal.shared && (
                        <button className="text-[#B85C7A] text-sm">Share</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'suggested' && (
          <div className="space-y-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Recommended for You</h2>
              <p className="text-sm text-[#8B8B8B]">Based on your spiritual journey and growth areas</p>
            </div>
            
            {suggestedGoals.map((goal) => (
              <div key={goal.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#E0E0E0]">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getCategoryColor(goal.category) }}
                      ></div>
                      <span className="text-xs text-[#8B8B8B] capitalize">{goal.category}</span>
                      <div 
                        className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getDifficultyColor(goal.difficulty) }}
                      >
                        {goal.difficulty}
                      </div>
                    </div>
                    <Star className="w-4 h-4 text-[#E6B85C]" />
                  </div>
                  
                  <h3 className="font-medium text-[#2C2C2C] text-sm mb-2">{goal.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">{goal.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-[#6B8E23]" />
                      <span className="text-xs text-[#6B8E23]">Popular choice</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex-1 bg-[#4A5D4F] text-white py-2 rounded-lg text-sm font-medium mr-2">
                      Add Goal
                    </button>
                    <button className="flex-1 bg-white border border-[#4A5D4F] text-[#4A5D4F] py-2 rounded-lg text-sm font-medium ml-2">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Add Button */}
      <div className="absolute bottom-[100px] right-4">
        <button className="w-14 h-14 bg-[#4A5D4F] rounded-full flex items-center justify-center shadow-lg">
          <Target className="w-6 h-6 text-white" />
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

export default GoalVariation1;