import React, { useState } from 'react';
import { Plus, Filter, MapPin, Clock, Heart, Users, Search, Send, X, ChevronDown, MessageCircle, Share2, AlertCircle, CheckCircle } from 'lucide-react';

const PrayerWall2 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddPrayer, setShowAddPrayer] = useState(false);
  const [newPrayerText, setNewPrayerText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isPrivate, setIsPrivate] = useState(false);

  const categories = [
    { id: 'general', name: 'General', color: '#5B8FA8', icon: '🙏' },
    { id: 'healing', name: 'Healing', color: '#6B8E23', icon: '💚' },
    { id: 'family', name: 'Family', color: '#B85C7A', icon: '👨‍👩‍👧‍👦' },
    { id: 'work', name: 'Work', color: '#8B7D8B', icon: '💼' },
    { id: 'guidance', name: 'Guidance', color: '#4A8B8B', icon: '🧭' },
    { id: 'thanksgiving', name: 'Thanksgiving', color: '#D4A574', icon: '🌟' },
    { id: 'urgent', name: 'Urgent', color: '#D17A3A', icon: '🚨' }
  ];

  const prayerRequests = [
    {
      id: 1,
      text: "Please pray for my mom's surgery tomorrow. She's been dealing with this health issue for months and we're all nervous about the procedure.",
      author: "Sarah K.",
      avatar: "S",
      time: "2 hours ago",
      location: "Seattle, WA",
      category: "healing",
      prayerCount: 47,
      commentCount: 12,
      prayed: false,
      urgent: false,
      private: false,
      testimonies: []
    },
    {
      id: 2,
      text: "PRAISE REPORT! 🙌 Got the job I've been praying about for weeks. God is so good! Thank you all for your faithful prayers.",
      author: "Michael J.",
      avatar: "M",
      time: "4 hours ago",
      location: "Dallas, TX",
      category: "thanksgiving",
      prayerCount: 89,
      commentCount: 24,
      prayed: true,
      urgent: false,
      private: false,
      testimonies: [
        { author: "Lisa M.", text: "So happy for you! God's timing is perfect!" },
        { author: "David R.", text: "Praise God! He always provides." }
      ]
    },
    {
      id: 3,
      text: "Struggling with a big decision about whether to move across the country for a new opportunity. Please pray for wisdom and clear direction.",
      author: "Rachel M.",
      avatar: "R",
      time: "6 hours ago",
      location: "Phoenix, AZ",
      category: "guidance",
      prayerCount: 23,
      commentCount: 8,
      prayed: false,
      urgent: false,
      private: false,
      testimonies: []
    },
    {
      id: 4,
      text: "Going through a difficult season in my marriage. Please pray for healing, forgiveness, and restoration. We both want to make this work.",
      author: "Anonymous",
      avatar: "A",
      time: "8 hours ago",
      location: "Private",
      category: "family",
      prayerCount: 156,
      commentCount: 31,
      prayed: true,
      urgent: false,
      private: true,
      testimonies: []
    },
    {
      id: 5,
      text: "🚨 URGENT: My friend John was in a serious car accident and is in the ICU. Please pray for his recovery and for his family during this scary time.",
      author: "David L.",
      avatar: "D",
      time: "1 hour ago",
      location: "Miami, FL",
      category: "urgent",
      prayerCount: 203,
      commentCount: 45,
      prayed: false,
      urgent: true,
      private: false,
      testimonies: []
    },
    {
      id: 6,
      text: "Starting a new business venture next month. Pray for God's blessing, wisdom in decisions, and favor with potential clients.",
      author: "Lisa H.",
      avatar: "L",
      time: "12 hours ago",
      location: "Austin, TX",
      category: "work",
      prayerCount: 34,
      commentCount: 7,
      prayed: true,
      urgent: false,
      private: false,
      testimonies: []
    }
  ];

  const filteredPrayers = prayerRequests.filter(prayer => {
    const searchMatch = searchQuery === '' || 
      prayer.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prayer.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const tabMatch = activeTab === 'all' || 
                    (activeTab === 'urgent' && prayer.urgent) ||
                    (activeTab === 'recent' && prayer.time.includes('hour')) ||
                    (activeTab === 'prayed' && prayer.prayed) ||
                    (activeTab === 'testimonies' && prayer.testimonies.length > 0);
    
    return searchMatch && tabMatch;
  });

  const getCategoryData = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const handleAddPrayer = () => {
    if (newPrayerText.trim()) {
      // Add new prayer request
      setNewPrayerText('');
      setShowAddPrayer(false);
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
      <div className="mt-[44px] bg-[#5B8FA8] px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-xl font-semibold">Prayer Wall</h1>
            <p className="text-white text-sm opacity-80">Community prayer requests</p>
          </div>
          <button
            onClick={() => setShowAddPrayer(true)}
            className="bg-white bg-opacity-20 p-2 rounded-lg"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 w-4 h-4 text-white opacity-60" />
          <input
            type="text"
            placeholder="Search prayers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 border-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
          />
        </div>
        
        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {['all', 'urgent', 'recent', 'prayed', 'testimonies'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-white text-[#5B8FA8]'
                  : 'bg-white bg-opacity-20 text-white'
              }`}
            >
              {tab === 'all' ? 'All' : 
               tab === 'urgent' ? 'Urgent' :
               tab === 'recent' ? 'Recent' :
               tab === 'prayed' ? 'Prayed' : 'Testimonies'}
            </button>
          ))}
        </div>
      </div>

      {/* Prayer Cards */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {filteredPrayers.map((prayer) => {
            const categoryData = getCategoryData(prayer.category);
            return (
              <div
                key={prayer.id}
                className={`bg-white rounded-xl shadow-sm border-l-4 transition-all duration-300 ${
                  prayer.prayed 
                    ? 'shadow-md ring-1 ring-[#5B8FA8] ring-opacity-20' 
                    : 'hover:shadow-md'
                }`}
                style={{ borderLeftColor: categoryData.color }}
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: categoryData.color }}
                      >
                        {prayer.avatar}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-[#2C2C2C]">{prayer.author}</span>
                          {prayer.private && (
                            <span className="text-xs bg-[#8B8B8B] text-white px-2 py-1 rounded-full">
                              Private
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-[#8B8B8B]">
                          <Clock className="w-3 h-3" />
                          <span>{prayer.time}</span>
                          <MapPin className="w-3 h-3" />
                          <span>{prayer.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {prayer.urgent && (
                      <div className="flex items-center space-x-1 bg-[#D17A3A] text-white px-2 py-1 rounded-full text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>URGENT</span>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div 
                    className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                    style={{ backgroundColor: categoryData.color }}
                  >
                    <span>{categoryData.icon}</span>
                    <span>{categoryData.name}</span>
                  </div>

                  {/* Prayer Text */}
                  <p className="text-[#2C2C2C] text-sm leading-relaxed mb-4">
                    {prayer.text}
                  </p>

                  {/* Testimonies */}
                  {prayer.testimonies.length > 0 && (
                    <div className="bg-[#D4A574] bg-opacity-10 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-[#D4A574]" />
                        <span className="text-sm font-medium text-[#2C2C2C]">Testimonies</span>
                      </div>
                      {prayer.testimonies.map((testimony, index) => (
                        <div key={index} className="text-sm text-[#2C2C2C] mb-1">
                          <span className="font-medium">{testimony.author}:</span> {testimony.text}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          prayer.prayed
                            ? 'bg-[#5B8FA8] text-white'
                            : 'bg-[#F8F6F3] text-[#5B8FA8] hover:bg-[#5B8FA8] hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${prayer.prayed ? 'fill-current' : ''}`} />
                        <span>{prayer.prayed ? 'Prayed' : 'Pray'}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium hover:bg-[#8B8B8B] hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>Comment</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-[#8B8B8B]">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{prayer.prayerCount}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{prayer.commentCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Prayer Modal */}
      {showAddPrayer && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2C2C2C]">Share Prayer Request</h3>
              <button
                onClick={() => setShowAddPrayer(false)}
                className="p-1 hover:bg-[#F8F6F3] rounded-full"
              >
                <X className="w-5 h-5 text-[#8B8B8B]" />
              </button>
            </div>
            
            <textarea
              value={newPrayerText}
              onChange={(e) => setNewPrayerText(e.target.value)}
              placeholder="What can we pray for?"
              className="w-full h-32 p-3 border border-[#E0E0E0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5B8FA8] focus:border-transparent text-sm mb-4"
              maxLength={500}
            />
            
            {/* Category Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#2C2C2C] mb-2">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-2 rounded-lg text-xs font-medium flex flex-col items-center space-y-1 ${
                      selectedCategory === category.id
                        ? 'text-white'
                        : 'bg-[#F8F6F3] text-[#8B8B8B]'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id ? category.color : undefined
                    }}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Privacy Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#2C2C2C]">Post anonymously</span>
              <button
                onClick={() => setIsPrivate(!isPrivate)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  isPrivate ? 'bg-[#5B8FA8]' : 'bg-[#E0E0E0]'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    isPrivate ? 'transform translate-x-7' : 'transform translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8B8B8B]">
                {newPrayerText.length}/500
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowAddPrayer(false)}
                  className="px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPrayer}
                  className="px-4 py-2 bg-[#5B8FA8] text-white rounded-lg text-sm font-medium"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
          <div className="w-6 h-6 bg-[#5B8FA8] rounded"></div>
          <span className="text-xs text-[#5B8FA8] font-medium">Prayer</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default PrayerWall2;