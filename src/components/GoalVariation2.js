import React, { useState } from 'react';
import { Search, Plus, Target, Users, Calendar, Share2, Lock, CheckCircle, Clock, Star, TrendingUp, ChevronRight, Award, Book, Heart } from 'lucide-react';

const GoalVariation2 = () => {
  const [selectedPlan, setSelectedPlan] = useState('disciple');

  const discipleshipPlans = [
    {
      id: 'disciple',
      title: 'Become a Jesus Disciple',
      description: 'A comprehensive 90-day journey to deepen your relationship with Christ',
      duration: '90 days',
      difficulty: 'Intermediate',
      participants: '2.3k',
      progress: 30,
      color: '#5B8FA8',
      icon: Book,
      goals: [
        { id: 1, title: 'Read the Gospels completely', completed: true, week: 1 },
        { id: 2, title: 'Share your faith with one person', completed: true, week: 2 },
        { id: 3, title: 'Memorize John 3:16', completed: false, week: 3, current: true },
        { id: 4, title: 'Volunteer in your community', completed: false, week: 4 },
        { id: 5, title: 'Lead a small Bible study', completed: false, week: 8 },
      ]
    },
    {
      id: 'evangelist',
      title: 'Great Commission Challenge',
      description: 'Share the Gospel boldly and effectively in your community',
      duration: '30 days',
      difficulty: 'Advanced',
      participants: '890',
      progress: 0,
      color: '#D4A574',
      icon: Heart,
      goals: [
        { id: 1, title: 'Share the Gospel with 5 strangers', completed: false, week: 1 },
        { id: 2, title: 'Invite 3 people to church', completed: false, week: 2 },
        { id: 3, title: 'Host a Gospel presentation', completed: false, week: 3 },
        { id: 4, title: 'Mentor a new believer', completed: false, week: 4 },
      ]
    },
    {
      id: 'servant',
      title: 'Servant\'s Heart',
      description: 'Develop a lifestyle of service and compassion for others',
      duration: '60 days',
      difficulty: 'Beginner',
      participants: '1.5k',
      progress: 0,
      color: '#6B8E23',
      icon: Award,
      goals: [
        { id: 1, title: 'Volunteer at local shelter 3 times', completed: false, week: 1 },
        { id: 2, title: 'Help 5 neighbors with practical needs', completed: false, week: 3 },
        { id: 3, title: 'Organize a community service project', completed: false, week: 6 },
        { id: 4, title: 'Fast and pray for community needs', completed: false, week: 8 },
      ]
    }
  ];

  const currentPlan = discipleshipPlans.find(plan => plan.id === selectedPlan);

  const accountabilityPartners = [
    { id: 1, name: 'Sarah Mitchell', avatar: 'SM', status: 'online', progress: 45, plan: 'Become a Jesus Disciple' },
    { id: 2, name: 'Michael Chen', avatar: 'MC', status: 'away', progress: 80, plan: 'Great Commission Challenge' },
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
      <div className="mt-[44px] bg-gradient-to-r from-[#4A5D4F] to-[#5B8FA8] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Discipleship Plans</h1>
            <p className="text-white text-sm opacity-80">Structured growth journeys</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Users className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Plan Selector */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {discipleshipPlans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedPlan === plan.id
                    ? 'bg-[#4A5D4F] text-white'
                    : 'bg-[#F8F6F3] text-[#8B8B8B]'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{plan.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Plan Overview */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="bg-gradient-to-r from-[#F8F6F3] to-white rounded-xl p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="font-semibold text-[#2C2C2C] text-base mb-1">{currentPlan.title}</h2>
              <p className="text-sm text-[#8B8B8B] mb-3">{currentPlan.description}</p>
              
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">{currentPlan.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-xs text-[#8B8B8B]">{currentPlan.difficulty}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">{currentPlan.participants}</span>
                </div>
              </div>
              
              {/* Progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#8B8B8B]">Overall Progress</span>
                  <span className="text-xs font-medium text-[#6B8E23]">{currentPlan.progress}%</span>
                </div>
                <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-[#6B8E23]"
                    style={{ width: `${currentPlan.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex-1 bg-[#4A5D4F] text-white py-2 rounded-lg text-sm font-medium">
              Continue Plan
            </button>
            <button className="px-4 py-2 bg-white border border-[#4A5D4F] text-[#4A5D4F] rounded-lg text-sm font-medium">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Goals Timeline */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#2C2C2C] text-base font-semibold">Goals Timeline</h3>
          <button className="text-[#4A5D4F] text-sm font-medium">View All</button>
        </div>
        
        <div className="space-y-4">
          {currentPlan.goals.map((goal, index) => (
            <div key={goal.id} className="relative">
              {/* Timeline connector */}
              {index < currentPlan.goals.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-[#E0E0E0]"></div>
              )}
              
              <div className="flex items-start space-x-3">
                {/* Timeline indicator */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  goal.completed 
                    ? 'bg-[#6B8E23]' 
                    : goal.current 
                      ? 'bg-[#E6B85C]' 
                      : 'bg-[#F8F6F3]'
                }`}>
                  {goal.completed ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : goal.current ? (
                    <Target className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-[#8B8B8B] text-sm font-medium">{goal.week}</span>
                  )}
                </div>
                
                {/* Goal content */}
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-[#2C2C2C] text-sm">{goal.title}</h4>
                      {goal.current && (
                        <span className="bg-[#E6B85C] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    {goal.completed && (
                      <CheckCircle className="w-4 h-4 text-[#6B8E23]" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8B8B8B]">Week {goal.week}</span>
                    {goal.current && (
                      <button className="text-[#4A5D4F] text-sm font-medium">Start Goal</button>
                    )}
                    {goal.completed && (
                      <span className="text-[#6B8E23] text-xs font-medium">Completed ✓</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accountability Partners */}
      <div className="px-4 py-3 bg-[#F8F6F3] border-t border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#2C2C2C] text-sm font-semibold">Accountability Partners</h3>
          <button className="text-[#4A5D4F] text-sm font-medium">Manage</button>
        </div>
        
        <div className="space-y-2">
          {accountabilityPartners.map((partner) => (
            <div key={partner.id} className="flex items-center space-x-3 bg-white rounded-lg p-3">
              <div className="relative">
                <div className="w-10 h-10 bg-[#4A5D4F] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{partner.avatar}</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  partner.status === 'online' ? 'bg-[#6B8E23]' : 'bg-[#8B8B8B]'
                }`}></div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-[#2C2C2C] text-sm">{partner.name}</h4>
                <p className="text-xs text-[#8B8B8B]">{partner.plan}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-12 bg-[#F8F6F3] rounded-full h-1">
                    <div 
                      className="h-1 rounded-full bg-[#6B8E23]"
                      style={{ width: `${partner.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#6B8E23]">{partner.progress}%</span>
                </div>
              </div>
              
              <button className="text-[#B85C7A] text-sm font-medium">Check In</button>
            </div>
          ))}
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

export default GoalVariation2;