import React from 'react';
import { Heart, MessageCircle, Share2, Hand, Flame, MoreHorizontal } from 'lucide-react';

const FYPVariation1 = () => {
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
      <div className="mt-[44px] bg-[#4A5D4F] px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Faith Feed</h1>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#E6B85C] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <MoreHorizontal className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {/* Post 1 - Prayer Request */}
        <div className="bg-white mx-4 mt-4 rounded-xl shadow-sm border-l-4 border-[#5B8FA8]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Sarah Johnson</p>
                  <p className="text-sm text-[#8B8B8B]">2 hours ago</p>
                </div>
              </div>
              <div className="bg-[#5B8FA8] text-white px-3 py-1 rounded-full text-xs font-medium">
                Prayer Request
              </div>
            </div>
            <p className="text-[#2C2C2C] mb-4 leading-relaxed">
              Please pray for my grandmother who is going through surgery tomorrow. She's been such a pillar of faith for our family 🙏
            </p>
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

        {/* Post 2 - Testimony */}
        <div className="bg-white mx-4 mt-4 rounded-xl shadow-sm border-l-4 border-[#D4A574]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#6B8E23] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Michael Rodriguez</p>
                  <p className="text-sm text-[#8B8B8B]">4 hours ago</p>
                </div>
              </div>
              <div className="bg-[#D4A574] text-white px-3 py-1 rounded-full text-xs font-medium">
                Testimony
              </div>
            </div>
            <p className="text-[#2C2C2C] mb-4 leading-relaxed">
              God is so good! Just got the job I've been praying for! His timing is perfect. To everyone still waiting - keep trusting! ✨
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#E6B85C] text-white px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Amen</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <span className="text-sm">48</span>
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

        {/* Post 3 - Goal Update */}
        <div className="bg-white mx-4 mt-4 rounded-xl shadow-sm border-l-4 border-[#6B8E23]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#B85C7A] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">AL</span>
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C]">Anna Liu</p>
                  <p className="text-sm text-[#8B8B8B]">6 hours ago</p>
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
            <div className="bg-[#F8F6F3] rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#6B8E23]">Bible Reading Progress</span>
                <span className="text-sm text-[#8B8B8B]">15/30 days</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                <div className="bg-[#6B8E23] h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#8B7D8B] text-white px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Encourage</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B7D8B]">
                  <span className="text-sm">32</span>
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

export default FYPVariation1;