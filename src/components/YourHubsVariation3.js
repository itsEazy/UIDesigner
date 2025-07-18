import React from 'react';
import { Search, Plus, Users, Star, MapPin, Clock, Filter, Calendar, TrendingUp } from 'lucide-react';

const YourHubsVariation3 = () => {
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

      {/* Stats Banner */}
      <div className="px-4 py-3 bg-gradient-to-r from-[#4A5D4F] to-[#6B8E23]">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-white text-lg font-bold">5</div>
            <div className="text-white text-xs opacity-80">Hubs Joined</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">127</div>
            <div className="text-white text-xs opacity-80">Total Posts</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">43</div>
            <div className="text-white text-xs opacity-80">This Week</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold">8</div>
            <div className="text-white text-xs opacity-80">Streak Days</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <h2 className="text-[#2C2C2C] text-sm font-semibold mb-2">Recent Activity</h2>
        <div className="flex items-center space-x-2 overflow-x-auto">
          <div className="flex items-center space-x-2 bg-[#F8F6F3] rounded-lg px-3 py-2 whitespace-nowrap">
            <div className="w-6 h-6 bg-gradient-to-br from-[#8B7D8B] to-[#B85C7A] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">GC</span>
            </div>
            <span className="text-xs text-[#2C2C2C]">New post in Grace Community</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#F8F6F3] rounded-lg px-3 py-2 whitespace-nowrap">
            <div className="w-6 h-6 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MP</span>
            </div>
            <span className="text-xs text-[#2C2C2C]">Prayer request added</span>
          </div>
        </div>
      </div>

      {/* Your Hubs List */}
      <div className="flex-1 overflow-y-auto">
        {/* Primary Hub */}
        <div className="px-4 py-3 bg-gradient-to-r from-[#8B7D8B] to-[#B85C7A] border-b border-[#E0E0E0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#8B7D8B] font-bold text-lg">GC</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Grace Community Church</h3>
                <div className="flex items-center space-x-3 mt-1">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-white opacity-80" />
                    <span className="text-xs text-white opacity-80">1.2k members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3 text-[#6B8E23]" />
                    <span className="text-xs text-[#6B8E23]">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-xs font-medium">PRIMARY HUB</div>
              <div className="text-white text-xs opacity-80">23 new posts</div>
            </div>
          </div>
        </div>

        {/* Other Hubs */}
        <div className="px-4 py-2">
          <div className="space-y-3">
            {/* Hub 2 */}
            <div className="flex items-center justify-between py-3 border-b border-[#F0EDE8]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MP</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] text-sm">Moms Prayer Circle</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">147 members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">Daily 6 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-6 h-6 bg-[#D17A3A] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
              </div>
            </div>

            {/* Hub 3 */}
            <div className="flex items-center justify-between py-3 border-b border-[#F0EDE8]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A8B8B] to-[#6B8E23] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YA</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] text-sm">Young Adults Bible Study</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">89 members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">Thu 7 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-6 h-6 bg-[#D17A3A] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
            </div>

            {/* Hub 4 */}
            <div className="flex items-center justify-between py-3 border-b border-[#F0EDE8]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B85C7A] to-[#8B7D8B] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WT</span>
                </div>
                <div>
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
              </div>
              <div className="text-right">
                <div className="w-6 h-6 bg-[#8B8B8B] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">0</span>
                </div>
              </div>
            </div>

            {/* Hub 5 */}
            <div className="flex items-center justify-between py-3 border-b border-[#F0EDE8]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#4A5D4F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MM</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] text-sm">Marriage Ministry</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">178 members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#8B8B8B]" />
                      <span className="text-xs text-[#8B8B8B]">Sat 10 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="w-6 h-6 bg-[#D17A3A] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-4 bg-[#F8F6F3] border-t border-[#E0E0E0]">
          <div className="flex items-center justify-between">
            <button className="flex-1 bg-[#4A5D4F] text-white py-3 rounded-lg text-sm font-medium mr-2">
              Create New Post
            </button>
            <button className="flex-1 bg-white border border-[#4A5D4F] text-[#4A5D4F] py-3 rounded-lg text-sm font-medium ml-2">
              Browse More Hubs
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

export default YourHubsVariation3;