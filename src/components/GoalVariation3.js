import React, { useState } from 'react';
import { Search, Plus, Target, Users, Calendar, Share2, Lock, CheckCircle, Clock, Star, TrendingUp, ChevronRight, Award, Book, Heart, Zap, MessageCircle, Bell } from 'lucide-react';

const GoalVariation3 = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const currentGoals = [
    { id: 1, title: 'Share Gospel with stranger', progress: 75, category: 'evangelism', deadline: '2 days', partner: 'Sarah', color: '#D4A574' },
    { id: 2, title: 'Complete Philippians study', progress: 40, category: 'study', deadline: '1 week', partner: null, color: '#4A8B8B' },
    { id: 3, title: 'Volunteer 5 hours this month', progress: 60, category: 'service', deadline: '2 weeks', partner: 'Mike', color: '#6B8E23' },
  ];

  const recentActivity = [
    { id: 1, type: 'achievement', title: 'Completed "Daily Prayer" goal', time: '2 hours ago', points: '+50' },
    { id: 2, type: 'partner', title: 'Sarah checked in on your evangelism goal', time: '5 hours ago', action: 'respond' },
    { id: 3, type: 'milestone', title: 'Reached 30-day prayer streak!', time: '1 day ago', points: '+100' },
    { id: 4, type: 'social', title: '12 people prayed for your goal', time: '2 days ago', action: 'thank' },
  ];

  const goalSuggestions = [
    { id: 1, title: 'Fast for a day', category: 'prayer', difficulty: 'Hard', popularity: 89, description: 'Deepen your prayer life through fasting' },
    { id: 2, title: 'Memorize Romans 8:28', category: 'study', difficulty: 'Medium', popularity: 95, description: 'Hide God\'s word in your heart' },
    { id: 3, title: 'Write 3 encouragement notes', category: 'service', difficulty: 'Easy', popularity: 76, description: 'Encourage others in their faith journey' },
  ];

  const partnerRequests = [
    { id: 1, name: 'Emma Wilson', avatar: 'EW', goal: 'Read through Psalms', mutualFriends: 3, status: 'pending' },
    { id: 2, name: 'David Kim', avatar: 'DK', goal: 'Lead Bible study group', mutualFriends: 1, status: 'pending' },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'achievement': return <Award className="w-4 h-4 text-[#E6B85C]" />;
      case 'partner': return <Users className="w-4 h-4 text-[#B85C7A]" />;
      case 'milestone': return <Star className="w-4 h-4 text-[#D4A574]" />;
      case 'social': return <Heart className="w-4 h-4 text-[#6B8E23]" />;
      default: return <Target className="w-4 h-4 text-[#8B8B8B]" />;
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
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Growth Hub</h1>
            <p className="text-white text-sm opacity-80">Goals, accountability & community</p>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-white" />
            <MessageCircle className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center bg-white bg-opacity-20 rounded-lg p-1">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeView === 'dashboard' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveView('social')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeView === 'social' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Social
          </button>
          <button
            onClick={() => setActiveView('discover')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeView === 'discover' 
                ? 'bg-white text-[#4A5D4F]' 
                : 'text-white opacity-80'
            }`}
          >
            Discover
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeView === 'dashboard' && (
          <div className="px-4 py-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-5 h-5 text-[#4A5D4F]" />
                  <TrendingUp className="w-4 h-4 text-[#6B8E23]" />
                </div>
                <div className="text-2xl font-bold text-[#2C2C2C] mb-1">3</div>
                <div className="text-xs text-[#8B8B8B]">Active Goals</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <Award className="w-5 h-5 text-[#E6B85C]" />
                  <Zap className="w-4 h-4 text-[#D4A574]" />
                </div>
                <div className="text-2xl font-bold text-[#2C2C2C] mb-1">750</div>
                <div className="text-xs text-[#8B8B8B]">Growth Points</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-[#B85C7A]" />
                  <Heart className="w-4 h-4 text-[#6B8E23]" />
                </div>
                <div className="text-2xl font-bold text-[#2C2C2C] mb-1">2</div>
                <div className="text-xs text-[#8B8B8B]">Partners</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-5 h-5 text-[#5B8FA8]" />
                  <CheckCircle className="w-4 h-4 text-[#6B8E23]" />
                </div>
                <div className="text-2xl font-bold text-[#2C2C2C] mb-1">21</div>
                <div className="text-xs text-[#8B8B8B]">Day Streak</div>
              </div>
            </div>

            {/* Current Goals */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[#2C2C2C] text-base font-semibold">Current Goals</h2>
                <button className="text-[#4A5D4F] text-sm font-medium">View All</button>
              </div>
              
              <div className="space-y-3">
                {currentGoals.map((goal) => (
                  <div key={goal.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: goal.color }}
                        ></div>
                        <h3 className="font-medium text-[#2C2C2C] text-sm">{goal.title}</h3>
                      </div>
                      <span className="text-xs text-[#8B8B8B]">{goal.deadline}</span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[#8B8B8B]">Progress</span>
                        <span className="text-xs font-medium text-[#6B8E23]">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${goal.progress}%`,
                            backgroundColor: goal.color 
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {goal.partner && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-[#B85C7A]" />
                          <span className="text-xs text-[#B85C7A]">{goal.partner}</span>
                        </div>
                      )}
                      <button className="text-[#4A5D4F] text-sm font-medium ml-auto">Update</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#F8F6F3] rounded-full flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#2C2C2C] font-medium">{activity.title}</p>
                        <p className="text-xs text-[#8B8B8B]">{activity.time}</p>
                      </div>
                      {activity.points && (
                        <span className="text-[#6B8E23] text-sm font-medium">{activity.points}</span>
                      )}
                      {activity.action && (
                        <button className="text-[#4A5D4F] text-sm font-medium capitalize">{activity.action}</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeView === 'social' && (
          <div className="px-4 py-4">
            {/* Partner Requests */}
            <div className="mb-6">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Accountability Requests</h2>
              <div className="space-y-3">
                {partnerRequests.map((request) => (
                  <div key={request.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-[#4A5D4F] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{request.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-[#2C2C2C] text-sm">{request.name}</h3>
                        <p className="text-xs text-[#8B8B8B]">wants to partner on: {request.goal}</p>
                        <p className="text-xs text-[#8B8B8B]">{request.mutualFriends} mutual friends</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-[#4A5D4F] text-white py-2 rounded-lg text-sm font-medium">
                        Accept
                      </button>
                      <button className="flex-1 bg-[#F8F6F3] text-[#8B8B8B] py-2 rounded-lg text-sm font-medium">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Goals Feed */}
            <div>
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Community Feed</h2>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-[#B85C7A] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SM</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2C2C2C]">Sarah M. completed a goal</p>
                      <p className="text-xs text-[#8B8B8B]">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#2C2C2C] mb-3">"Just shared my faith with a coworker! God gave me the perfect opportunity during lunch. 🙏"</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-[#6B8E23] text-sm">
                      <Heart className="w-4 h-4" />
                      <span>Pray</span>
                    </button>
                    <button className="flex items-center space-x-1 text-[#E6B85C] text-sm">
                      <Award className="w-4 h-4" />
                      <span>Amen</span>
                    </button>
                    <button className="text-[#8B8B8B] text-sm">Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'discover' && (
          <div className="px-4 py-4">
            <div className="mb-6">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Suggested Goals</h2>
              <p className="text-sm text-[#8B8B8B] mb-4">Based on your spiritual journey and interests</p>
              
              <div className="space-y-3">
                {goalSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#2C2C2C] text-sm">{suggestion.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-[#E6B85C]" />
                        <span className="text-xs text-[#E6B85C]">{suggestion.popularity}%</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-[#8B8B8B] mb-3">{suggestion.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-[#8B8B8B] capitalize">{suggestion.category}</span>
                        <span className="text-xs text-[#8B8B8B]">•</span>
                        <span className="text-xs text-[#8B8B8B]">{suggestion.difficulty}</span>
                      </div>
                      <span className="text-xs text-[#6B8E23]">Popular</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-[#4A5D4F] text-white py-2 rounded-lg text-sm font-medium">
                        Add Goal
                      </button>
                      <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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

export default GoalVariation3;