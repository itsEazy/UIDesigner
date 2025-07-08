import React from 'react';
import { ArrowLeft, Search, MoreHorizontal, Users, MapPin, Calendar, Globe, Heart, MessageCircle, Share2, Bell, BookOpen, User, Star, Hand } from 'lucide-react';

const HubProfileVariation3 = () => {
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
        <h1 className="text-white text-lg font-semibold">Bible Study Fellowship</h1>
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-white" />
          <MoreHorizontal className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Header - Minimalist Style */}
        <div className="bg-white px-4 py-6 border-b border-[#E0E0E0]">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4A8B8B] to-[#5B8FA8] rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#2C2C2C] mb-1">Bible Study Fellowship</h2>
              <div className="flex items-center space-x-4 text-sm text-[#8B8B8B]">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>89 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Weekly Studies</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[#2C2C2C] text-sm leading-relaxed mb-4">
            Join us every Thursday evening for deep dives into God's Word. We explore scripture together, share insights, and grow in faith as a community.
          </p>

          <div className="flex space-x-3">
            <button className="flex-1 bg-[#4A8B8B] text-white py-3 px-4 rounded-xl font-medium">
              Join Study
            </button>
            <button className="bg-[#F8F6F3] text-[#4A8B8B] py-3 px-4 rounded-xl">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Study Info Cards */}
        <div className="px-4 py-4 space-y-4">
          {/* Current Study */}
          <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Current Study</h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Week 3 of 8</span>
            </div>
            <h4 className="text-lg font-bold mb-2">The Gospel of John</h4>
            <p className="text-white/90 text-sm mb-3">
              Exploring the nature of Christ through John's unique perspective and powerful testimonies.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-medium">Next Meeting: Thursday 7:00 PM</p>
                <p className="text-white/80">Chapter 5-6 | The Pool of Bethesda</p>
              </div>
              <button className="bg-white text-[#4A8B8B] px-4 py-2 rounded-lg text-sm font-medium">
                Join Live
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-[#6B8E23] rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#8B8B8B] mb-1">Studies</p>
              <p className="text-lg font-bold text-[#2C2C2C]">12</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#8B8B8B] mb-1">Active</p>
              <p className="text-lg font-bold text-[#2C2C2C]">89</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-[#B85C7A] rounded-full flex items-center justify-center mx-auto mb-2">
                <Hand className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#8B8B8B] mb-1">Prayers</p>
              <p className="text-lg font-bold text-[#2C2C2C]">156</p>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-[#2C2C2C] mb-3">Upcoming Sessions</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-[#F8F6F3] rounded-lg">
                <div className="w-2 h-2 bg-[#4A8B8B] rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-[#2C2C2C] text-sm">John 5-6: Signs & Wonders</p>
                  <p className="text-xs text-[#8B8B8B]">Thursday 7:00 PM • Room 204</p>
                </div>
                <span className="text-xs text-[#4A8B8B] font-medium">This Week</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#F8F6F3] rounded-lg">
                <div className="w-2 h-2 bg-[#8B8B8B] rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-[#2C2C2C] text-sm">John 7-8: Light of the World</p>
                  <p className="text-xs text-[#8B8B8B]">Thursday 7:00 PM • Room 204</p>
                </div>
                <span className="text-xs text-[#8B8B8B]">Next Week</span>
              </div>
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4 border-b border-[#E0E0E0]">
              <h3 className="font-semibold text-[#2C2C2C]">Recent Discussions</h3>
            </div>
            <div className="space-y-0">
              <div className="p-4 border-b border-[#E0E0E0]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-6 h-6 bg-[#6B8E23] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">DM</span>
                  </div>
                  <p className="text-sm font-medium text-[#2C2C2C]">David Miller</p>
                  <span className="text-xs text-[#8B8B8B]">2h ago</span>
                </div>
                <p className="text-sm text-[#2C2C2C] mb-2">
                  "What does it mean that Jesus is the 'living water'? How does this apply to our daily lives?"
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">8 replies</span>
                  </button>
                  <button className="flex items-center space-x-1 text-[#8B8B8B]">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">12</span>
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-6 h-6 bg-[#D4A574] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">RJ</span>
                  </div>
                  <p className="text-sm font-medium text-[#2C2C2C]">Rachel Johnson</p>
                  <span className="text-xs text-[#8B8B8B]">5h ago</span>
                </div>
                <p className="text-sm text-[#2C2C2C] mb-2">
                  "Looking forward to tonight's discussion on healing. Please pray for wisdom as we explore this topic together 🙏"
                </p>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-[#5B8FA8]">
                    <Hand className="w-3 h-3" />
                    <span className="text-xs">Praying</span>
                  </button>
                  <span className="text-xs text-[#8B8B8B]">15 people praying</span>
                </div>
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

export default HubProfileVariation3;