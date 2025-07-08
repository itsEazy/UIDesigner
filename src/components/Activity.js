import React from 'react';
import { ArrowLeft, Settings, Heart, MessageCircle, Share2, Home, Building, TreePine, Plus, Bell, User } from 'lucide-react';

const Activity = () => {
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

      {/* Header */}
      <div className="mt-[44px] px-4 py-3 flex items-center justify-between">
        <ArrowLeft className="w-6 h-6 text-black" />
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <span className="text-black text-lg font-semibold border-b-2 border-black pb-1">All</span>
          </div>
          <div className="text-center">
            <span className="text-gray-400 text-lg">Community</span>
          </div>
        </div>
        <Settings className="w-6 h-6 text-black" />
      </div>

      {/* Activity List */}
      <div className="flex-1 overflow-y-auto px-4">
        {/* Activity Item 1 */}
        <div className="flex items-center space-x-3 py-3 border-b border-gray-100">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JC</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-black text-sm">
              <span className="font-semibold">Julian Chung</span> Liked your Feed
            </p>
          </div>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="flex items-center space-x-3 py-3 border-b border-gray-100">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JC</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-black text-sm">
              <span className="font-semibold">Julian Chung</span> Started Following you
            </p>
          </div>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-medium">
            Following
          </button>
        </div>

        {/* Activity Item 3 */}
        <div className="flex items-start space-x-3 py-3 border-b border-gray-100">
          <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JC</span>
          </div>
          <div className="flex-1">
            <p className="text-black text-sm mb-1">
              <span className="font-semibold">Julian Chung</span> Comment on your Feed :
            </p>
            <p className="text-gray-500 text-sm">What an Adorable Design 🔥</p>
          </div>
        </div>

        {/* Activity Item 4 - Jashon Thiago */}
        <div className="py-4 border-b border-gray-100">
          <div className="flex items-start space-x-3 mb-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">JT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-black text-sm">Jashon Thiago</span>
                <span className="text-gray-400 text-sm">@jashon.thiago</span>
                <span className="text-gray-400 text-sm">2 Hours</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                Replying to <span className="text-blue-500">@rifqi.arkaan</span>
              </p>
              <div className="text-black text-sm mb-3">
                <p>Me:</p>
                <p>I only use auto layout when I'm designing components for reusability.</p>
                <p className="mt-1">Also me:</p>
                <p>I hate reusing components with auto layout.</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">24</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">2</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">4</span>
                </div>
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Item 5 */}
        <div className="flex items-center space-x-3 py-3 border-b border-gray-100">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CJ</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-black text-sm">
              <span className="font-semibold">Charless J</span> Started Following you
            </p>
          </div>
          <button className="bg-[#4A5D4F] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Follow
          </button>
        </div>

        {/* Activity Item 6 */}
        <div className="flex items-center space-x-3 py-3 border-b border-gray-100">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JN</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-black text-sm">
              <span className="font-semibold">J Noegraha</span> Liked your Feed
            </p>
          </div>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
            <Bell className="w-6 h-6 text-[#4A5D4F]" />
            <span className="text-xs text-[#4A5D4F] font-medium">Activity</span>
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

export default Activity;