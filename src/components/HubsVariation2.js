import React from 'react';
import { Search, Plus, Users, MapPin, Bookmark } from 'lucide-react';

const HubsVariation2 = () => {
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
          <h1 className="text-white text-xl font-bold">Community Hubs</h1>
          <div className="flex items-center space-x-3">
            <Bookmark className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#8B8B8B]" />
          <input 
            type="text" 
            placeholder="Find your community..."
            className="flex-1 text-sm bg-transparent outline-none text-[#2C2C2C]"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-[#E0E0E0]">
        <div className="flex">
          <div className="flex-1 bg-[#4A5D4F] text-white py-3 px-4 text-center text-sm font-medium">
            Churches
          </div>
          <div className="flex-1 bg-[#F8F6F3] text-[#8B8B8B] py-3 px-4 text-center text-sm font-medium">
            Groups
          </div>
          <div className="flex-1 bg-[#F8F6F3] text-[#8B8B8B] py-3 px-4 text-center text-sm font-medium">
            Study
          </div>
          <div className="flex-1 bg-[#F8F6F3] text-[#8B8B8B] py-3 px-4 text-center text-sm font-medium">
            Ministry
          </div>
        </div>
      </div>

      {/* Churches Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Featured Church */}
        <div className="bg-gradient-to-r from-[#8B7D8B] to-[#B85C7A] mx-4 mt-4 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#8B7D8B] font-bold text-xl">GC</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg mb-1">Grace Community Church</h3>
              <div className="flex items-center space-x-4 text-white text-sm opacity-90">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>1,234 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Austin, TX</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white text-sm mt-3 mb-4 opacity-90">
            Join our vibrant church community for worship, fellowship, and spiritual growth. Services every Sunday at 9 AM and 11 AM.
          </p>
          <button className="w-full bg-white text-[#8B7D8B] py-3 rounded-lg text-sm font-bold">
            Join Church
          </button>
        </div>

        {/* Church List */}
        <div className="px-4 mt-4">
          <div className="bg-white rounded-xl shadow-sm divide-y divide-[#E0E0E0]">
            {/* Church 1 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">FC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">First Christian Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>890 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>2.1 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#5B8FA8] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>

            {/* Church 2 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">HC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">Hope Community Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>567 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>3.5 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#D4A574] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>

            {/* Church 3 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">NC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">New Life Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>1,456 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>4.2 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>

            {/* Church 4 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#B85C7A] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">RC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">Riverside Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>723 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>5.8 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#B85C7A] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>

            {/* Church 5 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">CC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">Cornerstone Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>934 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>6.1 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#4A8B8B] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>

            {/* Church 6 */}
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-[#E6B85C] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">MC</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#2C2C2C] mb-1">Mission Church</h3>
                <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>456 members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>7.3 mi</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#E6B85C] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mt-4 mb-6">
          <div className="bg-[#F8F6F3] rounded-xl p-4">
            <h3 className="font-semibold text-[#2C2C2C] mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-white text-[#4A5D4F] py-3 rounded-lg text-sm font-medium flex items-center justify-between">
                <span>Create New Hub</span>
                <Plus className="w-4 h-4" />
              </button>
              <button className="w-full bg-white text-[#5B8FA8] py-3 rounded-lg text-sm font-medium flex items-center justify-between">
                <span>Browse by Location</span>
                <MapPin className="w-4 h-4" />
              </button>
              <button className="w-full bg-white text-[#8B7D8B] py-3 rounded-lg text-sm font-medium flex items-center justify-between">
                <span>Saved Hubs</span>
                <Bookmark className="w-4 h-4" />
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

export default HubsVariation2;