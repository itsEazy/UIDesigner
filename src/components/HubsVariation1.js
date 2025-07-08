import React from 'react';
import { Search, Plus, Users, Star, MapPin, Clock, Filter } from 'lucide-react';

const HubsVariation1 = () => {
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
          <h1 className="text-white text-xl font-bold">Discover Hubs</h1>
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#8B8B8B]" />
          <input 
            type="text" 
            placeholder="Search communities..."
            className="flex-1 text-sm bg-transparent outline-none text-[#2C2C2C]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <div className="bg-[#4A5D4F] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            All
          </div>
          <div className="bg-[#F8F6F3] text-[#8B7D8B] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Churches
          </div>
          <div className="bg-[#F8F6F3] text-[#5B8FA8] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Prayer Groups
          </div>
          <div className="bg-[#F8F6F3] text-[#4A8B8B] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Bible Study
          </div>
          <div className="bg-[#F8F6F3] text-[#6B8E23] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Youth
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Hub 1 - Featured Church */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#8B7D8B] to-[#B85C7A] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#8B7D8B] font-bold text-lg">GC</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Grace Community Church</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">1.2k members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <MapPin className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Austin, TX</span>
              </div>
              <button className="w-full bg-[#4A5D4F] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 2 - Prayer Group */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#5B8FA8] font-bold text-lg">MP</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Moms Prayer Circle</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">147 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Daily 6 PM</span>
              </div>
              <button className="w-full bg-[#5B8FA8] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 3 - Bible Study */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#4A8B8B] to-[#6B8E23] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#4A8B8B] font-bold text-lg">YA</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Young Adults Bible Study</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">89 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Thu 7 PM</span>
              </div>
              <button className="w-full bg-[#4A8B8B] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 4 - Youth Group */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#D4A574] to-[#E6B85C] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#D4A574] font-bold text-lg">YG</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">High School Youth</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">234 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Wed 7 PM</span>
              </div>
              <button className="w-full bg-[#D4A574] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 5 - Worship Team */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#B85C7A] to-[#8B7D8B] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#B85C7A] font-bold text-lg">WT</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Worship Team</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">56 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Star className="w-3 h-3 text-[#E6B85C]" />
                <span className="text-xs text-[#8B8B8B]">Featured</span>
              </div>
              <button className="w-full bg-[#B85C7A] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 6 - Marriage Ministry */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#6B8E23] to-[#4A5D4F] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#6B8E23] font-bold text-lg">MM</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Marriage Ministry</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">178 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Sat 10 AM</span>
              </div>
              <button className="w-full bg-[#6B8E23] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 7 - Men's Group */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#2C2C2C] to-[#4A5D4F] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2C2C2C] font-bold text-lg">MG</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Men's Fellowship</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">92 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Sat 8 AM</span>
              </div>
              <button className="w-full bg-[#2C2C2C] text-white py-2 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Hub 8 - Women's Circle */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-[#E6B85C] to-[#D4A574] flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#E6B85C] font-bold text-lg">WC</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-[#2C2C2C] text-sm mb-1">Women's Circle</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">201 members</span>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                <Clock className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">Tue 10 AM</span>
              </div>
              <button className="w-full bg-[#E6B85C] text-white py-2 rounded-lg text-xs font-medium">
                Join
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

export default HubsVariation1;