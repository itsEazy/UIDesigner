import React from 'react';
import { Edit, Search, MessageCircle, Camera, Plus, MoreHorizontal, Briefcase, GraduationCap, Home, Bell, User, Award, Building, TreePine } from 'lucide-react';

const Profile = () => {
  return (
    <div className="w-[375px] h-[812px] bg-white rounded-[40px] border-8 border-black relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] bg-white flex items-center justify-between px-6">
        <div className="text-black text-lg font-semibold">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
          <div className="w-4 h-2 border border-black rounded-sm">
            <div className="w-3 h-1 bg-black rounded-sm"></div>
          </div>
          <div className="w-6 h-3 bg-black rounded-sm"></div>
        </div>
      </div>

      {/* Cover Photo */}
      <div className="relative h-32 bg-gradient-to-br from-blue-300 to-blue-500 mx-4 mt-[44px] rounded-lg overflow-hidden">
        {/* Mountain landscape background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc1IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDM3NSAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNreSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjODdDRUVCIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU0QTBEOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjwhLS0gU2t5IGJhY2tncm91bmQgLS0+CjxyZWN0IHdpZHRoPSIzNzUiIGhlaWdodD0iMTI4IiBmaWxsPSJ1cmwoI3NreSkiLz4KPCEtLSBNb3VudGFpbnMgLS0+Cjxwb2x5Z29uIHBvaW50cz0iMCw4MCAzMCw0MCA4MCw2MCA5MSwzNSAxNDAsNjAgMTgwLDMwIDIyMCw1NSAyNzAsNDAgMzAwLDYwIDM0MSwzMCAzNzUsNjAgMzc1LDEyOCAwLDEyOCIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC45NSIvPgo8IS0tIE1pZGRsZSBtb3VudGFpbiBsYXllciAtLT4KPHBvbHlnb24gcG9pbnRzPSIwLDk1IDQwLDY1IDgwLDc1IDEyMCw1NSAxNjAsNzAgMjAwLDUwIDI0MCw2NSAyODAsNTUgMzIwLDcwIDM3NSw2MCAzNzUsMTI4IDAsMTI4IiBmaWxsPSIjRjBGMEYwIiBvcGFjaXR5PSIwLjgiLz4KPCEtLSBUcmVlIGxpbmUgLS0+CjxyZWN0IHg9IjAiIHk9IjkwIiB3aWR0aD0iMzc1IiBoZWlnaHQ9IjIwIiBmaWxsPSIjMkY0RjJGIiBvcGFjaXR5PSIwLjgiLz4KPCEtLSBUcmVlcyAtLT4KPGc+CjxyZWN0IHg9IjIwIiB5PSI3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTUiIGZpbGw9IiMyRjRGMkYiLz4KPHBvbHlnb24gcG9pbnRzPSIyMS41LDc1IDI3LDY1IDIzLDY1IDI4LDU1IDI0LDU1IDI5LDQ1IDIwLDQ1IDIxLDU1IDE3LDU1IDE4LDY1IDE0LDY1IDE5LDc1IiBmaWxsPSIjMkY0RjJGIi8+CjxyZWN0IHg9IjQwIiB5PSI3OCIgd2lkdGg9IjMiIGhlaWdodD0iMTIiIGZpbGw9IiMyRjRGMkYiLz4KPHBvbHlnb24gcG9pbnRzPSI0MS41LDc4IDQ2LDcwIDQzLDcwIDQ3LDYyIDQ0LDYyIDQ4LDUyIDM5LDUyIDQwLDYyIDM3LDYyIDM4LDcwIDM1LDcwIDM5LDc4IiBmaWxsPSIjMkY0RjJGIi8+CjxyZWN0IHg9IjYwIiB5PSI3NyIgd2lkdGg9IjMiIGhlaWdodD0iMTMiIGZpbGw9IiMyRjRGMkYiLz4KPHBvbHlnb24gcG9pbnRzPSI2MS41LDc3IDY2LDY5IDYzLDY5IDY3LDYxIDY0LDYxIDY4LDUxIDU5LDUxIDYwLDYxIDU3LDYxIDU4LDY5IDU1LDY5IDU5LDc3IiBmaWxsPSIjMkY0RjJGIi8+CjxyZWN0IHg9IjgwIiB5PSI3NiIgd2lkdGg9IjMiIGhlaWdodD0iMTQiIGZpbGw9IiMyRjRGMkYiLz4KPHBvbHlnb24gcG9pbnRzPSI4MS41LDc2IDg2LDY4IDgzLDY4IDg3LDYwIDg0LDYwIDg4LDUwIDc5LDUwIDgwLDYwIDc3LDYwIDc4LDY4IDc1LDY4IDc5LDc2IiBmaWxsPSIjMkY0RjJGIi8+CjxyZWN0IHg9IjMwMCIgeT0iNzgiIHdpZHRoPSIzIiBoZWlnaHQ9IjEyIiBmaWxsPSIjMkY0RjJGIi8+Cjxwb2x5Z29uIHBvaW50cz0iMzAxLjUsNzggMzA2LDcwIDMwMyw3MCAzMDcsNjIgMzA0LDYyIDMwOCw1MiAyOTksNTIgMzAwLDYyIDI5Nyw2MiAyOTgsNzAgMjk1LDcwIDI5OSw3OCIgZmlsbD0iIzJGNEYyRiIvPgo8cmVjdCB4PSIzMjAiIHk9Ijc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxNSIgZmlsbD0iIzJGNEYyRiIvPgo8cG9seWdvbiBwb2ludHM9IjMyMS41LDc1IDMyNyw2NSAzMjMsNjUgMzI4LDU1IDMyNCw1NSAzMjksNDUgMzIwLDQ1IDMyMSw1NSAzMTcsNTUgMzE4LDY1IDMxNCw2NSAzMTksNzUiIGZpbGw9IiMyRjRGMkYiLz4KPC9nPgo8IS0tIFdhdGVyIC0tPgo8cmVjdCB4PSIwIiB5PSIxMDAiIHdpZHRoPSIzNzUiIGhlaWdodD0iMjgiIGZpbGw9IiM0QTkwRTIiIG9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4K')"
        }}>
          <div className="absolute inset-0 bg-[#4A5D4F] opacity-20"></div>
        </div>

      </div>

      {/* Profile Picture and Badges Section */}
      <div className="relative -mt-16 ml-4 flex items-start space-x-4">
        {/* Profile Picture - Half on cover, half off */}
        <div className="relative w-32 h-32 bg-white rounded-full p-1 z-10">
          <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjQjQ1MzA5IiByeD0iNjQiLz4KPGNpcmNsZSBjeD0iNjQiIGN5PSI1MCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiLz4KPGVsbGlwc2UgY3g9IjY0IiBjeT0iMTA1IiByeD0iMzUiIHJ5PSIyNSIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K')"
            }}>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
            <Award className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Streak Counter */}
        <div className="flex-1 pt-20 pr-4 flex justify-end">
          <div className="bg-white rounded-full px-3 py-1 shadow-sm border border-gray-200 flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔥</span>
            </div>
            <span className="text-xs font-medium text-gray-800">15 day streak</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-6 pb-4">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-black mb-1">John Mobbin</h2>
          <p className="text-gray-600 text-base mb-4">This is an example bio whatever you want will go here</p>
        </div>
        
        {/* Follower and Mutual Count */}
        <div className="flex items-center space-x-4 mb-4 text-sm">
          <div className="text-black">
            <span className="font-semibold">1,234</span> followers
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">42</span> mutual connections
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 mb-6">
          <button className="flex-1 bg-[#4A5D4F] text-white py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center space-x-2">
            <Plus className="w-3 h-3" />
            <span>Follow</span>
          </button>
          <button className="flex-1 bg-gray-200 text-black py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center space-x-2">
            <MessageCircle className="w-3 h-3" />
            <span>Message</span>
          </button>
          <button className="bg-gray-200 text-black py-2 px-3 rounded-lg">
            <MoreHorizontal className="w-3 h-3" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-6 mb-6">
          <div className="pb-2 border-b-2 border-[#4A5D4F]">
            <span className="text-[#4A5D4F] font-medium">Posts</span>
          </div>
          <div className="pb-2">
            <span className="text-gray-600">Growth</span>
          </div>
          <div className="pb-2">
            <span className="text-gray-600">About</span>
          </div>
        </div>

        {/* Posts Section */}
        <div>
          <div className="space-y-4">
            {/* Text Post */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-black">John Mobbin</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-black mb-3">Just finished an amazing design sprint! Really excited about the new features we're building. The team collaboration was incredible 🚀</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm">24</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-[#4A5D4F]"></div>
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Image Post */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-black">John Mobbin</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <p className="text-black mb-3">Beautiful sunset from the office today! Sometimes you need to take a moment to appreciate the little things.</p>
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 h-48 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-white font-medium">📸 Image Post</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">8</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm">42</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-[#4A5D4F]"></div>
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Another Text Post */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-black">John Mobbin</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              <p className="text-black mb-3">Weekend vibes! Time to disconnect and recharge. Hope everyone has a great weekend ahead! 🌟</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">15</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm">38</span>
                </button>
                <button className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded bg-[#4A5D4F]"></div>
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex items-center justify-around px-4 py-2">
          <div className="flex flex-col items-center space-y-1 py-2">
            <Home className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Home</span>
          </div>
          <div className="flex flex-col items-center space-y-1 py-2">
            <Building className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Hubs</span>
          </div>
          <div className="flex flex-col items-center space-y-1 py-2">
            <TreePine className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Grow</span>
          </div>
          <div className="flex flex-col items-center space-y-1 py-2">
            <div className="w-6 h-6 bg-[#4A5D4F] rounded-sm flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-[#4A5D4F] font-medium">Post</span>
          </div>
          <div className="flex flex-col items-center space-y-1 py-2">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Activity</span>
          </div>
          <div className="flex flex-col items-center space-y-1 py-2">
            <User className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Profile</span>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="h-1 bg-black mx-auto w-32 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default Profile;