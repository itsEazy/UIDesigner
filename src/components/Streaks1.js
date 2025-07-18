import React, { useState } from 'react';
import { Calendar, Flame, BookOpen, Heart, Edit3, Target, ChevronLeft, ChevronRight, TrendingUp, Award, Check, X } from 'lucide-react';

const Streaks1 = () => {
  const [selectedActivity, setSelectedActivity] = useState('prayer');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const activities = [
    { id: 'prayer', name: 'Prayer', icon: Heart, color: '#5B8FA8', streak: 12 },
    { id: 'bible', name: 'Bible', icon: BookOpen, color: '#4A8B8B', streak: 8 },
    { id: 'journal', name: 'Journal', icon: Edit3, color: '#6B8E23', streak: 5 },
    { id: 'goals', name: 'Goals', icon: Target, color: '#D4A574', streak: 15 }
  ];

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const dayOfMonth = date.getDate();
      
      // Simulate activity completion data
      const isCompleted = isCurrentMonth && Math.random() > 0.3;
      const isMissed = isCurrentMonth && !isCompleted && date < today;
      
      days.push({
        date: date,
        dayOfMonth: dayOfMonth,
        isCurrentMonth: isCurrentMonth,
        isToday: isToday,
        isCompleted: isCompleted,
        isMissed: isMissed
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const currentActivity = activities.find(a => a.id === selectedActivity);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const getStreakStats = () => {
    const completedDays = calendarDays.filter(day => day.isCurrentMonth && day.isCompleted).length;
    const totalDays = calendarDays.filter(day => day.isCurrentMonth && day.date <= new Date()).length;
    const completionRate = totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;
    
    return {
      completedDays,
      totalDays,
      completionRate,
      currentStreak: currentActivity.streak
    };
  };

  const stats = getStreakStats();

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
      <div className="mt-[44px] bg-[#6B8E23] px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl font-semibold">Streaks</h1>
            <p className="text-white text-sm opacity-80">Track your spiritual consistency</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white bg-opacity-20 px-3 py-2 rounded-full flex items-center space-x-2">
              <Flame className="w-4 h-4 text-[#E6B85C]" />
              <span className="text-white text-lg font-bold">{stats.currentStreak}</span>
            </div>
          </div>
        </div>
        
        {/* Overall Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
            <div className="text-white text-lg font-bold">{stats.completionRate}%</div>
            <div className="text-white text-xs opacity-80">This Month</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
            <div className="text-white text-lg font-bold">{stats.completedDays}</div>
            <div className="text-white text-xs opacity-80">Completed</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
            <div className="text-white text-lg font-bold">{stats.totalDays}</div>
            <div className="text-white text-xs opacity-80">Total Days</div>
          </div>
        </div>
      </div>

      {/* Activity Selector */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="flex space-x-3 overflow-x-auto">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-full border-2 transition-all whitespace-nowrap ${
                  selectedActivity === activity.id
                    ? 'border-[#6B8E23] bg-[#6B8E23] text-white'
                    : 'border-[#E0E0E0] bg-white text-[#8B8B8B]'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{activity.name}</span>
                <div className="flex items-center space-x-1 ml-2">
                  <Flame className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-xs font-bold">{activity.streak}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calendar Header */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-[#F8F6F3] rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#8B8B8B]" />
          </button>
          <h2 className="text-lg font-semibold text-[#2C2C2C]">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-[#F8F6F3] rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
          </button>
        </div>
        
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-xs font-medium text-[#8B8B8B] p-2">
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`w-11 h-11 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                !day.isCurrentMonth
                  ? 'text-[#E0E0E0]'
                  : day.isToday
                  ? 'bg-[#D17A3A] text-white ring-2 ring-[#D17A3A] ring-opacity-30'
                  : day.isCompleted
                  ? 'bg-[#6B8E23] text-white'
                  : day.isMissed
                  ? 'bg-[#B85C57] text-white'
                  : 'bg-[#F8F6F3] text-[#8B8B8B] hover:bg-[#E0E0E0]'
              }`}
            >
              {day.isCurrentMonth && (
                <>
                  {day.isCompleted && <Check className="w-4 h-4" />}
                  {day.isMissed && <X className="w-4 h-4" />}
                  {!day.isCompleted && !day.isMissed && (
                    <span>{day.dayOfMonth}</span>
                  )}
                </>
              )}
              {!day.isCurrentMonth && (
                <span className="opacity-30">{day.dayOfMonth}</span>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#2C2C2C] mb-3">Legend</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#6B8E23] rounded flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-[#2C2C2C]">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#B85C57] rounded flex items-center justify-center">
                <X className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-[#2C2C2C]">Missed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#D17A3A] rounded border-2 border-[#D17A3A] border-opacity-30"></div>
              <span className="text-sm text-[#2C2C2C]">Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#F8F6F3] rounded"></div>
              <span className="text-sm text-[#2C2C2C]">Future</span>
            </div>
          </div>
        </div>

        {/* Streak Milestones */}
        <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#2C2C2C] mb-3">Streak Milestones</h3>
          <div className="space-y-3">
            {[7, 14, 30, 60, 100].map((milestone) => (
              <div key={milestone} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentActivity.streak >= milestone
                      ? 'bg-[#6B8E23] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B]'
                  }`}>
                    {currentActivity.streak >= milestone ? (
                      <Award className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{milestone}</span>
                    )}
                  </div>
                  <span className="text-sm text-[#2C2C2C]">{milestone} Day Streak</span>
                </div>
                {currentActivity.streak >= milestone && (
                  <div className="flex items-center space-x-1 text-[#6B8E23]">
                    <Flame className="w-3 h-3" />
                    <span className="text-xs font-medium">Achieved!</span>
                  </div>
                )}
              </div>
            ))}
          </div>
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

export default Streaks1;