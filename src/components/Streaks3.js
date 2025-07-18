import React, { useState } from 'react';
import { Flame, BookOpen, Heart, Edit3, Target, Award, Star, Crown, MapPin, Calendar, TrendingUp, Sparkles, Mountain, Sunrise } from 'lucide-react';

const Streaks3 = () => {
  const [selectedJourney, setSelectedJourney] = useState('all');

  const journeyMilestones = [
    {
      id: 1,
      type: 'achievement',
      title: 'First Prayer Streak',
      description: 'Completed your first 7-day prayer streak',
      date: '2024-01-07',
      icon: Heart,
      color: '#5B8FA8',
      quote: 'Pray without ceasing.',
      reference: '1 Thessalonians 5:17',
      celebration: true
    },
    {
      id: 2,
      type: 'milestone',
      title: 'Bible Reading Habit',
      description: 'Read Scripture for 14 consecutive days',
      date: '2024-01-14',
      icon: BookOpen,
      color: '#4A8B8B',
      quote: 'Your word is a lamp for my feet, a light on my path.',
      reference: 'Psalm 119:105',
      celebration: false
    },
    {
      id: 3,
      type: 'reflection',
      title: 'Monthly Reflection',
      description: 'Completed 30 days of spiritual growth',
      date: '2024-01-31',
      icon: Sparkles,
      color: '#6B8E23',
      stats: {
        prayerDays: 28,
        bibleReadingDays: 25,
        journalEntries: 20,
        goalsCompleted: 15
      },
      celebration: false
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Journaling Warrior',
      description: 'Wrote 25 journal entries this month',
      date: '2024-02-05',
      icon: Edit3,
      color: '#6B8E23',
      quote: 'Search me, God, and know my heart.',
      reference: 'Psalm 139:23',
      celebration: true
    },
    {
      id: 5,
      type: 'milestone',
      title: 'Goal Achiever',
      description: 'Completed 50 spiritual goals',
      date: '2024-02-12',
      icon: Target,
      color: '#D4A574',
      quote: 'I can do all things through Christ who strengthens me.',
      reference: 'Philippians 4:13',
      celebration: false
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Consistency Champion',
      description: 'Maintained habits for 60 consecutive days',
      date: '2024-02-20',
      icon: Crown,
      color: '#D4A574',
      quote: 'Well done, good and faithful servant.',
      reference: 'Matthew 25:23',
      celebration: true
    }
  ];

  const currentStreaks = [
    { activity: 'Prayer', streak: 12, color: '#5B8FA8', icon: Heart },
    { activity: 'Bible Reading', streak: 8, color: '#4A8B8B', icon: BookOpen },
    { activity: 'Journaling', streak: 5, color: '#6B8E23', icon: Edit3 },
    { activity: 'Goals', streak: 15, color: '#D4A574', icon: Target }
  ];

  const longestStreak = Math.max(...currentStreaks.map(s => s.streak));
  const totalDays = 85; // Days since starting the app
  const consistencyRate = 92; // Overall consistency percentage

  const getJourneyProgress = () => {
    const milestones = journeyMilestones.length;
    const achievements = journeyMilestones.filter(m => m.type === 'achievement').length;
    return { milestones, achievements };
  };

  const progress = getJourneyProgress();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  const getMilestoneIcon = (type) => {
    switch (type) {
      case 'achievement': return Award;
      case 'milestone': return Mountain;
      case 'reflection': return Sunrise;
      default: return Star;
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
      <div className="mt-[44px] bg-gradient-to-r from-[#6B8E23] to-[#5B8FA8] px-4 py-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-6 h-6 text-[#E6B85C]" />
            <span className="text-white text-2xl font-bold">Spiritual Journey</span>
          </div>
          <p className="text-white text-sm opacity-80 mb-4">
            Your path of growth and consistency
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
              <div className="text-white text-xl font-bold">{totalDays}</div>
              <div className="text-white text-xs opacity-80">Days</div>
            </div>
            <div className="text-center">
              <div className="text-white text-xl font-bold">{progress.achievements}</div>
              <div className="text-white text-xs opacity-80">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-white text-xl font-bold">{consistencyRate}%</div>
              <div className="text-white text-xs opacity-80">Consistency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Streaks */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <h2 className="text-lg font-semibold text-[#2C2C2C] mb-3">Current Streaks</h2>
        <div className="flex space-x-3 overflow-x-auto">
          {currentStreaks.map((streak) => {
            const IconComponent = streak.icon;
            return (
              <div
                key={streak.activity}
                className="flex-shrink-0 bg-[#F8F6F3] rounded-full px-4 py-2 flex items-center space-x-2"
              >
                <IconComponent 
                  className="w-4 h-4"
                  style={{ color: streak.color }}
                />
                <div className="flex items-center space-x-1">
                  <Flame className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-sm font-bold text-[#2C2C2C]">{streak.streak}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6B8E23] to-[#5B8FA8]"></div>
          
          {/* Journey Items */}
          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => {
              const IconComponent = getMilestoneIcon(milestone.type);
              const MilestoneIcon = milestone.icon;
              
              return (
                <div key={milestone.id} className="relative">
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white ${
                      milestone.celebration ? 'animate-pulse' : ''
                    }`}
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.celebration && (
                      <div className="absolute inset-0 rounded-full bg-[#E6B85C] animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12">
                    <div className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${
                      milestone.celebration ? 'shadow-lg' : ''
                    }`}
                    style={{ borderLeftColor: milestone.color }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${milestone.color}20` }}
                          >
                            <MilestoneIcon 
                              className="w-4 h-4"
                              style={{ color: milestone.color }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#2C2C2C] text-sm">{milestone.title}</h3>
                            <p className="text-xs text-[#8B8B8B]">{formatDate(milestone.date)}</p>
                          </div>
                        </div>
                        {milestone.celebration && (
                          <div className="flex items-center space-x-1 text-[#E6B85C]">
                            <Sparkles className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-[#2C2C2C] mb-3">{milestone.description}</p>
                      
                      {/* Quote */}
                      {milestone.quote && (
                        <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                          <p className="text-sm text-[#2C2C2C] italic mb-1">"{milestone.quote}"</p>
                          <p className="text-xs text-[#8B8B8B]">- {milestone.reference}</p>
                        </div>
                      )}
                      
                      {/* Stats for reflection milestones */}
                      {milestone.stats && (
                        <div className="grid grid-cols-2 gap-3 mt-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#5B8FA8]">{milestone.stats.prayerDays}</div>
                            <div className="text-xs text-[#8B8B8B]">Prayer Days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#4A8B8B]">{milestone.stats.bibleReadingDays}</div>
                            <div className="text-xs text-[#8B8B8B]">Bible Reading</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#6B8E23]">{milestone.stats.journalEntries}</div>
                            <div className="text-xs text-[#8B8B8B]">Journal Entries</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#D4A574]">{milestone.stats.goalsCompleted}</div>
                            <div className="text-xs text-[#8B8B8B]">Goals Completed</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Continue Journey */}
          <div className="relative mt-6">
            <div className="absolute left-4 w-4 h-4 rounded-full bg-[#F8F6F3] border-4 border-white"></div>
            <div className="ml-12">
              <div className="bg-gradient-to-r from-[#6B8E23] to-[#5B8FA8] rounded-xl p-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-semibold">Continue Your Journey</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">
                  Your spiritual growth continues. Keep building those habits and reaching new milestones!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Next Milestone:</span>
                  <span className="text-sm">100 Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-gradient-to-r from-[#6B8E23] to-[#5B8FA8]">
        <div className="text-center">
          <p className="text-white text-sm italic mb-1">
            "Being confident of this, that he who began a good work in you will carry it on to completion."
          </p>
          <p className="text-white text-xs opacity-80">Philippians 1:6</p>
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

export default Streaks3;