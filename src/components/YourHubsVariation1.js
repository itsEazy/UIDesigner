import React from 'react';
import { Search, Plus, Users, Star, MapPin, Clock, Filter, ChevronRight } from 'lucide-react';

const YourHubsVariation1 = () => {
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

      {/* Your Hubs Section */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[#2C2C2C] text-base font-semibold">Your Communities</h2>
          <span className="text-[#8B8B8B] text-sm">5 joined</span>
        </div>
        
        {/* Hub List - Horizontal Cards */}
        <div className="space-y-3">
          {/* Hub 1 - Grace Community Church */}
          <div className="flex items-center bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8B7D8B] to-[#B85C7A] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2C2C2C] text-sm">Grace Community Church</h3>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">1.2k members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
                  <span className="text-xs text-[#6B8E23]">Active</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
          </div>

          {/* Hub 2 - Moms Prayer Circle */}
          <div className="flex items-center bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">MP</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2C2C2C] text-sm">Moms Prayer Circle</h3>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">147 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
                  <span className="text-xs text-[#6B8E23]">Active</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
          </div>

          {/* Hub 3 - Young Adults Bible Study */}
          <div className="flex items-center bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4A8B8B] to-[#6B8E23] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">YA</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2C2C2C] text-sm">Young Adults Bible Study</h3>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">89 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">Thu 7 PM</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
          </div>

          {/* Hub 4 - Worship Team */}
          <div className="flex items-center bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B85C7A] to-[#8B7D8B] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">WT</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2C2C2C] text-sm">Worship Team</h3>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">56 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-[#E6B85C]" />
                  <span className="text-xs text-[#E6B85C]">Featured</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
          </div>

          {/* Hub 5 - Marriage Ministry */}
          <div className="flex items-center bg-[#F8F6F3] rounded-lg p-3 cursor-pointer hover:bg-[#F0EDE8] transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#4A5D4F] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">MM</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#2C2C2C] text-sm">Marriage Ministry</h3>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">178 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#8B8B8B]" />
                  <span className="text-xs text-[#8B8B8B]">Sat 10 AM</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#8B8B8B]" />
          </div>
        </div>
      </div>

      {/* Discover More Section */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[#2C2C2C] text-base font-semibold">Discover More</h2>
          <button className="text-[#4A5D4F] text-sm font-medium">See All</button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Suggested Hub 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-20 bg-gradient-to-br from-[#D4A574] to-[#E6B85C] flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#D4A574] font-bold text-sm">YG</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-[#2C2C2C] text-sm mb-1">High School Youth</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">234 members</span>
              </div>
              <button className="w-full bg-[#4A5D4F] text-white py-1.5 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          </div>

          {/* Suggested Hub 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-20 bg-gradient-to-br from-[#2C2C2C] to-[#4A5D4F] flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2C2C2C] font-bold text-sm">MG</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-[#2C2C2C] text-sm mb-1">Men's Fellowship</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Users className="w-3 h-3 text-[#8B8B8B]" />
                <span className="text-xs text-[#8B8B8B]">92 members</span>
              </div>
              <button className="w-full bg-[#4A5D4F] text-white py-1.5 rounded-lg text-xs font-medium">
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

export default YourHubsVariation1;