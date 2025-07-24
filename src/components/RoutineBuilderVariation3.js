import React, { useState } from 'react';
import { Plus, Clock, Book, Heart, Edit3, Zap, Calendar, Move, X, Check } from 'lucide-react';

const RoutineBuilderVariation3 = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);

  const availableActivities = [
    { 
      id: 1, 
      type: 'devotion', 
      title: 'Morning Devotion', 
      duration: '15 min', 
      color: '#6B8E23',
      icon: Heart,
      description: 'Start your day with reflection',
      frequency: 'Daily'
    },
    { 
      id: 2, 
      type: 'bible', 
      title: 'Bible Reading', 
      duration: '20 min', 
      color: '#4A8B8B',
      icon: Book,
      description: 'Systematic scripture study',
      frequency: 'Daily'
    },
    { 
      id: 3, 
      type: 'prayer', 
      title: 'Prayer Time', 
      duration: '10 min', 
      color: '#5B8FA8',
      icon: Heart,
      description: 'Quiet time with God',
      frequency: 'Daily'
    },
    { 
      id: 4, 
      type: 'journal', 
      title: 'Reflection Journal', 
      duration: '15 min', 
      color: '#6B8E23',
      icon: Edit3,
      description: 'Record insights and prayers',
      frequency: 'Daily'
    },
    { 
      id: 5, 
      type: 'worship', 
      title: 'Worship Music', 
      duration: '10 min', 
      color: '#D4A574',
      icon: Heart,
      description: 'Praise through song',
      frequency: 'Daily'
    },
    { 
      id: 6, 
      type: 'study', 
      title: 'Bible Study', 
      duration: '30 min', 
      color: '#4A8B8B',
      icon: Book,
      description: 'Deep theological study',
      frequency: 'Weekly'
    }
  ];

  const presetTemplates = [
    {
      id: 'morning',
      name: 'Morning Routine',
      description: 'Start your day with God',
      activities: [1, 2, 3],
      color: '#6B8E23'
    },
    {
      id: 'evening',
      name: 'Evening Reflection',
      description: 'End with gratitude',
      activities: [4, 5],
      color: '#5B8FA8'
    },
    {
      id: 'intensive',
      name: 'Deep Study',
      description: 'Comprehensive spiritual time',
      activities: [1, 2, 3, 4, 6],
      color: '#4A8B8B'
    }
  ];

  const myRoutine = availableActivities.filter(activity => 
    selectedCards.includes(activity.id)
  );

  const totalDuration = myRoutine.reduce((sum, activity) => {
    const minutes = parseInt(activity.duration);
    return sum + minutes;
  }, 0);

  const toggleActivity = (activityId) => {
    setSelectedCards(prev => 
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const applyTemplate = (template) => {
    setSelectedCards(template.activities);
    setShowTemplates(false);
  };

  return (
    <div className="w-[375px] h-[812px] bg-[#FDFCF8] relative overflow-hidden">
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] p-2">
        <div className="w-full h-full bg-[#FDFCF8] rounded-[32px] overflow-hidden">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2">
            <span className="text-black font-semibold">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-black rounded-sm"></div>
              <div className="w-4 h-2 bg-black rounded-sm opacity-60"></div>
              <div className="w-4 h-2 bg-black rounded-sm opacity-30"></div>
            </div>
          </div>

          {/* Header with Templates */}
          <div className="px-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[28px] font-semibold text-[#2C2C2C] leading-[36px] tracking-[-0.3px]">
                My Routine
              </h1>
              <button 
                onClick={() => setShowTemplates(true)}
                className="px-4 py-2 bg-[#4A5D4F] rounded-lg flex items-center"
              >
                <Zap className="w-4 h-4 text-white mr-2" />
                <span className="text-[14px] font-medium text-white">Templates</span>
              </button>
            </div>

            {/* Routine Summary */}
            {myRoutine.length > 0 && (
              <div className="bg-[#6B8E23] bg-opacity-10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[16px] font-medium text-[#2C2C2C] mb-1">
                      {myRoutine.length} Activities Selected
                    </h3>
                    <p className="text-[14px] text-[#6B8E23]">
                      Total time: {totalDuration} minutes
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {myRoutine.slice(0, 3).map((activity, index) => (
                      <div
                        key={activity.id}
                        className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                        style={{ backgroundColor: activity.color }}
                      >
                        <activity.icon className="w-4 h-4 text-white" />
                      </div>
                    ))}
                    {myRoutine.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-[#8B8B8B] border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-medium text-white">
                          +{myRoutine.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Activity Cards Grid */}
          <div className="flex-1 px-6">
            <h2 className="text-[18px] font-medium text-[#2C2C2C] mb-4 tracking-[-0.1px]">
              Choose Activities
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {availableActivities.map((activity) => {
                const isSelected = selectedCards.includes(activity.id);
                const IconComponent = activity.icon;
                
                return (
                  <button
                    key={activity.id}
                    onClick={() => toggleActivity(activity.id)}
                    className={`relative bg-white rounded-xl p-4 shadow-sm transition-all ${
                      isSelected 
                        ? 'ring-2 ring-[#4A5D4F] shadow-md' 
                        : 'hover:shadow-md'
                    }`}
                  >
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#4A5D4F] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    {/* Activity Icon */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${activity.color}15` }}
                    >
                      <IconComponent 
                        className="w-6 h-6" 
                        style={{ color: activity.color }} 
                      />
                    </div>
                    
                    {/* Activity Info */}
                    <h3 className="text-[14px] font-medium text-[#2C2C2C] mb-1 text-left">
                      {activity.title}
                    </h3>
                    <p className="text-[12px] text-[#8B8B8B] mb-2 text-left">
                      {activity.description}
                    </p>
                    
                    {/* Duration & Frequency */}
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-[12px] font-medium px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: activity.color }}
                      >
                        {activity.duration}
                      </span>
                      <span className="text-[10px] text-[#8B8B8B]">
                        {activity.frequency}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-8">
            <div className="flex space-x-3">
              <button className="flex-1 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl py-4 font-medium">
                Save as Template
              </button>
              <button 
                className={`flex-1 rounded-xl py-4 font-medium transition-colors ${
                  myRoutine.length > 0
                    ? 'bg-[#4A5D4F] text-white'
                    : 'bg-[#8B8B8B] text-white opacity-50'
                }`}
                disabled={myRoutine.length === 0}
              >
                Create Routine
              </button>
            </div>
          </div>

          {/* Templates Modal */}
          {showTemplates && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="bg-white w-full rounded-t-3xl p-6 max-h-[70%] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[22px] font-medium text-[#2C2C2C] tracking-[-0.2px]">
                    Quick Templates
                  </h3>
                  <button 
                    onClick={() => setShowTemplates(false)}
                    className="w-8 h-8 bg-[#F8F6F3] rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-[#8B8B8B]" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {presetTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => applyTemplate(template)}
                      className="w-full bg-[#F8F6F3] rounded-xl p-4 text-left hover:bg-[#F0F0F0] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[16px] font-medium text-[#2C2C2C]">
                          {template.name}
                        </h4>
                        <div className="flex -space-x-1">
                          {template.activities.slice(0, 3).map((activityId, index) => {
                            const activity = availableActivities.find(a => a.id === activityId);
                            return (
                              <div
                                key={activityId}
                                className="w-6 h-6 rounded-full border border-white"
                                style={{ backgroundColor: activity?.color }}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                      <p className="text-[14px] text-[#8B8B8B] mb-1">
                        {template.description}
                      </p>
                      <p className="text-[12px] text-[#8B8B8B]">
                        {template.activities.length} activities
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RoutineBuilderVariation3;