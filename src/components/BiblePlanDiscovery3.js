import React, { useState } from 'react';
import { Search, Filter, Users, Calendar, Star, Heart, BookOpen, Clock, Target, TrendingUp, ChevronDown, ChevronRight, Play, Bookmark, X, SlidersHorizontal, MapPin, Award, Zap } from 'lucide-react';

const BiblePlanDiscovery3 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filters = {
    difficulty: [
      { id: 'all', name: 'All Levels', color: '#4A8B8B' },
      { id: 'beginner', name: 'Beginner', color: '#6B8E23' },
      { id: 'intermediate', name: 'Intermediate', color: '#E6B85C' },
      { id: 'advanced', name: 'Advanced', color: '#B85C7A' },
      { id: 'expert', name: 'Expert', color: '#8B7D8B' }
    ],
    duration: [
      { id: 'all', name: 'Any Duration', color: '#4A8B8B' },
      { id: 'quick', name: '1-7 days', color: '#E6B85C' },
      { id: 'short', name: '1-4 weeks', color: '#6B8E23' },
      { id: 'medium', name: '1-3 months', color: '#5B8FA8' },
      { id: 'long', name: '3+ months', color: '#8B7D8B' }
    ],
    language: [
      { id: 'all', name: 'All Languages', color: '#4A8B8B' },
      { id: 'english', name: 'English', color: '#5B8FA8' },
      { id: 'spanish', name: 'Spanish', color: '#D4A574' },
      { id: 'french', name: 'French', color: '#B85C7A' },
      { id: 'german', name: 'German', color: '#8B7D8B' }
    ],
    author: [
      { id: 'all', name: 'All Authors', color: '#4A8B8B' },
      { id: 'max_lucado', name: 'Max Lucado', color: '#D4A574' },
      { id: 'john_piper', name: 'John Piper', color: '#5B8FA8' },
      { id: 'joyce_meyer', name: 'Joyce Meyer', color: '#B85C7A' },
      { id: 'rick_warren', name: 'Rick Warren', color: '#6B8E23' }
    ]
  };

  const biblePlans = [
    {
      id: 1,
      title: 'The Purpose Driven Life',
      description: 'Discover your reason for being on earth',
      duration: '40 days',
      difficulty: 'beginner',
      participants: '2.1M',
      rating: 4.9,
      author: 'rick_warren',
      language: 'english',
      color: '#6B8E23',
      tags: ['purpose', 'life', 'meaning'],
      personalizedReason: 'Based on your interest in spiritual growth',
      completionRate: 89,
      avgTimePerDay: '15 min',
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: 'Anxious for Nothing',
      description: 'Finding calm in a chaotic world',
      duration: '21 days',
      difficulty: 'beginner',
      participants: '856k',
      rating: 4.8,
      author: 'max_lucado',
      language: 'english',
      color: '#5B8FA8',
      tags: ['anxiety', 'peace', 'stress'],
      personalizedReason: 'Recommended for managing stress',
      completionRate: 92,
      avgTimePerDay: '12 min',
      trending: false,
      featured: false
    },
    {
      id: 3,
      title: 'Desiring God',
      description: 'Meditations of a Christian hedonist',
      duration: '60 days',
      difficulty: 'advanced',
      participants: '234k',
      rating: 4.7,
      author: 'john_piper',
      language: 'english',
      color: '#8B7D8B',
      tags: ['theology', 'joy', 'worship'],
      personalizedReason: 'For deeper theological study',
      completionRate: 76,
      avgTimePerDay: '25 min',
      trending: false,
      featured: false
    },
    {
      id: 4,
      title: 'Battlefield of the Mind',
      description: 'Winning the battle in your mind',
      duration: '30 days',
      difficulty: 'intermediate',
      participants: '1.2M',
      rating: 4.6,
      author: 'joyce_meyer',
      language: 'english',
      color: '#B85C7A',
      tags: ['mind', 'thoughts', 'spiritual warfare'],
      personalizedReason: 'Popular with your connection network',
      completionRate: 83,
      avgTimePerDay: '18 min',
      trending: true,
      featured: false
    },
    {
      id: 5,
      title: 'You\'ll Get Through This',
      description: 'Hope and help for turbulent times',
      duration: '14 days',
      difficulty: 'beginner',
      participants: '678k',
      rating: 4.8,
      author: 'max_lucado',
      language: 'english',
      color: '#D4A574',
      tags: ['hope', 'trials', 'encouragement'],
      personalizedReason: 'Great for difficult seasons',
      completionRate: 94,
      avgTimePerDay: '10 min',
      trending: false,
      featured: true
    },
    {
      id: 6,
      title: 'The Calvary Road',
      description: 'Revival and spiritual awakening',
      duration: '21 days',
      difficulty: 'intermediate',
      participants: '89k',
      rating: 4.9,
      author: 'roy_hession',
      language: 'english',
      color: '#6B8E23',
      tags: ['revival', 'holiness', 'brokenness'],
      personalizedReason: 'Hidden gem for spiritual growth',
      completionRate: 87,
      avgTimePerDay: '20 min',
      trending: false,
      featured: false
    }
  ];

  const getDifficultyColor = (difficulty) => {
    const difficultyMap = {
      'beginner': '#6B8E23',
      'intermediate': '#E6B85C',
      'advanced': '#B85C7A',
      'expert': '#8B7D8B'
    };
    return difficultyMap[difficulty] || '#8B8B8B';
  };

  const filteredPlans = biblePlans.filter(plan => {
    const searchMatch = searchQuery === '' || 
      plan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const difficultyMatch = selectedDifficulty === 'all' || plan.difficulty === selectedDifficulty;
    const durationMatch = selectedDuration === 'all' || plan.duration.includes(selectedDuration);
    const languageMatch = selectedLanguage === 'all' || plan.language === selectedLanguage;
    const authorMatch = selectedAuthor === 'all' || plan.author === selectedAuthor;
    
    return searchMatch && difficultyMatch && durationMatch && languageMatch && authorMatch;
  });

  const sortedPlans = [...filteredPlans].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseFloat(b.participants.replace(/[^0-9.]/g, '')) - parseFloat(a.participants.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const getAuthorName = (authorId) => {
    const author = filters.author.find(a => a.id === authorId);
    return author ? author.name : 'Unknown';
  };

  const clearFilters = () => {
    setSelectedDifficulty('all');
    setSelectedDuration('all');
    setSelectedLanguage('all');
    setSelectedAuthor('all');
    setSearchQuery('');
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
            <h1 className="text-white text-xl font-semibold">Smart Discovery</h1>
            <p className="text-white text-sm opacity-80">AI-powered plan recommendations</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg"
          >
            <SlidersHorizontal className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Filters</span>
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-white opacity-60" />
          <input
            type="text"
            placeholder="Search plans, authors, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 border-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 p-1"
            >
              <X className="w-4 h-4 text-white opacity-60" />
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#2C2C2C]">Advanced Filters</h3>
            <button 
              onClick={clearFilters}
              className="text-xs text-[#4A8B8B] font-medium"
            >
              Clear All
            </button>
          </div>
          
          {/* Difficulty Filter */}
          <div>
            <label className="text-xs font-medium text-[#8B8B8B] mb-2 block">Difficulty Level</label>
            <div className="flex flex-wrap gap-2">
              {filters.difficulty.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-[#4A8B8B] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B] border border-[#E0E0E0]'
                  }`}
                >
                  {difficulty.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="text-xs font-medium text-[#8B8B8B] mb-2 block">Duration</label>
            <div className="flex flex-wrap gap-2">
              {filters.duration.map((duration) => (
                <button
                  key={duration.id}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedDuration === duration.id
                      ? 'bg-[#4A8B8B] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B] border border-[#E0E0E0]'
                  }`}
                >
                  {duration.name}
                </button>
              ))}
            </div>
          </div>

          {/* Author Filter */}
          <div>
            <label className="text-xs font-medium text-[#8B8B8B] mb-2 block">Author</label>
            <div className="flex flex-wrap gap-2">
              {filters.author.map((author) => (
                <button
                  key={author.id}
                  onClick={() => setSelectedAuthor(author.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedAuthor === author.id
                      ? 'bg-[#4A8B8B] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B] border border-[#E0E0E0]'
                  }`}
                >
                  {author.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sort & Results Header */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-[#2C2C2C]">
              {sortedPlans.length} Plans Found
            </span>
            {searchQuery && (
              <p className="text-xs text-[#8B8B8B] mt-1">
                Results for "{searchQuery}"
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#8B8B8B]">Sort:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-[#4A8B8B] border-none bg-transparent font-medium"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Shortest First</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {sortedPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm overflow-hidden relative">
              {plan.featured && (
                <div className="absolute top-2 right-2 bg-[#D4A574] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Award className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}
              {plan.trending && (
                <div className="absolute top-2 left-2 bg-[#E6B85C] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Trending</span>
                </div>
              )}
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: plan.color }}
                      ></div>
                      <span className="text-xs text-[#8B8B8B]">{getAuthorName(plan.author)}</span>
                      <div 
                        className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getDifficultyColor(plan.difficulty) }}
                      >
                        {plan.difficulty}
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#2C2C2C] text-base mb-1">{plan.title}</h3>
                    <p className="text-sm text-[#8B8B8B] mb-2">{plan.description}</p>
                    
                    {/* Personalized Recommendation */}
                    <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] bg-opacity-5 rounded-lg p-3 mb-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Zap className="w-3 h-3 text-[#4A8B8B]" />
                        <span className="text-xs font-medium text-[#2C2C2C]">Why This Plan</span>
                      </div>
                      <p className="text-xs text-[#8B8B8B]">{plan.personalizedReason}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {plan.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-[#F8F6F3] text-[#8B8B8B] rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="bg-[#F8F6F3] rounded-lg p-2">
                        <div className="flex items-center space-x-1 mb-1">
                          <Target className="w-3 h-3 text-[#6B8E23]" />
                          <span className="text-xs font-medium text-[#2C2C2C]">Completion Rate</span>
                        </div>
                        <span className="text-sm font-bold text-[#6B8E23]">{plan.completionRate}%</span>
                      </div>
                      <div className="bg-[#F8F6F3] rounded-lg p-2">
                        <div className="flex items-center space-x-1 mb-1">
                          <Clock className="w-3 h-3 text-[#5B8FA8]" />
                          <span className="text-xs font-medium text-[#2C2C2C]">Daily Time</span>
                        </div>
                        <span className="text-sm font-bold text-[#5B8FA8]">{plan.avgTimePerDay}</span>
                      </div>
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

export default BiblePlanDiscovery3;