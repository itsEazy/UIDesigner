import React from 'react';
import { Search, Plus, Users, Star, MapPin, Clock, Zap } from 'lucide-react';

const HubsVariation3 = () => {
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
          <h1 className="text-white text-xl font-bold">Explore Hubs</h1>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-[#8B7D8B] to-[#B85C7A] rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white font-bold text-lg">Featured Community</h2>
            <Star className="w-5 h-5 text-[#E6B85C]" />
          </div>
          <div className="flex items-center space-x-4 mb-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#8B7D8B] font-bold text-lg">GC</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Grace Community Church</h3>
              <div className="flex items-center space-x-3 text-white text-sm opacity-90">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>1,234</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Austin, TX</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white text-sm opacity-90 mb-4">
            Join our vibrant church community for worship, fellowship, and spiritual growth.
          </p>
          <button className="w-full bg-white text-[#8B7D8B] py-3 rounded-lg text-sm font-bold">
            Join Featured Hub
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-[#5B8FA8] font-bold text-lg">127</div>
            <div className="text-[#8B8B8B] text-xs">Churches</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-[#D4A574] font-bold text-lg">89</div>
            <div className="text-[#8B8B8B] text-xs">Groups</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-[#6B8E23] font-bold text-lg">45</div>
            <div className="text-[#8B8B8B] text-xs">Studies</div>
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="flex-1 overflow-y-auto">
        {/* Section Header */}
        <div className="px-4 py-3 bg-[#F8F6F3] border-y border-[#E0E0E0]">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#2C2C2C]">Trending Hubs</h3>
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-[#E6B85C]" />
              <span className="text-xs text-[#8B8B8B]">Live</span>
            </div>
          </div>
        </div>

        {/* Hub List */}
        <div className="bg-white">
          {/* Hub 1 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#5B8FA8] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">MP</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">Moms Prayer Circle</h3>
                <div className="w-2 h-2 bg-[#6B8E23] rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>147 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Active now</span>
                </div>
              </div>
            </div>
            <button className="bg-[#5B8FA8] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>

          {/* Hub 2 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#4A8B8B] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">YA</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">Young Adults Bible Study</h3>
                <div className="w-2 h-2 bg-[#E6B85C] rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>89 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Thu 7 PM</span>
                </div>
              </div>
            </div>
            <button className="bg-[#4A8B8B] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>

          {/* Hub 3 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">YG</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">High School Youth</h3>
                <div className="w-2 h-2 bg-[#B85C7A] rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>234 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Wed 7 PM</span>
                </div>
              </div>
            </div>
            <button className="bg-[#D4A574] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>

          {/* Hub 4 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#B85C7A] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">WT</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">Worship Team</h3>
                <Star className="w-3 h-3 text-[#E6B85C]" />
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>56 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Practice tonight</span>
                </div>
              </div>
            </div>
            <button className="bg-[#B85C7A] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>

          {/* Hub 5 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#6B8E23] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">MM</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">Marriage Ministry</h3>
                <div className="w-2 h-2 bg-[#4A8B8B] rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>178 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Sat 10 AM</span>
                </div>
              </div>
            </div>
            <button className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>

          {/* Hub 6 */}
          <div className="flex items-center space-x-4 p-4 border-b border-[#E0E0E0]">
            <div className="w-12 h-12 bg-[#E6B85C] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">WC</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-[#2C2C2C]">Women's Circle</h3>
                <div className="w-2 h-2 bg-[#D4A574] rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>201 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Tue 10 AM</span>
                </div>
              </div>
            </div>
            <button className="bg-[#E6B85C] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>
        </div>

        {/* Browse Categories */}
        <div className="px-4 py-4 bg-[#F8F6F3]">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">Browse Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white p-3 rounded-lg flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⛪</span>
              </div>
              <span className="text-sm font-medium text-[#2C2C2C]">All Churches</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">👥</span>
              </div>
              <span className="text-sm font-medium text-[#2C2C2C]">Small Groups</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📖</span>
              </div>
              <span className="text-sm font-medium text-[#2C2C2C]">Bible Studies</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#B85C7A] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🎵</span>
              </div>
              <span className="text-sm font-medium text-[#2C2C2C]">Worship</span>
            </button>
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

export default HubsVariation3;