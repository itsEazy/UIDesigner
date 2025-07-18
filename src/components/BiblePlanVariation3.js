import React, { useState } from 'react';
import { Search, Plus, BookOpen, Users, Calendar, Clock, Star, CheckCircle, ChevronRight, Filter, Play, Bookmark, MessageCircle, Heart, Share2, Zap, Brain, Target, TrendingUp } from 'lucide-react';

const BiblePlanVariation3 = () => {
  const [selectedTab, setSelectedTab] = useState('smart');

  const aiRecommendations = [
    {
      id: 1,
      title: 'Personalized Study Path',
      description: 'AI-crafted plan based on your spiritual journey',
      confidence: 95,
      adaptiveFeatures: ['Adjusts to your pace', 'Focuses on growth areas', 'Connects themes'],
      currentFocus: 'Faith and Doubt',
      nextMilestone: 'Understanding Grace',
      estimatedDuration: '6-8 weeks',
      color: '#4A8B8B'
    },
    {
      id: 2,
      title: 'Deep Dive: Parables',
      description: 'AI-enhanced exploration of Jesus\' teachings',
      confidence: 88,
      adaptiveFeatures: ['Interactive explanations', 'Historical context', 'Modern applications'],
      currentFocus: 'Hidden Meanings',
      nextMilestone: 'Cultural Context',
      estimatedDuration: '4 weeks',
      color: '#D4A574'
    }
  ];

  const studyInsights = [
    {
      id: 1,
      type: 'pattern',
      title: 'Reading Pattern Detected',
      description: 'You read best in the morning between 6-8 AM',
      suggestion: 'Schedule difficult passages during your peak time',
      impact: 'high',
      icon: TrendingUp
    },
    {
      id: 2,
      type: 'comprehension',
      title: 'Comprehension Strength',
      description: 'You excel at understanding narrative passages',
      suggestion: 'Try more historical and biographical studies',
      impact: 'medium',
      icon: Brain
    },
    {
      id: 3,
      type: 'growth',
      title: 'Growth Opportunity',
      description: 'Consider exploring more prophetic literature',
      suggestion: 'Start with Isaiah or Jeremiah with AI guidance',
      impact: 'high',
      icon: Target
    }
  ];

  const aiStudySession = {
    currentPassage: 'Matthew 5:1-12',
    title: 'The Beatitudes',
    aiAnalysis: {
      theme: 'Kingdom Values',
      difficulty: 'Intermediate',
      keyQuestions: [
        'What do these blessings reveal about God\'s kingdom?',
        'How do these teachings challenge worldly values?',
        'Which beatitude speaks most to your current situation?'
      ],
      connections: [
        'Luke 6:20-23 (Similar teachings)',
        'Psalm 37:11 (Meek inherit the earth)',
        'Isaiah 61:1-3 (Comfort for mourners)'
      ]
    },
    progress: 65,
    timeSpent: '12 min',
    questionsAnswered: 3,
    notesCreated: 2
  };

  const smartFeatures = [
    {
      id: 1,
      name: 'AI Study Companion',
      description: 'Get instant explanations and context',
      icon: Brain,
      status: 'active',
      usage: '24 queries this week'
    },
    {
      id: 2,
      name: 'Adaptive Learning',
      description: 'Plans adjust to your understanding',
      icon: Zap,
      status: 'active',
      usage: 'Adjusted 3 times'
    },
    {
      id: 3,
      name: 'Smart Recommendations',
      description: 'Personalized study suggestions',
      icon: Target,
      status: 'premium',
      usage: '8 recommendations'
    }
  ];

  const studyAnalytics = {
    weeklyGoal: 5,
    completed: 3,
    averageSession: '18 min',
    comprehensionScore: 87,
    consistencyScore: 92,
    growthAreas: ['Prophetic Books', 'Historical Context']
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
      <div className="mt-[44px] bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Smart Bible Study</h1>
            <p className="text-white text-sm opacity-80">AI-powered personalized learning</p>
          </div>
          <div className="flex items-center space-x-3">
            <Brain className="w-5 h-5 text-white" />
            <Search className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* AI Status */}
        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">AI Learning Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-xs opacity-80">Adapting to your progress</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
              <span className="text-white text-xs">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('smart')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'smart' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Smart Plans
          </button>
          <button
            onClick={() => setSelectedTab('current')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'current' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Current Study
          </button>
          <button
            onClick={() => setSelectedTab('insights')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              selectedTab === 'insights' 
                ? 'bg-[#4A8B8B] text-white' 
                : 'bg-[#F8F6F3] text-[#8B8B8B]'
            }`}
          >
            Insights
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {selectedTab === 'smart' && (
          <div className="space-y-4">
            <div className="mb-4">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-2">AI-Recommended Plans</h2>
              <p className="text-sm text-[#8B8B8B]">Personalized study paths designed just for you</p>
            </div>
            
            {aiRecommendations.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-[#4A8B8B]" />
                      <span className="text-xs text-[#4A8B8B] font-medium">{plan.confidence}% match</span>
                    </div>
                    <div className="bg-[#E6B85C] text-white px-2 py-1 rounded-full text-xs font-medium">
                      AI Crafted
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                  <p className="text-sm text-[#8B8B8B] mb-3">{plan.description}</p>
                  
                  <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#2C2C2C]">Current Focus</span>
                      <span className="text-xs text-[#8B8B8B]">{plan.estimatedDuration}</span>
                    </div>
                    <p className="text-sm text-[#4A8B8B] font-medium mb-1">{plan.currentFocus}</p>
                    <p className="text-xs text-[#8B8B8B]">Next: {plan.nextMilestone}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-[#2C2C2C] mb-2">Adaptive Features</h4>
                    <div className="space-y-1">
                      {plan.adaptiveFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
                          <span className="text-xs text-[#8B8B8B]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                      Start AI Plan
                    </button>
                    <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Smart Features */}
            <div className="mt-6">
              <h2 className="text-[#2C2C2C] text-base font-semibold mb-3">Smart Features</h2>
              <div className="space-y-3">
                {smartFeatures.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.id} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#4A8B8B] bg-opacity-10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-[#4A8B8B]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#2C2C2C] text-sm">{feature.name}</h4>
                            <p className="text-xs text-[#8B8B8B]">{feature.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            feature.status === 'active' 
                              ? 'bg-[#6B8E23] text-white' 
                              : 'bg-[#E6B85C] text-white'
                          }`}>
                            {feature.status}
                          </div>
                          <p className="text-xs text-[#8B8B8B] mt-1">{feature.usage}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'current' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-[#4A8B8B]" />
                    <span className="text-sm font-medium text-[#2C2C2C]">Current Session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-[#8B8B8B]" />
                    <span className="text-xs text-[#8B8B8B]">{aiStudySession.timeSpent}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{aiStudySession.title}</h3>
                <p className="text-sm text-[#8B8B8B] mb-3">{aiStudySession.currentPassage}</p>
                
                <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">AI Analysis</span>
                    <span className="text-white text-xs opacity-80">{aiStudySession.aiAnalysis.difficulty}</span>
                  </div>
                  <p className="text-white text-sm opacity-90 mb-2">Theme: {aiStudySession.aiAnalysis.theme}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xs opacity-80">Progress: {aiStudySession.progress}%</span>
                    <button className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs">
                      Ask AI
                    </button>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-[#2C2C2C] mb-2">Key Questions</h4>
                  <div className="space-y-2">
                    {aiStudySession.aiAnalysis.keyQuestions.map((question, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-[#E6B85C] rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-sm text-[#2C2C2C] flex-1">{question}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-sm font-medium text-[#2C2C2C] mb-2">Connected Passages</h4>
                  <div className="space-y-1">
                    {aiStudySession.aiAnalysis.connections.map((connection, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#4A8B8B] rounded-full"></div>
                        <span className="text-xs text-[#4A8B8B] flex-1">{connection}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#F8F6F3] rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#2C2C2C]">{aiStudySession.questionsAnswered}</div>
                    <div className="text-xs text-[#8B8B8B]">Questions Answered</div>
                  </div>
                  <div className="bg-[#F8F6F3] rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#2C2C2C]">{aiStudySession.notesCreated}</div>
                    <div className="text-xs text-[#8B8B8B]">Notes Created</div>
                  </div>
                </div>
                
                <button className="w-full bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                  Continue Study
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'insights' && (
          <div className="space-y-4">
            {/* Analytics Overview */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-semibold text-[#2C2C2C] text-base mb-3">Study Analytics</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C2C2C]">{studyAnalytics.completed}/{studyAnalytics.weeklyGoal}</div>
                  <div className="text-xs text-[#8B8B8B]">Weekly Goal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C2C2C]">{studyAnalytics.averageSession}</div>
                  <div className="text-xs text-[#8B8B8B]">Avg Session</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#6B8E23]">{studyAnalytics.comprehensionScore}%</div>
                  <div className="text-xs text-[#8B8B8B]">Comprehension</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E6B85C]">{studyAnalytics.consistencyScore}%</div>
                  <div className="text-xs text-[#8B8B8B]">Consistency</div>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium text-[#2C2C2C] mb-2">Growth Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {studyAnalytics.growthAreas.map((area, index) => (
                    <span key={index} className="bg-[#F8F6F3] text-[#8B8B8B] px-2 py-1 rounded-full text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="space-y-3">
              <h3 className="font-semibold text-[#2C2C2C] text-base">AI Insights</h3>
              {studyInsights.map((insight) => {
                const IconComponent = insight.icon;
                return (
                  <div key={insight.id} className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        insight.impact === 'high' 
                          ? 'bg-[#6B8E23] bg-opacity-10' 
                          : 'bg-[#E6B85C] bg-opacity-10'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          insight.impact === 'high' ? 'text-[#6B8E23]' : 'text-[#E6B85C]'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#2C2C2C] text-sm mb-1">{insight.title}</h4>
                        <p className="text-sm text-[#8B8B8B] mb-2">{insight.description}</p>
                        <div className="bg-[#F8F6F3] rounded-lg p-2">
                          <p className="text-xs text-[#4A8B8B] font-medium">💡 {insight.suggestion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default BiblePlanVariation3;