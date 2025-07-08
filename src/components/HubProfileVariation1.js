import React from 'react';
import { ArrowLeft, Search, MoreHorizontal, Users, MapPin, Calendar, Globe, Heart, MessageCircle, Share2, Bell } from 'lucide-react';

const HubProfileVariation1 = () => {
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
        <ArrowLeft className="w-6 h-6 text-white" />
        <h1 className="text-white text-lg font-semibold">Grace Community Church</h1>
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-white" />
          <MoreHorizontal className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-[#8B7D8B] to-[#B85C7A] flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#8B7D8B] font-bold text-2xl">GC</span>
          </div>
        </div>
        
        {/* Church Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h2 className="text-white text-xl font-bold mb-1">Grace Community Church</h2>
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>1,234 members</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Austin, TX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Action Buttons */}
        <div className="p-4 bg-white border-b border-[#E0E0E0]">
          <div className="flex space-x-3">
            <button className="flex-1 bg-[#4A5D4F] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Following</span>
            </button>
            <button className="flex-1 bg-[#F8F6F3] text-[#4A5D4F] py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Join Group</span>
            </button>
            <button className="bg-[#F8F6F3] text-[#4A5D4F] py-3 px-4 rounded-lg">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Info */}
        <div className="bg-white p-4 border-b border-[#E0E0E0]">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">About</h3>
          <p className="text-[#2C2C2C] text-sm leading-relaxed mb-4">
            A vibrant community of believers committed to growing in faith, serving others, and spreading God's love throughout Austin.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-[#8B8B8B]" />
              <span className="text-sm text-[#2C2C2C]">Sunday Service: 9:00 AM & 11:00 AM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-[#8B8B8B]" />
              <span className="text-sm text-[#4A5D4F]">gracecommunity.org</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-[#E0E0E0]">
          <div className="flex">
            <div className="flex-1 py-3 px-4 text-center border-b-2 border-[#4A5D4F]">
              <span className="text-[#4A5D4F] font-medium text-sm">Posts</span>
            </div>
            <div className="flex-1 py-3 px-4 text-center">
              <span className="text-[#8B8B8B] text-sm">Events</span>
            </div>
            <div className="flex-1 py-3 px-4 text-center">
              <span className="text-[#8B8B8B] text-sm">Prayer</span>
            </div>
            <div className="flex-1 py-3 px-4 text-center">
              <span className="text-[#8B8B8B] text-sm">About</span>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white">
          {/* Post 1 */}
          <div className="p-4 border-b border-[#E0E0E0]">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-[#8B7D8B] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">GC</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Grace Community Church</p>
                <p className="text-xs text-[#8B8B8B]">2 hours ago</p>
              </div>
            </div>
            <p className="text-[#2C2C2C] text-sm mb-3 leading-relaxed">
              Join us this Sunday for our new sermon series "Walking in Faith" as we explore what it means to trust God completely. Service times: 9 AM & 11 AM 🙏
            </p>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <Heart className="w-4 h-4" />
                <span className="text-xs">24</span>
              </button>
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">8</span>
              </button>
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="p-4 border-b border-[#E0E0E0]">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-[#8B7D8B] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">GC</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#2C2C2C] text-sm">Grace Community Church</p>
                <p className="text-xs text-[#8B8B8B]">1 day ago</p>
              </div>
            </div>
            <p className="text-[#2C2C2C] text-sm mb-3 leading-relaxed">
              Thank you to everyone who participated in our community food drive! Together we collected over 500 items for local families in need. God's love in action! ❤️
            </p>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <Heart className="w-4 h-4" />
                <span className="text-xs">67</span>
              </button>
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">15</span>
              </button>
              <button className="flex items-center space-x-2 text-[#8B8B8B]">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">Share</span>
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

export default HubProfileVariation1;