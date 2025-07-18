import React, { useState } from 'react';
import { Search, Plus, BookOpen, Users, Calendar, Clock, Star, CheckCircle, ChevronRight, Filter, Play, Bookmark, MessageCircle, Heart, Share2 } from 'lucide-react';

const BiblePlanVariation2 = () => {
  const [selectedView, setSelectedView] = useState('community');

  const communityPlans = [
    {
      id: 1,
      title: 'Advent Journey Together',
      description: 'Preparing hearts for Christmas as a community',
      leader: 'Pastor Sarah',
      participants: 127,
      totalDays: 25,
      currentDay: 8,
      todayReading: 'Luke 1:26-38',
      recentActivity: [
        { user: 'Mike J.', action: 'shared a reflection', time: '2h ago' },
        { user: 'Emma K.', action: 'completed today\'s reading', time: '4h ago' },
        { user: 'David L.', action: 'asked a question', time: '6h ago' }
      ],
      hubName: 'Grace Community Church',
      color: '#8B7D8B'
    },
    {
      id: 2,
      title: 'Young Adults: Faith Foundations',
      description: 'Building strong faith foundations together',
      leader: 'Jenny M.',
      participants: 43,
      totalDays: 60,
      currentDay: 22,
      todayReading: 'Ephesians 2:8-10',
      recentActivity: [
        { user: 'Alex R.', action: 'posted a prayer request', time: '1h ago' },
        { user: 'Maria S.', action: 'encouraged someone', time: '3h ago' },
        { user: 'Chris T.', action: 'shared a testimony', time: '5h ago' }
      ],
      hubName: 'Young Adults Hub',
      color: '#D4A574'
    }
  ];

  const personalPlans = [
    {
      id: 3,
      title: 'Psalms for Anxiety',
      progress: 65,
      streak: 18,
      todayReading: 'Psalm 94:19',
      notes: 3,
      highlights: 12,
      color: '#5B8FA8'
    },
    {
      id: 4,
      title: 'Proverbs Daily Wisdom',
      progress: 30,
      streak: 9,
      todayReading: 'Proverbs 15:1-10',
      notes: 8,
      highlights: 21,
      color: '#6B8E23'
    }
  ];

  const todayDiscussion = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: 'SM',
      plan: 'Advent Journey Together',
      content: 'Mary\'s response to the angel shows such incredible faith and trust. How can we cultivate that same willingness to say "yes" to God\'s plan?',
      likes: 12,
      replies: 8,
      time: '2 hours ago'
    },
    {
      id: 2,
      user: 'David Chen',
      avatar: 'DC',
      plan: 'Faith Foundations',
      content: 'Grace through faith, not works - this verse changed my whole perspective on salvation. Grateful for this reminder today.',
      likes: 18,
      replies: 5,
      time: '4 hours ago'
    }
  ];

  const prayerRequests = [
    {
      id: 1,
      user: 'Jennifer L.',
      avatar: 'JL',
      request: 'Pray for wisdom as I navigate a difficult decision at work',
      plan: 'Advent Journey Together',
      prayers: 23,
      time: '1 hour ago'
    },
    {
      id: 2,
      user: 'Michael R.',
      avatar: 'MR',
      request: 'Please pray for my grandmother\'s health and recovery',
      plan: 'Faith Foundations',
      prayers: 31,
      time: '3 hours ago'
    }
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
      <div className="mt-[44px] bg-gradient-to-r from-[#4A8B8B] to-[#8B7D8B] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Bible Community</h1>
            <p className="text-white text-sm opacity-80">Read, discuss, and grow together</p>
          </div>
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-white" />
            <Search className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center bg-white bg-opacity-20 rounded-lg p-1">
          <button
            onClick={() => setSelectedView('community')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'community' 
                ? 'bg-white text-[#4A8B8B]' 
                : 'text-white opacity-80'
            }`}
          >
            Community
          </button>
          <button
            onClick={() => setSelectedView('personal')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'personal' 
                ? 'bg-white text-[#4A8B8B]' 
                : 'text-white opacity-80'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setSelectedView('discussion')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'discussion' 
                ? 'bg-white text-[#4A8B8B]' 
                : 'text-white opacity-80'
            }`}
          >
            Discussion
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {selectedView === 'community' && (
          <div className="px-4 py-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Active Community Plans</h2>
              <p className="text-sm text-[#8B8B8B]">Reading together with your faith community</p>
            </div>
            
            <div className="space-y-4">
              {communityPlans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                        <span className="text-xs text-[#8B8B8B]">{plan.hubName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-[#8B8B8B]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.participants}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                    <p className="text-sm text-[#8B8B8B] mb-3">{plan.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-xs text-[#8B8B8B]">Led by {plan.leader}</span>
                      <span className="text-xs text-[#8B8B8B]">Day {plan.currentDay}/{plan.totalDays}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${(plan.currentDay / plan.totalDays) * 100}%`,
                            backgroundColor: plan.color 
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Today's Reading */}
                    <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#2C2C2C]">Today's Reading</span>
                        <Play className="w-4 h-4 text-[#4A8B8B]" />
                      </div>
                      <p className="text-sm text-[#4A8B8B] font-medium">{plan.todayReading}</p>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-[#2C2C2C] mb-2">Recent Activity</h4>
                      <div className="space-y-1">
                        {plan.recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
                            <span className="text-xs text-[#8B8B8B]">
                              <span className="font-medium text-[#2C2C2C]">{activity.user}</span> {activity.action}
                            </span>
                            <span className="text-xs text-[#8B8B8B]">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                        Join Discussion
                      </button>
                      <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'personal' && (
          <div className="px-4 py-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">Personal Reading Plans</h2>
              <p className="text-sm text-[#8B8B8B]">Your individual study and reflection</p>
            </div>
            
            <div className="space-y-4">
              {personalPlans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                        <h3 className="font-semibold text-[#2C2C2C] text-sm">{plan.title}</h3>
                      </div>
                      <span className="text-xs text-[#6B8E23]">{plan.streak} days 🔥</span>
                    </div>
                    
                    {/* Progress */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[#8B8B8B]">Progress</span>
                        <span className="text-xs font-medium text-[#6B8E23]">{plan.progress}%</span>
                      </div>
                      <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-[#6B8E23]"
                          style={{ width: `${plan.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Today's Reading */}
                    <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#2C2C2C]">Today's Reading</span>
                        <Play className="w-4 h-4 text-[#4A8B8B]" />
                      </div>
                      <p className="text-sm text-[#4A8B8B] font-medium">{plan.todayReading}</p>
                    </div>
                    
                    {/* Study Stats */}
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Bookmark className="w-3 h-3 text-[#D4A574]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.highlights} highlights</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3 text-[#5B8FA8]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.notes} notes</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                        Continue Reading
                      </button>
                      <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                        Notes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'discussion' && (
          <div className="px-4 py-4">
            {/* Discussion Posts */}
            <div className="mb-6">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Today's Discussions</h2>
              <div className="space-y-4">
                {todayDiscussion.map((discussion) => (
                  <div key={discussion.id} className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{discussion.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#2C2C2C] text-sm">{discussion.user}</h4>
                        <p className="text-xs text-[#8B8B8B]">{discussion.plan} • {discussion.time}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-[#2C2C2C] leading-relaxed mb-3">{discussion.content}</p>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-[#6B8E23] text-sm">
                        <Heart className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-[#5B8FA8] text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies}</span>
                      </button>
                      <button className="text-[#8B8B8B] text-sm">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Prayer Requests */}
            <div>
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Prayer Requests</h2>
              <div className="space-y-3">
                {prayerRequests.map((request) => (
                  <div key={request.id} className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#5B8FA8]">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{request.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#2C2C2C] text-sm">{request.user}</h4>
                        <p className="text-xs text-[#8B8B8B]">{request.plan} • {request.time}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-[#2C2C2C] leading-relaxed mb-3">{request.request}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#5B8FA8]">{request.prayers} people praying</span>
                      <button className="bg-[#5B8FA8] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Pray
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

export default BiblePlanVariation2;