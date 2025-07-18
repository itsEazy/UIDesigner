import React, { useState } from 'react';
import { Flame, BookOpen, Heart, Edit3, Target, Award, TrendingUp, Calendar, CheckCircle, Circle, Star, Zap } from 'lucide-react';

const Streaks2 = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const activities = [
    { 
      id: 'prayer', 
      name: 'Prayer', 
      icon: Heart, 
      color: '#5B8FA8',
      streak: 12,
      weeklyGoal: 7,
      weeklyProgress: 5,
      totalSessions: 89,
      averageMinutes: 15
    },
    { 
      id: 'bible', 
      name: 'Bible Reading', 
      icon: BookOpen, 
      color: '#4A8B8B',
      streak: 8,
      weeklyGoal: 7,
      weeklyProgress: 6,
      totalSessions: 67,
      averageMinutes: 20
    },
    { 
      id: 'journal', 
      name: 'Journaling', 
      icon: Edit3, 
      color: '#6B8E23',
      streak: 5,
      weeklyGoal: 5,
      weeklyProgress: 3,
      totalSessions: 34,
      averageMinutes: 10
    },
    { 
      id: 'goals', 
      name: 'Goals', 
      icon: Target, 
      color: '#D4A574',
      streak: 15,
      weeklyGoal: 3,
      weeklyProgress: 2,
      totalSessions: 45,
      averageMinutes: 8
    }
  ];

  const achievements = [
    { 
      id: 'prayer_7', 
      name: '7 Day Prayer Streak', 
      icon: Heart, 
      color: '#5B8FA8',
      achieved: true,
      date: '2024-01-15'
    },
    { 
      id: 'bible_30', 
      name: '30 Day Bible Reading', 
      icon: BookOpen, 
      color: '#4A8B8B',
      achieved: false,
      progress: 8,
      target: 30
    },
    { 
      id: 'consistent', 
      name: 'Consistent Warrior', 
      icon: Award, 
      color: '#6B8E23',
      achieved: true,
      date: '2024-01-20'
    },
    { 
      id: 'perfect_week', 
      name: 'Perfect Week', 
      icon: Star, 
      color: '#D4A574',
      achieved: false,
      progress: 5,
      target: 7
    }
  ];

  const weeklyData = [
    { day: 'Mon', prayer: true, bible: true, journal: false, goals: true },
    { day: 'Tue', prayer: true, bible: true, journal: true, goals: false },
    { day: 'Wed', prayer: true, bible: false, journal: true, goals: true },
    { day: 'Thu', prayer: true, bible: true, journal: false, goals: false },
    { day: 'Fri', prayer: true, bible: true, journal: true, goals: false },
    { day: 'Sat', prayer: false, bible: true, journal: false, goals: true },
    { day: 'Sun', prayer: false, bible: false, journal: false, goals: false }
  ];

  const CircularProgress = ({ activity }) => {
    const percentage = (activity.weeklyProgress / activity.weeklyGoal) * 100;
    const strokeDasharray = 2 * Math.PI * 45;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;
    
    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#F8F6F3"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={activity.color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <activity.icon className="w-6 h-6 mb-1" style={{ color: activity.color }} />
          <span className="text-xs font-bold text-[#2C2C2C]">{activity.streak}</span>
        </div>
      </div>
    );
  };

  const getLongestStreak = () => {
    return Math.max(...activities.map(a => a.streak));
  };

  const getTotalSessions = () => {
    return activities.reduce((sum, a) => sum + a.totalSessions, 0);
  };

  const getWeeklyCompletion = () => {
    const totalGoals = activities.reduce((sum, a) => sum + a.weeklyGoal, 0);
    const totalProgress = activities.reduce((sum, a) => sum + a.weeklyProgress, 0);
    return Math.round((totalProgress / totalGoals) * 100);
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
      <div className="mt-[44px] bg-[#6B8E23] px-4 py-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Flame className="w-8 h-8 text-[#E6B85C]" />
            <span className="text-white text-4xl font-bold">{getLongestStreak()}</span>
          </div>
          <h1 className="text-white text-xl font-semibold mb-1">Day Streak</h1>
          <p className="text-white text-sm opacity-80">Keep up the amazing consistency!</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#6B8E23]">{getWeeklyCompletion()}%</div>
            <div className="text-xs text-[#8B8B8B]">This Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5B8FA8]">{getTotalSessions()}</div>
            <div className="text-xs text-[#8B8B8B]">Total Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A574]">{achievements.filter(a => a.achieved).length}</div>
            <div className="text-xs text-[#8B8B8B]">Achievements</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Progress Rings */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Weekly Progress</h2>
          <div className="grid grid-cols-2 gap-4">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <CircularProgress activity={activity} />
                <h3 className="font-semibold text-[#2C2C2C] text-sm mt-2">{activity.name}</h3>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Flame className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-xs font-bold text-[#2C2C2C]">{activity.streak} days</span>
                </div>
                <div className="text-xs text-[#8B8B8B] mt-1">
                  {activity.weeklyProgress}/{activity.weeklyGoal} this week
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">This Week</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs font-medium text-[#8B8B8B] mb-2">{day.day}</div>
                  <div className="space-y-1">
                    {['prayer', 'bible', 'journal', 'goals'].map(activity => {
                      const activityData = activities.find(a => a.id === activity);
                      return (
                        <div
                          key={activity}
                          className={`w-6 h-1 rounded-full mx-auto ${
                            day[activity] ? 'bg-[#6B8E23]' : 'bg-[#F8F6F3]'
                          }`}
                          style={{ backgroundColor: day[activity] ? activityData.color : '#F8F6F3' }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#8B8B8B]">Weekly Goal Progress</span>
              <span className="font-semibold text-[#6B8E23]">{getWeeklyCompletion()}%</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Achievements</h2>
          <div className="space-y-3">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div key={achievement.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.achieved ? 'bg-[#6B8E23]' : 'bg-[#F8F6F3]'
                      }`}
                    >
                      <IconComponent 
                        className="w-6 h-6"
                        style={{ color: achievement.achieved ? 'white' : achievement.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C2C2C] text-sm">{achievement.name}</h3>
                      {achievement.achieved ? (
                        <p className="text-xs text-[#6B8E23] font-medium">
                          Achieved on {achievement.date}
                        </p>
                      ) : (
                        <div className="mt-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-[#8B8B8B]">
                              {achievement.progress}/{achievement.target}
                            </span>
                            <span className="text-xs text-[#8B8B8B]">
                              {Math.round((achievement.progress / achievement.target) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-700"
                              style={{ 
                                width: `${(achievement.progress / achievement.target) * 100}%`,
                                backgroundColor: achievement.color
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    {achievement.achieved && (
                      <div className="flex items-center space-x-1 text-[#6B8E23]">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Activity Details</h2>
          <div className="space-y-3">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${activity.color}20` }}
                    >
                      <IconComponent 
                        className="w-5 h-5"
                        style={{ color: activity.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C2C2C] text-sm">{activity.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Flame className="w-3 h-3 text-[#E6B85C]" />
                        <span className="text-xs font-bold text-[#2C2C2C]">{activity.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-[#2C2C2C]">{activity.totalSessions}</div>
                      <div className="text-xs text-[#8B8B8B]">Total Sessions</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#2C2C2C]">{activity.averageMinutes}m</div>
                      <div className="text-xs text-[#8B8B8B]">Avg. Duration</div>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default Streaks2;