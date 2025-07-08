import React from 'react';
import { Heart, MessageCircle, Share2, Hand, Flame, BookOpen, Plus, Camera } from 'lucide-react';

const FYPVariation3 = () => {
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

      {/* Header with Stories */}
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-xl font-bold">Faith Stories</h1>
          <Camera className="w-5 h-5 text-white" />
        </div>
        
        {/* Stories Row */}
        <div className="flex items-center space-x-3 overflow-x-auto">
          {/* Your Story */}
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#E6B85C] rounded-full flex items-center justify-center border-2 border-white">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white">Your Story</span>
          </div>
          
          {/* Friend Stories */}
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white font-semibold">SJ</span>
            </div>
            <span className="text-xs text-white">Sarah</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#8B7D8B] rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white font-semibold">MR</span>
            </div>
            <span className="text-xs text-white">Michael</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B85C7A] to-[#D4A574] rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white font-semibold">AL</span>
            </div>
            <span className="text-xs text-white">Anna</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B7D8B] to-[#5B8FA8] rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white font-semibold">JD</span>
            </div>
            <span className="text-xs text-white">John</span>
          </div>
        </div>
      </div>

      {/* Daily Verse Banner */}
      <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] mx-4 mt-4 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <BookOpen className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Verse of the Day</span>
        </div>
        <p className="text-white text-sm font-serif leading-relaxed mb-2">
          "Be still and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
        </p>
        <p className="text-white text-xs opacity-80">Psalm 46:10</p>
      </div>

      {/* Feed Content */}
      <div className="flex-1 overflow-hidden mt-4">
        {/* Post 1 - Enhanced with Media */}
        <div className="bg-white mx-4 rounded-xl shadow-sm border-l-4 border-[#5B8FA8] mb-4">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Sarah Johnson</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#8B8B8B]">2 hours ago</span>
                    <span className="text-xs text-[#5B8FA8]">•</span>
                    <span className="text-xs text-[#5B8FA8]">Grace Community</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#5B8FA8] text-white px-3 py-1 rounded-full text-xs font-medium">
                Prayer Request
              </div>
            </div>
            <p className="text-[#2C2C2C] mb-4 leading-relaxed">
              Please pray for my grandmother who is going through surgery tomorrow. She's been such a pillar of faith for our family 🙏
            </p>
            
            {/* Prayer Count Visual */}
            <div className="bg-[#F8F6F3] rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Hand className="w-4 h-4 text-[#5B8FA8]" />
                  <span className="text-sm text-[#5B8FA8] font-medium">24 people are praying</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[#D4A574] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#6B8E23] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#B85C7A] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#8B7D8B] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-medium">+20</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#5B8FA8] text-white px-4 py-2 rounded-full">
                  <Hand className="w-4 h-4" />
                  <span className="text-sm font-medium">Pray</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">24</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
              </div>
              <Share2 className="w-4 h-4 text-[#8B8B8B]" />
            </div>
          </div>
        </div>

        {/* Post 2 - Testimony with Celebration */}
        <div className="bg-white mx-4 rounded-xl shadow-sm border-l-4 border-[#D4A574] mb-4">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Michael Rodriguez</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#8B8B8B]">4 hours ago</span>
                    <span className="text-xs text-[#D4A574]">•</span>
                    <span className="text-xs text-[#D4A574]">Young Professionals</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#D4A574] text-white px-3 py-1 rounded-full text-xs font-medium">
                Testimony
              </div>
            </div>
            <p className="text-[#2C2C2C] mb-4 leading-relaxed">
              God is so good! Just got the job I've been praying for! His timing is perfect. To everyone still waiting - keep trusting! ✨
            </p>
            
            {/* Celebration Reactions */}
            <div className="bg-gradient-to-r from-[#D4A574] to-[#E6B85C] rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm font-medium">🎉 Celebration Mode</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-white text-xs">48 Amens</span>
                  <span className="text-white text-xs">•</span>
                  <span className="text-white text-xs">12 Praise God</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#E6B85C] text-white px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Amen</span>
                </button>
                <button className="flex items-center space-x-2 text-[#D4A574]">
                  <span className="text-sm">🙏 Praise</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">18</span>
                </button>
              </div>
              <Share2 className="w-4 h-4 text-[#8B8B8B]" />
            </div>
          </div>
        </div>

        {/* Post 3 - Goal with Progress Visual */}
        <div className="bg-white mx-4 rounded-xl shadow-sm border-l-4 border-[#6B8E23] mb-4">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#6B8E23] rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Anna Liu</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#8B8B8B]">6 hours ago</span>
                    <span className="text-xs text-[#6B8E23]">•</span>
                    <span className="text-xs text-[#6B8E23]">Bible Study Group</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-[#E6B85C]" />
                <span className="text-sm font-medium text-[#6B8E23]">Day 15</span>
              </div>
            </div>
            <p className="text-[#2C2C2C] mb-4 leading-relaxed">
              Daily Bible reading streak continues! Today's verse really spoke to me: "Be still and know that I am God" - Psalm 46:10
            </p>
            
            {/* Enhanced Progress */}
            <div className="bg-[#F8F6F3] rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#6B8E23]">30-Day Bible Challenge</span>
                <span className="text-sm text-[#8B8B8B]">50% Complete</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-[#6B8E23] to-[#8B7D8B] h-3 rounded-full relative" style={{width: '50%'}}>
                  <div className="absolute right-0 top-0 h-3 w-3 bg-white rounded-full border-2 border-[#6B8E23]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#8B8B8B]">
                <span>Day 15 of 30</span>
                <span>15 days remaining</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#8B7D8B] text-white px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Encourage</span>
                </button>
                <button className="flex items-center space-x-2 text-[#6B8E23]">
                  <span className="text-sm">Join Challenge</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">8</span>
                </button>
              </div>
              <Share2 className="w-4 h-4 text-[#8B8B8B]" />
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

export default FYPVariation3;