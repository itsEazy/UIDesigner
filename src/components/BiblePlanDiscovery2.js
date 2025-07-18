import React, { useState } from 'react';
import { Search, Filter, Users, Calendar, Star, Heart, Cloud, Sun, Moon, Zap, Shield, Smile, Frown, Meh, ArrowRight, Play, Bookmark, ChevronRight } from 'lucide-react';

const BiblePlanDiscovery2 = () => {
  const [selectedMood, setSelectedMood] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  const moods = [
    { 
      id: 'all', 
      name: 'All Moods', 
      icon: Heart, 
      color: '#4A8B8B',
      gradient: 'from-[#4A8B8B] to-[#5B8FA8]',
      description: 'Every spiritual season'
    },
    { 
      id: 'struggling', 
      name: 'Struggling', 
      icon: Cloud, 
      color: '#8B7D8B',
      gradient: 'from-[#8B7D8B] to-[#B85C7A]',
      description: 'When life feels heavy'
    },
    { 
      id: 'hopeful', 
      name: 'Hopeful', 
      icon: Sun, 
      color: '#6B8E23',
      gradient: 'from-[#6B8E23] to-[#D4A574]',
      description: 'Ready for new beginnings'
    },
    { 
      id: 'peaceful', 
      name: 'Peaceful', 
      icon: Moon, 
      color: '#5B8FA8',
      gradient: 'from-[#5B8FA8] to-[#4A8B8B]',
      description: 'Content and reflective'
    },
    { 
      id: 'excited', 
      name: 'Excited', 
      icon: Zap, 
      color: '#E6B85C',
      gradient: 'from-[#E6B85C] to-[#D17A3A]',
      description: 'Eager to grow'
    },
    { 
      id: 'uncertain', 
      name: 'Uncertain', 
      icon: Shield, 
      color: '#B85C7A',
      gradient: 'from-[#B85C7A] to-[#8B7D8B]',
      description: 'Seeking direction'
    },
    { 
      id: 'grateful', 
      name: 'Grateful', 
      icon: Smile, 
      color: '#D4A574',
      gradient: 'from-[#D4A574] to-[#E6B85C]',
      description: 'Thankful heart'
    }
  ];

  const timeframes = [
    { id: 'all', name: 'Any Length', color: '#4A8B8B' },
    { id: 'quick', name: '1-7 days', color: '#E6B85C' },
    { id: 'short', name: '1-3 weeks', color: '#6B8E23' },
    { id: 'medium', name: '1-2 months', color: '#5B8FA8' },
    { id: 'long', name: '3+ months', color: '#8B7D8B' }
  ];

  const biblePlans = [
    {
      id: 1,
      title: 'When Anxiety Overwhelms',
      description: 'Finding God\'s peace in anxious moments',
      duration: '7 days',
      difficulty: 'Easy',
      participants: '18.2k',
      rating: 4.9,
      mood: 'struggling',
      timeframe: 'quick',
      color: '#8B7D8B',
      image: '🌙',
      verses: ['Philippians 4:6-7', 'Matthew 6:25-34', 'Psalm 23'],
      testimonial: '"This plan helped me through my darkest week" - Sarah M.'
    },
    {
      id: 2,
      title: 'Fresh Mercies',
      description: 'Celebrating God\'s daily faithfulness',
      duration: '21 days',
      difficulty: 'Easy',
      participants: '12.7k',
      rating: 4.8,
      mood: 'hopeful',
      timeframe: 'short',
      color: '#6B8E23',
      image: '🌅',
      verses: ['Lamentations 3:22-23', 'Psalm 30:5', 'Isaiah 43:19'],
      testimonial: '"Perfect for starting fresh with God" - Michael J.'
    },
    {
      id: 3,
      title: 'Quiet Moments with Jesus',
      description: 'Gentle reflections for the peaceful heart',
      duration: '30 days',
      difficulty: 'Easy',
      participants: '9.4k',
      rating: 4.9,
      mood: 'peaceful',
      timeframe: 'medium',
      color: '#5B8FA8',
      image: '🕊️',
      verses: ['Psalm 46:10', 'Matthew 11:28-30', 'John 14:27'],
      testimonial: '"Beautiful devotions for quiet time" - Rachel K.'
    },
    {
      id: 4,
      title: 'Breakthrough Prayers',
      description: 'Bold prayers for breakthrough moments',
      duration: '14 days',
      difficulty: 'Medium',
      participants: '15.6k',
      rating: 4.7,
      mood: 'excited',
      timeframe: 'short',
      color: '#E6B85C',
      image: '⚡',
      verses: ['Ephesians 3:20', 'Jeremiah 33:3', 'Mark 11:24'],
      testimonial: '"My prayer life was transformed!" - David L.'
    },
    {
      id: 5,
      title: 'Seeking God\'s Will',
      description: 'Finding clarity in times of decision',
      duration: '21 days',
      difficulty: 'Medium',
      participants: '8.1k',
      rating: 4.6,
      mood: 'uncertain',
      timeframe: 'short',
      color: '#B85C7A',
      image: '🧭',
      verses: ['Proverbs 3:5-6', 'Jeremiah 29:11', 'Romans 12:2'],
      testimonial: '"God\'s direction became so clear" - Lisa H.'
    },
    {
      id: 6,
      title: 'Counting Blessings',
      description: 'Cultivating a heart of gratitude',
      duration: '30 days',
      difficulty: 'Easy',
      participants: '22.3k',
      rating: 4.9,
      mood: 'grateful',
      timeframe: 'medium',
      color: '#D4A574',
      image: '🙏',
      verses: ['1 Thessalonians 5:18', 'Psalm 103:2', 'Colossians 3:15'],
      testimonial: '"Changed my entire perspective" - James R.'
    },
    {
      id: 7,
      title: 'Overcoming Fear',
      description: 'Courage for the fearful heart',
      duration: '14 days',
      difficulty: 'Medium',
      participants: '11.8k',
      rating: 4.8,
      mood: 'struggling',
      timeframe: 'short',
      color: '#8B7D8B',
      image: '🛡️',
      verses: ['Joshua 1:9', 'Psalm 27:1', 'Isaiah 41:10'],
      testimonial: '"I felt God\'s strength every day" - Anna P.'
    },
    {
      id: 8,
      title: 'New Season Prayers',
      description: 'Preparing for what God has next',
      duration: '10 days',
      difficulty: 'Easy',
      participants: '7.2k',
      rating: 4.7,
      mood: 'hopeful',
      timeframe: 'quick',
      color: '#6B8E23',
      image: '🌱',
      verses: ['Ecclesiastes 3:1', 'Isaiah 43:18-19', 'Revelation 21:5'],
      testimonial: '"Perfect timing for my life transition" - Mark T.'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#6B8E23';
      case 'Medium': return '#E6B85C';
      case 'Advanced': return '#B85C7A';
      default: return '#8B8B8B';
    }
  };

  const filteredPlans = biblePlans.filter(plan => {
    const moodMatch = selectedMood === 'all' || plan.mood === selectedMood;
    const timeMatch = selectedTimeframe === 'all' || plan.timeframe === selectedTimeframe;
    return moodMatch && timeMatch;
  });

  const selectedMoodData = moods.find(m => m.id === selectedMood);

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
      <div className="mt-[44px] bg-[#4A8B8B] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">How are you feeling?</h1>
            <p className="text-white text-sm opacity-80">Find plans that match your spiritual season</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Filter className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Mood Cards */}
      <div className="px-4 py-4 bg-white">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {moods.slice(0, 6).map((mood) => {
            const IconComponent = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`relative p-4 rounded-xl text-left transition-all ${
                  selectedMood === mood.id
                    ? 'ring-2 ring-[#4A8B8B] shadow-lg'
                    : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${mood.gradient} opacity-10`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent 
                      className="w-5 h-5"
                      style={{ color: mood.color }}
                    />
                    {selectedMood === mood.id && (
                      <div className="w-2 h-2 rounded-full bg-[#4A8B8B]"></div>
                    )}
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">{mood.name}</h3>
                  <p className="text-xs text-[#8B8B8B] leading-relaxed">{mood.description}</p>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Show All Button */}
        <button
          onClick={() => setSelectedMood('all')}
          className={`w-full p-3 rounded-xl border-2 border-dashed transition-all ${
            selectedMood === 'all'
              ? 'border-[#4A8B8B] bg-[#4A8B8B] bg-opacity-5'
              : 'border-[#E0E0E0] hover:border-[#4A8B8B]'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-[#4A8B8B]" />
            <span className="text-sm font-medium text-[#4A8B8B]">All Moods</span>
          </div>
        </button>
      </div>

      {/* Timeframe Filter */}
      <div className="px-4 py-3 bg-[#F8F6F3] border-t border-[#E0E0E0]">
        <div className="mb-2">
          <span className="text-sm font-medium text-[#2C2C2C]">Time Commitment:</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.id}
              onClick={() => setSelectedTimeframe(timeframe.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                selectedTimeframe === timeframe.id
                  ? 'bg-[#4A8B8B] text-white'
                  : 'bg-white text-[#8B8B8B] border border-[#E0E0E0]'
              }`}
            >
              {timeframe.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-[#2C2C2C]">
              {filteredPlans.length} Perfect Matches
            </span>
            {selectedMoodData && selectedMoodData.id !== 'all' && (
              <p className="text-xs text-[#8B8B8B] mt-1">
                For when you're feeling {selectedMoodData.name.toLowerCase()}
              </p>
            )}
          </div>
          <button className="text-xs text-[#4A8B8B] font-medium">
            See All <ChevronRight className="w-3 h-3 inline ml-1" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      {plan.image}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: plan.color }}
                      ></div>
                      <span className="text-xs text-[#8B8B8B]">{plan.duration}</span>
                      <div 
                        className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getDifficultyColor(plan.difficulty) }}
                      >
                        {plan.difficulty}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                    <p className="text-sm text-[#8B8B8B] mb-3">{plan.description}</p>
                    
                    {/* Key Verses Preview */}
                    <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Play className="w-3 h-3 text-[#4A8B8B]" />
                        <span className="text-xs font-medium text-[#2C2C2C]">Key Verses</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {plan.verses.map((verse, index) => (
                          <span key={index} className="text-xs text-[#8B8B8B] bg-white px-2 py-1 rounded">
                            {verse}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] bg-opacity-5 rounded-lg p-3 mb-3">
                      <p className="text-xs text-[#2C2C2C] italic mb-1">{plan.testimonial}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-[#8B8B8B]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.participants}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-[#E6B85C]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Start Today</span>
                      </button>
                      <button className="px-3 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
                        Preview
                      </button>
                      <button className="p-2 bg-[#F8F6F3] rounded-lg">
                        <Bookmark className="w-4 h-4 text-[#8B8B8B]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default BiblePlanDiscovery2;