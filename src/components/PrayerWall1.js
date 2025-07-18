import React, { useState } from 'react';
import { Plus, Filter, MapPin, Clock, Heart, Users, ChevronDown, Search, Send, X } from 'lucide-react';

const PrayerWall1 = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddPrayer, setShowAddPrayer] = useState(false);
  const [newPrayerText, setNewPrayerText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filters = {
    location: [
      { id: 'all', name: 'All Locations', icon: MapPin },
      { id: 'local', name: 'Local Area', icon: MapPin },
      { id: 'city', name: 'My City', icon: MapPin },
      { id: 'global', name: 'Global', icon: MapPin }
    ],
    type: [
      { id: 'all', name: 'All Types', icon: Heart },
      { id: 'healing', name: 'Healing', icon: Heart },
      { id: 'guidance', name: 'Guidance', icon: Heart },
      { id: 'thanksgiving', name: 'Thanksgiving', icon: Heart },
      { id: 'family', name: 'Family', icon: Heart },
      { id: 'work', name: 'Work/Career', icon: Heart },
      { id: 'urgent', name: 'Urgent', icon: Heart }
    ]
  };

  const prayerRequests = [
    {
      id: 1,
      text: "Please pray for my mom's surgery tomorrow. She's nervous and so am I.",
      author: "Sarah K.",
      time: "2 hours ago",
      location: "Seattle, WA",
      type: "healing",
      prayerCount: 47,
      prayed: false,
      color: '#5B8FA8',
      urgent: false,
      rotation: -2
    },
    {
      id: 2,
      text: "Grateful for God's provision! Got the job I interviewed for last week. Thank you for your prayers! 🙏",
      author: "Michael J.",
      time: "4 hours ago",
      location: "Dallas, TX",
      type: "thanksgiving",
      prayerCount: 89,
      prayed: true,
      color: '#D4A574',
      urgent: false,
      rotation: 1
    },
    {
      id: 3,
      text: "Please pray for wisdom as I make a big decision about moving across the country.",
      author: "Rachel M.",
      time: "6 hours ago",
      location: "Phoenix, AZ",
      type: "guidance",
      prayerCount: 23,
      prayed: false,
      color: '#8B7D8B',
      urgent: false,
      rotation: 3
    },
    {
      id: 4,
      text: "My marriage is struggling. Please pray for healing and restoration.",
      author: "Anonymous",
      time: "8 hours ago",
      location: "Private",
      type: "family",
      prayerCount: 156,
      prayed: true,
      color: '#B85C7A',
      urgent: false,
      rotation: -1
    },
    {
      id: 5,
      text: "URGENT: Please pray for my friend John who was in a car accident. He's in ICU.",
      author: "David L.",
      time: "1 hour ago",
      location: "Miami, FL",
      type: "urgent",
      prayerCount: 203,
      prayed: false,
      color: '#D17A3A',
      urgent: true,
      rotation: 2
    },
    {
      id: 6,
      text: "Starting a new business. Pray for God's blessing and guidance in this venture.",
      author: "Lisa H.",
      time: "12 hours ago",
      location: "Austin, TX",
      type: "work",
      prayerCount: 34,
      prayed: true,
      color: '#6B8E23',
      urgent: false,
      rotation: -3
    },
    {
      id: 7,
      text: "Please pray for my teenage daughter. She's going through a difficult time.",
      author: "Karen P.",
      time: "3 hours ago",
      location: "Denver, CO",
      type: "family",
      prayerCount: 78,
      prayed: false,
      color: '#B85C7A',
      urgent: false,
      rotation: 1
    },
    {
      id: 8,
      text: "Praise God! My father's cancer is in remission. Thank you all for your faithful prayers!",
      author: "James R.",
      time: "5 hours ago",
      location: "Nashville, TN",
      type: "thanksgiving",
      prayerCount: 245,
      prayed: true,
      color: '#D4A574',
      urgent: false,
      rotation: -1
    }
  ];

  const filteredPrayers = prayerRequests.filter(prayer => {
    const locationMatch = selectedLocation === 'all' || prayer.location.toLowerCase().includes(selectedLocation);
    const typeMatch = selectedType === 'all' || prayer.type === selectedType;
    const quickFilterMatch = selectedFilter === 'all' || 
                           (selectedFilter === 'urgent' && prayer.urgent) ||
                           (selectedFilter === 'recent' && prayer.time.includes('hour')) ||
                           (selectedFilter === 'prayed' && prayer.prayed) ||
                           (selectedFilter === 'unprayed' && !prayer.prayed);
    
    return locationMatch && typeMatch && quickFilterMatch;
  });

  const handlePrayForRequest = (prayerId) => {
    // Toggle prayer state and update count
    // In real app, this would update the backend
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
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-white text-xl font-semibold">Prayer Wall</h1>
            <p className="text-white text-sm opacity-80">Share burdens, celebrate victories</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 bg-white bg-opacity-20 rounded-lg"
            >
              <Filter className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setShowAddPrayer(true)}
              className="p-2 bg-white bg-opacity-20 rounded-lg"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Quick Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto">
          {['all', 'urgent', 'recent', 'prayed', 'unprayed'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-white text-[#5B8FA8]'
                  : 'bg-white bg-opacity-20 text-white'
              }`}
            >
              {filter === 'all' ? 'All' : 
               filter === 'urgent' ? 'Urgent' :
               filter === 'recent' ? 'Recent' :
               filter === 'prayed' ? 'Prayed For' : 'Need Prayer'}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-4">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#2C2C2C] mb-2">Location</h3>
            <div className="flex flex-wrap gap-2">
              {filters.location.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                    selectedLocation === location.id
                      ? 'bg-[#5B8FA8] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B]'
                  }`}
                >
                  <location.icon className="w-3 h-3" />
                  <span>{location.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#2C2C2C] mb-2">Prayer Type</h3>
            <div className="flex flex-wrap gap-2">
              {filters.type.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
                    selectedType === type.id
                      ? 'bg-[#5B8FA8] text-white'
                      : 'bg-[#F8F6F3] text-[#8B8B8B]'
                  }`}
                >
                  <type.icon className="w-3 h-3" />
                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Prayer Wall - Brick Pattern Background */}
      <div className="flex-1 overflow-y-auto relative">
        {/* Subtle brick pattern background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(90deg, #8B8B8B 1px, transparent 1px),
            linear-gradient(180deg, #8B8B8B 1px, transparent 1px)
          `,
          backgroundSize: '20px 15px'
        }}></div>
        
        {/* Prayer Request Notes */}
        <div className="relative p-4">
          <div className="columns-2 gap-4 space-y-4">
            {filteredPrayers.map((prayer) => (
              <div
                key={prayer.id}
                className={`relative inline-block w-full break-inside-avoid mb-4 p-3 rounded-lg shadow-md transition-all duration-300 ${
                  prayer.prayed 
                    ? 'shadow-lg ring-2 ring-[#5B8FA8] ring-opacity-30' 
                    : 'hover:shadow-lg'
                }`}
                style={{
                  backgroundColor: prayer.prayed ? `${prayer.color}10` : '#FFFFFF',
                  transform: `rotate(${prayer.rotation}deg)`,
                  borderLeft: `4px solid ${prayer.color}`
                }}
              >
                {prayer.urgent && (
                  <div className="absolute -top-2 -right-2 bg-[#D17A3A] text-white text-xs px-2 py-1 rounded-full font-medium">
                    URGENT
                  </div>
                )}
                
                <div className="mb-3">
                  <p className="text-sm text-[#2C2C2C] leading-relaxed mb-2">
                    {prayer.text}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#8B8B8B] mb-2">
                    <span className="font-medium">{prayer.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{prayer.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-[#8B8B8B] mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{prayer.location}</span>
                    </div>
                    <span className="capitalize bg-[#F8F6F3] px-2 py-1 rounded-full">
                      {prayer.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-[#8B8B8B]">
                    <Users className="w-3 h-3" />
                    <span>{prayer.prayerCount} prayers</span>
                  </div>
                  
                  <button
                    onClick={() => handlePrayForRequest(prayer.id)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      prayer.prayed
                        ? 'bg-[#5B8FA8] text-white'
                        : 'bg-[#F8F6F3] text-[#5B8FA8] hover:bg-[#5B8FA8] hover:text-white'
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${prayer.prayed ? 'fill-current' : ''}`} />
                    <span>{prayer.prayed ? 'Prayed' : 'Pray'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Prayer Modal */}
      {showAddPrayer && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2C2C2C]">Add Prayer Request</h3>
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
              placeholder="Share your prayer request with the community..."
              className="w-full h-32 p-3 border border-[#E0E0E0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5B8FA8] focus:border-transparent text-sm"
              maxLength={280}
            />
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-[#8B8B8B]">
                {newPrayerText.length}/280
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
                  <Send className="w-4 h-4" />
                  <span>Share</span>
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

export default PrayerWall1;