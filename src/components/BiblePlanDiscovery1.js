import React, { useState } from 'react';
import { Search, Filter, Users, Calendar, Star, Heart, BookOpen, Shield, Sunrise, Mountain, Zap, Crown, Compass, Anchor, ChevronRight, Play, Bookmark } from 'lucide-react';

const BiblePlanDiscovery1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');

  const categories = [
    { id: 'all', name: 'All Plans', icon: BookOpen, color: '#4A8B8B' },
    { id: 'devotional', name: 'Devotional', icon: Heart, color: '#D4A574' },
    { id: 'study', name: 'Bible Study', icon: BookOpen, color: '#4A8B8B' },
    { id: 'topical', name: 'Topical', icon: Compass, color: '#8B7D8B' },
    { id: 'seasonal', name: 'Seasonal', icon: Sunrise, color: '#6B8E23' },
    { id: 'character', name: 'Character', icon: Crown, color: '#B85C7A' }
  ];

  const topics = [
    { id: 'all', name: 'All Topics', color: '#4A8B8B' },
    { id: 'faith', name: 'Faith & Trust', color: '#5B8FA8' },
    { id: 'hope', name: 'Hope & Comfort', color: '#6B8E23' },
    { id: 'love', name: 'Love & Relationships', color: '#B85C7A' },
    { id: 'wisdom', name: 'Wisdom & Growth', color: '#D4A574' },
    { id: 'purpose', name: 'Purpose & Calling', color: '#8B7D8B' },
    { id: 'prayer', name: 'Prayer & Worship', color: '#5B8FA8' },
    { id: 'courage', name: 'Courage & Strength', color: '#D17A3A' },
    { id: 'forgiveness', name: 'Forgiveness & Healing', color: '#4A8B8B' }
  ];

  const biblePlans = [
    {
      id: 1,
      title: 'Walking by Faith',
      description: 'Strengthen your faith through biblical examples',
      duration: '21 days',
      difficulty: 'Easy',
      participants: '12.3k',
      rating: 4.9,
      category: 'topical',
      topics: ['faith', 'courage'],
      color: '#5B8FA8',
      preview: 'Abraham, Moses, David, and other faith heroes'
    },
    {
      id: 2,
      title: 'Psalms of Comfort',
      description: 'Finding peace in God\'s promises during trials',
      duration: '30 days',
      difficulty: 'Easy',
      participants: '8.7k',
      rating: 4.8,
      category: 'devotional',
      topics: ['hope', 'prayer'],
      color: '#6B8E23',
      preview: 'Daily psalms for comfort and encouragement'
    },
    {
      id: 3,
      title: 'Jesus & Relationships',
      description: 'Learning to love like Christ in all relationships',
      duration: '14 days',
      difficulty: 'Medium',
      participants: '6.2k',
      rating: 4.7,
      category: 'study',
      topics: ['love', 'wisdom'],
      color: '#B85C7A',
      preview: 'Christ\'s teachings on love, forgiveness, and unity'
    },
    {
      id: 4,
      title: 'Advent Devotions',
      description: 'Preparing hearts for Christmas through Scripture',
      duration: '25 days',
      difficulty: 'Easy',
      participants: '15.1k',
      rating: 4.9,
      category: 'seasonal',
      topics: ['hope', 'love'],
      color: '#D4A574',
      preview: 'Daily readings leading up to Christmas'
    },
    {
      id: 5,
      title: 'Paul\'s Prison Letters',
      description: 'Joy and hope in difficult circumstances',
      duration: '28 days',
      difficulty: 'Advanced',
      participants: '3.4k',
      rating: 4.6,
      category: 'study',
      topics: ['courage', 'faith'],
      color: '#8B7D8B',
      preview: 'Ephesians, Philippians, Colossians, Philemon'
    },
    {
      id: 6,
      title: 'Prayer Warriors',
      description: 'Biblical models of powerful prayer',
      duration: '40 days',
      difficulty: 'Medium',
      participants: '9.8k',
      rating: 4.8,
      category: 'topical',
      topics: ['prayer', 'faith'],
      color: '#5B8FA8',
      preview: 'Hannah, Daniel, Jesus, and others who prayed'
    },
    {
      id: 7,
      title: 'Healing & Wholeness',
      description: 'God\'s restoration in broken places',
      duration: '21 days',
      difficulty: 'Easy',
      participants: '11.5k',
      rating: 4.9,
      category: 'devotional',
      topics: ['forgiveness', 'hope'],
      color: '#4A8B8B',
      preview: 'Stories of God\'s healing power and mercy'
    },
    {
      id: 8,
      title: 'Wisdom Literature Deep Dive',
      description: 'Proverbs, Ecclesiastes, and Job explored',
      duration: '60 days',
      difficulty: 'Advanced',
      participants: '4.1k',
      rating: 4.7,
      category: 'study',
      topics: ['wisdom', 'purpose'],
      color: '#D4A574',
      preview: 'Ancient wisdom for modern living'
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
    const categoryMatch = selectedCategory === 'all' || plan.category === selectedCategory;
    const topicMatch = selectedTopic === 'all' || plan.topics.includes(selectedTopic);
    return categoryMatch && topicMatch;
  });

  const getTopicColor = (topicId) => {
    const topic = topics.find(t => t.id === topicId);
    return topic ? topic.color : '#8B8B8B';
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
      <div className="mt-[44px] bg-[#4A8B8B] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Discover Plans</h1>
            <p className="text-white text-sm opacity-80">Find the perfect Bible reading plan</p>
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Filter className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap border ${
                  selectedCategory === category.id
                    ? 'bg-[#4A8B8B] text-white border-[#4A8B8B]'
                    : 'bg-[#F8F6F3] text-[#8B8B8B] border-[#E0E0E0]'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Filter */}
      <div className="px-4 py-3 bg-[#F8F6F3]">
        <div className="mb-2">
          <span className="text-sm font-medium text-[#2C2C2C]">Filter by Topic:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-2 py-1 rounded-full text-xs font-medium border ${
                selectedTopic === topic.id
                  ? 'text-white border-transparent'
                  : 'bg-white text-[#8B8B8B] border-[#E0E0E0]'
              }`}
              style={{
                backgroundColor: selectedTopic === topic.id ? topic.color : undefined
              }}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#2C2C2C]">
            {filteredPlans.length} Plans Found
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#8B8B8B]">Sort by:</span>
            <select className="text-xs text-[#4A8B8B] border-none bg-transparent font-medium">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Shortest</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: plan.color }}
                      ></div>
                      <span className="text-xs text-[#8B8B8B] capitalize">{plan.category}</span>
                      <div 
                        className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getDifficultyColor(plan.difficulty) }}
                      >
                        {plan.difficulty}
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                    <p className="text-sm text-[#8B8B8B] mb-2">{plan.description}</p>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {plan.topics.map((topicId) => {
                        const topic = topics.find(t => t.id === topicId);
                        return (
                          <span 
                            key={topicId}
                            className="px-2 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: getTopicColor(topicId) }}
                          >
                            {topic?.name}
                          </span>
                        );
                      })}
                    </div>

                    {/* Preview */}
                    <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Play className="w-3 h-3 text-[#4A8B8B]" />
                        <span className="text-xs font-medium text-[#2C2C2C]">Preview</span>
                      </div>
                      <p className="text-xs text-[#8B8B8B]">{plan.preview}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                        <span className="text-xs text-[#8B8B8B]">{plan.duration}</span>
                      </div>
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
                      <button className="flex-1 bg-[#4A8B8B] text-white py-2 rounded-lg text-sm font-medium">
                        Start Plan
                      </button>
                      <button className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium">
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

export default BiblePlanDiscovery1;