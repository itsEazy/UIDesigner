import React, { useState } from 'react';
import { Plus, Clock, Book, Heart, Edit3, Calendar, Settings, ArrowRight } from 'lucide-react';

const RoutineBuilderVariation1 = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [showActivityModal, setShowActivityModal] = useState(false);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const routineActivities = {
    Monday: [
      { id: 1, type: 'devotion', title: 'Morning Devotion', time: '6:00 AM', duration: '15 min', color: '#6B8E23' },
      { id: 2, type: 'bible', title: 'Bible Reading', time: '6:15 AM', duration: '20 min', color: '#4A8B8B' },
      { id: 3, type: 'prayer', title: 'Guided Prayer', time: '6:30 AM', duration: '10 min', color: '#5B8FA8' },
      { id: 4, type: 'bible-plan', title: 'Evening Bible Study', time: '9:00 PM', duration: '30 min', color: '#4A8B8B' },
      { id: 5, type: 'journal', title: 'Reflection Journal', time: '9:30 PM', duration: '15 min', color: '#6B8E23' }
    ],
    Tuesday: [
      { id: 6, type: 'devotion', title: 'Morning Devotion', time: '6:00 AM', duration: '15 min', color: '#6B8E23' },
      { id: 7, type: 'prayer', title: 'Prayer Time', time: '12:00 PM', duration: '10 min', color: '#5B8FA8' }
    ]
  };

  const currentActivities = routineActivities[selectedDay] || [];

  const activityTypes = [
    { type: 'devotion', title: 'Devotion', icon: Heart, color: '#6B8E23' },
    { type: 'bible', title: 'Bible Reading', icon: Book, color: '#4A8B8B' },
    { type: 'prayer', title: 'Prayer', icon: Heart, color: '#5B8FA8' },
    { type: 'journal', title: 'Journal', icon: Edit3, color: '#6B8E23' }
  ];

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

          {/* Header */}
          <div className="px-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[28px] font-semibold text-[#2C2C2C] leading-[36px] tracking-[-0.3px]">
                Build Routine
              </h1>
              <button className="w-11 h-11 bg-[#4A5D4F] rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Week Overview */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[16px] font-medium text-[#2C2C2C]">This Week</span>
                <span className="text-[14px] text-[#8B8B8B]">5 days active</span>
              </div>
              <div className="flex justify-between">
                {days.map((day, index) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(fullDays[index])}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-[12px] font-medium transition-all ${
                      selectedDay === fullDays[index]
                        ? 'bg-[#4A5D4F] text-white'
                        : routineActivities[fullDays[index]]?.length > 0
                        ? 'bg-[#6B8E23] bg-opacity-10 text-[#6B8E23]'
                        : 'bg-[#F8F6F3] text-[#8B8B8B]'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Day Content */}
          <div className="flex-1 px-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[22px] font-medium text-[#2C2C2C] tracking-[-0.2px]">
                {selectedDay}
              </h2>
              <button 
                onClick={() => setShowActivityModal(true)}
                className="w-8 h-8 bg-[#4A5D4F] rounded-full flex items-center justify-center"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {currentActivities.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-[#8B8B8B] mx-auto mb-3" />
                  <p className="text-[16px] text-[#8B8B8B] mb-2">No activities scheduled</p>
                  <p className="text-[14px] text-[#8B8B8B]">Tap + to add your first activity</p>
                </div>
              ) : (
                currentActivities.map((activity, index) => (
                  <div key={activity.id} className="relative">
                    {/* Timeline Line */}
                    {index < currentActivities.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-[#F8F6F3]"></div>
                    )}
                    
                    {/* Activity Card */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: `${activity.color}15` }}
                        >
                          <div 
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: activity.color }}
                          ></div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-[16px] font-medium text-[#2C2C2C]">
                              {activity.title}
                            </h3>
                            <span className="text-[14px] font-medium text-[#4A5D4F]">
                              {activity.time}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[14px] text-[#8B8B8B]">
                              {activity.duration}
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#8B8B8B]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Activity Selection Modal */}
          {showActivityModal && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="bg-white w-full rounded-t-3xl p-6">
                <div className="w-12 h-1 bg-[#E0E0E0] rounded-full mx-auto mb-6"></div>
                
                <h3 className="text-[22px] font-medium text-[#2C2C2C] mb-6 tracking-[-0.2px]">
                  Add Activity
                </h3>
                
                <div className="space-y-3">
                  {activityTypes.map((type) => (
                    <button
                      key={type.type}
                      className="w-full bg-[#F8F6F3] rounded-xl p-4 flex items-center hover:bg-[#F0F0F0] transition-colors"
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${type.color}15` }}
                      >
                        <type.icon className="w-5 h-5" style={{ color: type.color }} />
                      </div>
                      <span className="text-[16px] font-medium text-[#2C2C2C]">
                        {type.title}
                      </span>
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowActivityModal(false)}
                  className="w-full bg-[#4A5D4F] text-white rounded-xl py-4 font-medium mt-6"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RoutineBuilderVariation1;