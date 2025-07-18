import React from 'react';
import { Search, Plus, Users, Star, MapPin, Clock, Filter, Bell, MessageCircle } from 'lucide-react';

const YourHubsVariation2 = () => {
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
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-xl font-bold">Your Hubs</h1>
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#8B8B8B]" />
          <input 
            type="text" 
            placeholder="Search your hubs..."
            className="flex-1 text-sm bg-transparent outline-none text-[#2C2C2C]"
          />
        </div>
      </div>

      {/* Quick Access Tabs */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <div className="bg-[#4A5D4F] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            All (5)
          </div>
          <div className="bg-[#F8F6F3] text-[#8B7D8B] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Churches (1)
          </div>
          <div className="bg-[#F8F6F3] text-[#5B8FA8] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Prayer (1)
          </div>
          <div className="bg-[#F8F6F3] text-[#4A8B8B] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Study (1)
          </div>
        </div>
      </div>

      {/* Your Hubs Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Hub 1 - Grace Community Church */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-[#4A5D4F]">
            <div className="h-24 bg-gradient-to-br from-[#8B7D8B] to-[#B85C7A] flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#8B7D8B] font-bold text-lg">GC</span>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Grace Community Church</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">1.2k members</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Bell className="w-3 h-3 text-[#D17A3A]" />
                  <span className="text-xs text-[#D17A3A]">3 updates</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-[#5B8FA8]" />
                  <span className="text-xs text-[#5B8FA8]">12</span>
                </div>
              </div>
              <button className="w-full bg-[#4A5D4F] text-white py-2 rounded-lg text-xs font-medium">
                Enter Hub
              </button>
            </div>
          </div>

          {/* Hub 2 - Moms Prayer Circle */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-[#5B8FA8]">
            <div className="h-24 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#5B8FA8] font-bold text-lg">MP</span>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Moms Prayer Circle</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">147 members</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">Daily 6 PM</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-[#5B8FA8]" />
                  <span className="text-xs text-[#5B8FA8]">24</span>
                </div>
              </div>
              <button className="w-full bg-[#5B8FA8] text-white py-2 rounded-lg text-xs font-medium">
                Enter Hub
              </button>
            </div>
          </div>

          {/* Hub 3 - Young Adults Bible Study */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-[#4A8B8B]">
            <div className="h-24 bg-gradient-to-br from-[#4A8B8B] to-[#6B8E23] flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#4A8B8B] font-bold text-lg">YA</span>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#E6B85C] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Young Adults Bible Study</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">89 members</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">Thu 7 PM</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-[#5B8FA8]" />
                  <span className="text-xs text-[#5B8FA8]">8</span>
                </div>
              </div>
              <button className="w-full bg-[#4A8B8B] text-white py-2 rounded-lg text-xs font-medium">
                Enter Hub
              </button>
            </div>
          </div>

          {/* Hub 4 - Worship Team */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-[#B85C7A]">
            <div className="h-24 bg-gradient-to-br from-[#B85C7A] to-[#8B7D8B] flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#B85C7A] font-bold text-lg">WT</span>
              </div>
              <div className="absolute top-2 right-2">
                <Star className="w-5 h-5 text-[#E6B85C]" />
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Worship Team</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">56 members</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-xs text-[#E6B85C]">Featured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-[#5B8FA8]" />
                  <span className="text-xs text-[#5B8FA8]">5</span>
                </div>
              </div>
              <button className="w-full bg-[#B85C7A] text-white py-2 rounded-lg text-xs font-medium">
                Enter Hub
              </button>
            </div>
          </div>

          {/* Hub 5 - Marriage Ministry */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-[#6B8E23]">
            <div className="h-24 bg-gradient-to-br from-[#6B8E23] to-[#4A5D4F] flex items-center justify-center relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#6B8E23] font-bold text-lg">MM</span>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#8B8B8B] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Marriage Ministry</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">178 members</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">Sat 10 AM</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-[#5B8FA8]" />
                  <span className="text-xs text-[#5B8FA8]">15</span>
                </div>
              </div>
              <button className="w-full bg-[#6B8E23] text-white py-2 rounded-lg text-xs font-medium">
                Enter Hub
              </button>
            </div>
          </div>

          {/* Add New Hub Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-dashed border-[#8B8B8B]">
            <div className="h-24 bg-[#F8F6F3] flex items-center justify-center">
              <Plus className="w-8 h-8 text-[#8B8B8B]" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1 text-center">Join New Hub</h3>
              <p className="text-xs text-[#8B8B8B] text-center mb-3">Discover communities that match your interests</p>
              <button className="w-full bg-[#4A5D4F] text-white py-2 rounded-lg text-xs font-medium">
                Browse Hubs
              </button>
            </div>
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
          <div className="w-6 h-6 bg-[#4A5D4F] rounded"></div>
          <span className="text-xs text-[#4A5D4F] font-medium">Hubs</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Grow</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default YourHubsVariation2;