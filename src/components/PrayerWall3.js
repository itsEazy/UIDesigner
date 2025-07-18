import React, { useState, useEffect } from 'react';
import { Plus, Filter, MapPin, Clock, Heart, Users, Bell, Zap, Eye, MessageCircle, Send, X, Circle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

const PrayerWall3 = () => {
  const [selectedView, setSelectedView] = useState('live');
  const [liveMode, setLiveMode] = useState(true);
  const [showAddPrayer, setShowAddPrayer] = useState(false);
  const [newPrayerText, setNewPrayerText] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  const filterOptions = [
    { id: 'local', label: 'Local', icon: MapPin, color: '#6B8E23' },
    { id: 'urgent', label: 'Urgent', icon: AlertTriangle, color: '#D17A3A' },
    { id: 'healing', label: 'Healing', icon: Heart, color: '#5B8FA8' },
    { id: 'family', label: 'Family', icon: Users, color: '#B85C7A' },
    { id: 'recent', label: 'Recent', icon: Clock, color: '#8B7D8B' },
    { id: 'active', label: 'Active', icon: Circle, color: '#4A8B8B' }
  ];

  const prayerRequests = [
    {
      id: 1,
      text: "Please pray for my daughter Emma who's starting her first day of high school tomorrow. She's nervous about making friends.",
      author: "Jennifer M.",
      avatar: "J",
      time: "3 minutes ago",
      location: "Portland, OR",
      category: "family",
      prayerCount: 12,
      prayed: false,
      urgent: false,
      status: "active",
      realtimeUpdates: [
        { time: "2 min ago", action: "prayed", user: "Sarah K." },
        { time: "1 min ago", action: "prayed", user: "Mike R." }
      ]
    },
    {
      id: 2,
      text: "🚨 URGENT: Please pray for my neighbor's house fire. Everyone got out safely but they lost everything. Pray for provision and comfort.",
      author: "David T.",
      avatar: "D",
      time: "8 minutes ago",
      location: "Phoenix, AZ",
      category: "urgent",
      prayerCount: 47,
      prayed: false,
      urgent: true,
      status: "trending",
      realtimeUpdates: [
        { time: "5 min ago", action: "prayed", user: "Lisa H." },
        { time: "3 min ago", action: "prayed", user: "John D." },
        { time: "2 min ago", action: "prayed", user: "Mary S." },
        { time: "1 min ago", action: "prayed", user: "Tom W." }
      ]
    },
    {
      id: 3,
      text: "Praise God! My job interview went incredibly well today. I felt His presence with me. Thank you for praying! 🙏",
      author: "Marcus J.",
      avatar: "M",
      time: "15 minutes ago",
      location: "Atlanta, GA",
      category: "thanksgiving",
      prayerCount: 89,
      prayed: true,
      urgent: false,
      status: "answered",
      realtimeUpdates: [
        { time: "10 min ago", action: "celebrated", user: "Rachel K." },
        { time: "8 min ago", action: "celebrated", user: "Paul M." }
      ]
    },
    {
      id: 4,
      text: "My mom starts chemotherapy next week. Please pray for strength, minimal side effects, and healing.",
      author: "Emily R.",
      avatar: "E",
      time: "22 minutes ago",
      location: "Denver, CO",
      category: "healing",
      prayerCount: 134,
      prayed: false,
      urgent: false,
      status: "active",
      realtimeUpdates: [
        { time: "18 min ago", action: "prayed", user: "Karen P." },
        { time: "15 min ago", action: "prayed", user: "Steve L." },
        { time: "12 min ago", action: "prayed", user: "Anna M." }
      ]
    },
    {
      id: 5,
      text: "Starting a new ministry at our church to help homeless families. Pray for wisdom, resources, and open hearts in our community.",
      author: "Pastor Rick",
      avatar: "R",
      time: "1 hour ago",
      location: "Nashville, TN",
      category: "ministry",
      prayerCount: 67,
      prayed: true,
      urgent: false,
      status: "active",
      realtimeUpdates: [
        { time: "45 min ago", action: "prayed", user: "Beth J." },
        { time: "30 min ago", action: "prayed", user: "Chris T." }
      ]
    }
  ];

  // Simulate real-time updates
  useEffect(() => {
    if (liveMode) {
      const interval = setInterval(() => {
        const activities = [
          'Sarah K. just prayed for Emma\'s first day',
          'Mike R. sent encouragement to Jennifer M.',
          'Lisa H. shared a testimony',
          'John D. joined the prayer for the house fire',
          'Mary S. prayed for healing'
        ];
        
        const newActivity = {
          id: Date.now(),
          text: activities[Math.floor(Math.random() * activities.length)],
          time: 'now'
        };
        
        setRecentActivity(prev => [newActivity, ...prev.slice(0, 4)]);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [liveMode]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#4A8B8B';
      case 'trending': return '#D17A3A';
      case 'answered': return '#6B8E23';
      default: return '#8B8B8B';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return Circle;
      case 'trending': return Zap;
      case 'answered': return CheckCircle2;
      default: return Circle;
    }
  };

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
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
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-white text-xl font-semibold">Prayer Wall</h1>
              <p className="text-white text-sm opacity-80">Live community prayers</p>
            </div>
            <div className="flex items-center space-x-1">
              <Circle className={`w-2 h-2 ${liveMode ? 'text-green-400 fill-current' : 'text-gray-400'}`} />
              <span className="text-white text-xs">LIVE</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLiveMode(!liveMode)}
              className={`p-2 rounded-lg transition-colors ${
                liveMode ? 'bg-green-500 bg-opacity-20' : 'bg-white bg-opacity-20'
              }`}
            >
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setShowAddPrayer(true)}
              className="p-2 bg-white bg-opacity-20 rounded-lg"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={() => setSelectedView('live')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === 'live'
                ? 'bg-white text-[#5B8FA8]'
                : 'bg-white bg-opacity-20 text-white'
            }`}
          >
            Live Feed
          </button>
          <button
            onClick={() => setSelectedView('trending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === 'trending'
                ? 'bg-white text-[#5B8FA8]'
                : 'bg-white bg-opacity-20 text-white'
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setSelectedView('answered')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === 'answered'
                ? 'bg-white text-[#5B8FA8]'
                : 'bg-white bg-opacity-20 text-white'
            }`}
          >
            Answered
          </button>
        </div>
        
        {/* Quick Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto">
          {filterOptions.map((filter) => {
            const IconComponent = filter.icon;
            const isSelected = selectedFilters.includes(filter.id);
            return (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white text-[#5B8FA8] shadow-sm'
                    : 'bg-white bg-opacity-20 text-white'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Activity Banner */}
      {liveMode && recentActivity.length > 0 && (
        <div className="bg-[#4A8B8B] px-4 py-2 border-b border-[#5B8FA8]">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#D4A574]" />
            <span className="text-white text-sm">{recentActivity[0].text}</span>
          </div>
        </div>
      )}

      {/* Prayer Requests */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {prayerRequests.map((prayer) => {
            const StatusIcon = getStatusIcon(prayer.status);
            return (
              <div
                key={prayer.id}
                className={`bg-white rounded-xl shadow-sm border-l-4 transition-all duration-300 relative ${
                  prayer.prayed 
                    ? 'shadow-md ring-1 ring-[#5B8FA8] ring-opacity-20' 
                    : 'hover:shadow-md'
                }`}
                style={{ borderLeftColor: getStatusColor(prayer.status) }}
              >
                {prayer.urgent && (
                  <div className="absolute -top-2 -right-2 bg-[#D17A3A] text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                    URGENT
                  </div>
                )}
                
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: getStatusColor(prayer.status) }}
                      >
                        {prayer.avatar}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-[#2C2C2C]">{prayer.author}</span>
                          <div className="flex items-center space-x-1">
                            <StatusIcon 
                              className="w-3 h-3"
                              style={{ color: getStatusColor(prayer.status) }}
                            />
                            <span 
                              className="text-xs font-medium capitalize"
                              style={{ color: getStatusColor(prayer.status) }}
                            >
                              {prayer.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-[#8B8B8B]">
                          <Clock className="w-3 h-3" />
                          <span>{prayer.time}</span>
                          <MapPin className="w-3 h-3" />
                          <span>{prayer.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs text-[#8B8B8B]">
                      <Eye className="w-3 h-3" />
                      <span>{prayer.prayerCount}</span>
                    </div>
                  </div>

                  {/* Prayer Text */}
                  <p className="text-[#2C2C2C] text-sm leading-relaxed mb-4">
                    {prayer.text}
                  </p>

                  {/* Real-time Updates */}
                  {prayer.realtimeUpdates.length > 0 && (
                    <div className="bg-[#F8F6F3] rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Circle className="w-3 h-3 text-[#4A8B8B] animate-pulse" />
                        <span className="text-xs font-medium text-[#2C2C2C]">Recent Activity</span>
                      </div>
                      <div className="space-y-1">
                        {prayer.realtimeUpdates.slice(0, 3).map((update, index) => (
                          <div key={index} className="flex items-center justify-between text-xs">
                            <span className="text-[#2C2C2C]">
                              <span className="font-medium">{update.user}</span> {update.action}
                            </span>
                            <span className="text-[#8B8B8B]">{update.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          prayer.prayed
                            ? 'bg-[#5B8FA8] text-white shadow-sm'
                            : 'bg-[#F8F6F3] text-[#5B8FA8] hover:bg-[#5B8FA8] hover:text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${prayer.prayed ? 'fill-current' : ''}`} />
                        <span>{prayer.prayed ? 'Prayed' : 'Pray'}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium hover:bg-[#8B8B8B] hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>Support</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="p-2 hover:bg-[#F8F6F3] rounded-full transition-colors">
                        <Send className="w-4 h-4 text-[#8B8B8B]" />
                      </button>
                      <div className="flex items-center space-x-1 text-xs text-[#8B8B8B]">
                        <Users className="w-3 h-3" />
                        <span>{prayer.prayerCount}</span>
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
              <h3 className="text-lg font-semibold text-[#2C2C2C]">Share with Community</h3>
              <button
                onClick={() => setShowAddPrayer(false)}
                className="p-1 hover:bg-[#F8F6F3] rounded-full"
              >
                <X className="w-5 h-5 text-[#8B8B8B]" />
              </button>
            </div>
            
            <div className="bg-[#5B8FA8] bg-opacity-10 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Circle className="w-3 h-3 text-[#5B8FA8] animate-pulse" />
                <span className="text-sm font-medium text-[#2C2C2C]">Live Mode Active</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Your prayer will appear in real-time to the community</p>
            </div>
            
            <textarea
              value={newPrayerText}
              onChange={(e) => setNewPrayerText(e.target.value)}
              placeholder="Share your prayer request or praise..."
              className="w-full h-32 p-3 border border-[#E0E0E0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5B8FA8] focus:border-transparent text-sm mb-4"
              maxLength={300}
            />
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8B8B8B]">
                {newPrayerText.length}/300
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
                  className="px-4 py-2 bg-[#5B8FA8] text-white rounded-lg text-sm font-medium flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Share Live</span>
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

export default PrayerWall3;