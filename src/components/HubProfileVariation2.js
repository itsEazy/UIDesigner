import React from 'react';
import { ArrowLeft, Search, MoreHorizontal, Users, MapPin, Calendar, Globe, Heart, MessageCircle, Share2, Bell, Play, BookOpen, Hand } from 'lucide-react';

const HubProfileVariation2 = () => {
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
        <h1 className="text-white text-lg font-semibold">Youth Life Hub</h1>
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-white" />
          <MoreHorizontal className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Card */}
        <div className="mx-4 mt-4 bg-gradient-to-br from-[#D4A574] to-[#E6B85C] rounded-xl p-6 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">YL</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">Youth Life Hub</h2>
              <div className="flex items-center space-x-3 text-white/90 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>456 members</span>
                </div>
                <span>•</span>
                <span>Ages 13-18</span>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-sm mb-4">
            A place for teens to grow in faith, build friendships, and discover God's purpose for their lives.
          </p>
          <button className="w-full bg-white text-[#D4A574] py-3 rounded-lg font-semibold">
            Join Community
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mx-4 mt-4">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-white p-4 rounded-xl flex flex-col items-center space-y-2 shadow-sm">
              <div className="w-10 h-10 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                <Hand className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium text-[#2C2C2C]">Prayer Wall</span>
            </button>
            <button className="bg-white p-4 rounded-xl flex flex-col items-center space-y-2 shadow-sm">
              <div className="w-10 h-10 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium text-[#2C2C2C]">Bible Study</span>
            </button>
            <button className="bg-white p-4 rounded-xl flex flex-col items-center space-y-2 shadow-sm">
              <div className="w-10 h-10 bg-[#B85C7A] rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium text-[#2C2C2C]">Events</span>
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mx-4 mt-6">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">This Week</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-[#D4A574]">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-[#2C2C2C]">Youth Night: Game Night & Worship</h4>
                <span className="text-xs text-[#D4A574] bg-[#D4A574]/10 px-2 py-1 rounded-full">Tonight</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Wed 7:00 PM</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Youth Center</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[#6B8E23] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#B85C7A] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#5B8FA8] rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-[#8B7D8B] rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-medium">+12</span>
                  </div>
                </div>
                <button className="bg-[#D4A574] text-white px-4 py-2 rounded-lg text-xs font-medium">
                  Join Event
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-medium text-[#2C2C2C] mb-2">Sunday Youth Service</h4>
              <div className="flex items-center space-x-4 text-sm text-[#8B8B8B] mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Sun 11:00 AM</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Main Sanctuary</span>
                </div>
              </div>
              <button className="w-full bg-[#F8F6F3] text-[#4A5D4F] py-2 rounded-lg text-sm font-medium">
                Going
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mx-4 mt-6 mb-6">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">Recent Activity</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">MJ</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2C2C2C]"><span className="font-medium">Maya Johnson</span> shared a prayer request</p>
                  <p className="text-xs text-[#8B8B8B]">2 hours ago</p>
                </div>
              </div>
              <p className="text-sm text-[#2C2C2C] mb-3">
                Please pray for my college applications and for wisdom in choosing the right path for my future 🙏
              </p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-[#5B8FA8] text-white px-3 py-2 rounded-full text-xs">
                  <Hand className="w-3 h-3" />
                  <span>Pray</span>
                </button>
                <span className="text-xs text-[#8B8B8B]">8 people praying</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">YL</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2C2C2C]"><span className="font-medium">Youth Life Hub</span> shared a video</p>
                  <p className="text-xs text-[#8B8B8B]">5 hours ago</p>
                </div>
              </div>
              <div className="bg-[#F8F6F3] rounded-lg p-3 mb-3 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#2C2C2C]">Highlights from Last Week's Retreat</p>
                  <p className="text-xs text-[#8B8B8B]">3:24 • Youth Life</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-[#8B8B8B]">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">32</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B8B8B]">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">12</span>
                </button>
                <button className="flex items-center space-x-2 text-[#8B8B8B]">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
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

export default HubProfileVariation2;