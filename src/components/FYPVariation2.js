import React from 'react';
import { Heart, MessageCircle, Share2, Hand, Flame, Filter, Search, Plus } from 'lucide-react';

const FYPVariation2 = () => {
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

      {/* Header with Search */}
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-xl font-bold">Community Feed</h1>
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#8B8B8B]" />
          <input 
            type="text" 
            placeholder="Search posts, prayers, testimonies..."
            className="flex-1 text-sm bg-transparent outline-none text-[#2C2C2C]"
          />
        </div>
      </div>

      {/* Filter Pills */}
      <div className="px-4 py-3 bg-white border-b border-[#E0E0E0]">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <div className="bg-[#4A5D4F] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            All Posts
          </div>
          <div className="bg-[#F8F6F3] text-[#5B8FA8] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Prayer Requests
          </div>
          <div className="bg-[#F8F6F3] text-[#D4A574] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Testimonies
          </div>
          <div className="bg-[#F8F6F3] text-[#6B8E23] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            Goals
          </div>
        </div>
      </div>

      {/* Compact Feed */}
      <div className="flex-1 overflow-hidden">
        {/* Post 1 - Compact Prayer */}
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#5B8FA8] rounded-full flex items-center justify-center flex-shrink-0">
              <Hand className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Sarah Johnson</p>
                <span className="text-xs text-[#8B8B8B]">2h</span>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-2 line-clamp-2">
                Please pray for my grandmother who is going through surgery tomorrow. She's been such a pillar of faith for our family 🙏
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#5B8FA8]">
                    <Hand className="w-3 h-3" />
                    <span className="text-xs">Pray</span>
                  </button>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">24</span>
                  </button>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">12</span>
                  </button>
                </div>
                <Share2 className="w-3 h-3 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Post 2 - Compact Testimony */}
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-xs">MR</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Michael Rodriguez</p>
                <span className="text-xs text-[#8B8B8B]">4h</span>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-2">
                God is so good! Just got the job I've been praying for! His timing is perfect. ✨
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#E6B85C]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">Amen</span>
                  </button>
                  <span className="text-xs text-[#8B8B8B]">48</span>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">18</span>
                  </button>
                </div>
                <Share2 className="w-3 h-3 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Post 3 - Compact Goal Update */}
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center flex-shrink-0">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Anna Liu</p>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-[#6B8E23] font-medium">Day 15</span>
                  <span className="text-xs text-[#8B8B8B]">6h</span>
                </div>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-2">
                Daily Bible reading streak continues! Today's verse really spoke to me: "Be still and know that I am God"
              </p>
              <div className="bg-[#F8F6F3] rounded-md p-2 mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#6B8E23] font-medium">Bible Reading</span>
                  <span className="text-xs text-[#8B8B8B]">15/30</span>
                </div>
                <div className="w-full bg-[#E0E0E0] rounded-full h-1">
                  <div className="bg-[#6B8E23] h-1 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#8B7D8B]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">Encourage</span>
                  </button>
                  <span className="text-xs text-[#8B8B8B]">32</span>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">8</span>
                  </button>
                </div>
                <Share2 className="w-3 h-3 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Post 4 - Another Compact Entry */}
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#8B7D8B] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-xs">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#2C2C2C] text-sm">John Davis</p>
                <span className="text-xs text-[#8B8B8B]">8h</span>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-2">
                Had an amazing time at youth group tonight! God is moving in the hearts of our young people 🔥
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#E6B85C]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">Amen</span>
                  </button>
                  <span className="text-xs text-[#8B8B8B]">15</span>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">6</span>
                  </button>
                </div>
                <Share2 className="w-3 h-3 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Post 5 */}
        <div className="bg-white border-b border-[#E0E0E0] px-4 py-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#B85C7A] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-xs">EK</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Emily Kim</p>
                <span className="text-xs text-[#8B8B8B]">12h</span>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-2">
                Starting a new devotional plan this week. Anyone want to join me? Let's grow together! 📖
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#4A8B8B]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">Join</span>
                  </button>
                  <span className="text-xs text-[#8B8B8B]">22</span>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">14</span>
                  </button>
                </div>
                <Share2 className="w-3 h-3 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-white border-t border-[#E0E0E0] flex items-center justify-around px-4">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#4A5D4F] rounded"></div>
          <span className="text-xs text-[#4A5D4F] font-medium">Feed</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Hubs</span>
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

export default FYPVariation2;