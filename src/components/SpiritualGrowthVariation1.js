import React from 'react';
import { BookOpen, Target, Calendar, Heart, Flame, Clock, Plus, TrendingUp, Check } from 'lucide-react';

const SpiritualGrowthVariation1 = () => {
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
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">Spiritual Growth</h1>
          <Plus className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 py-4 bg-white border-b border-[#E0E0E0]">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8B7D8B] rounded-full flex items-center justify-center mx-auto mb-2">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="text-[#6B8E23] font-bold text-lg">15</div>
            <div className="text-[#8B8B8B] text-xs">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B8FA8] to-[#4A8B8B] rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-[#5B8FA8] font-bold text-lg">3/5</div>
            <div className="text-[#8B8B8B] text-xs">Goals Active</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#E6B85C] rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-[#D4A574] font-bold text-lg">47</div>
            <div className="text-[#8B8B8B] text-xs">Chapters Read</div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Today's Progress */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-[#2C2C2C] text-lg">Today's Progress</h2>
            <Calendar className="w-5 h-5 text-[#8B8B8B]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#2C2C2C] text-sm">Morning Prayer</span>
              </div>
              <span className="text-xs text-[#6B8E23] font-medium">Completed</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#2C2C2C] text-sm">Bible Reading (Matthew 5)</span>
              </div>
              <span className="text-xs text-[#6B8E23] font-medium">Completed</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#E0E0E0] rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#8B8B8B]" />
                </div>
                <span className="text-[#2C2C2C] text-sm">Evening Reflection</span>
              </div>
              <span className="text-xs text-[#8B8B8B]">Pending</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#E0E0E0] rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#8B8B8B]" />
                </div>
                <span className="text-[#2C2C2C] text-sm">Gratitude Journal</span>
              </div>
              <span className="text-xs text-[#8B8B8B]">Pending</span>
            </div>
          </div>
        </div>

        {/* Active Goals */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-[#2C2C2C] text-lg">Active Goals</h2>
            <Plus className="w-5 h-5 text-[#8B8B8B]" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] text-sm font-medium">30-Day Bible Reading</span>
                <span className="text-[#6B8E23] text-sm font-medium">Day 15/30</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#6B8E23] to-[#8B7D8B] h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-[#8B8B8B]">
                <span>50% Complete</span>
                <span>15 days remaining</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] text-sm font-medium">Daily Prayer Habit</span>
                <span className="text-[#5B8FA8] text-sm font-medium">15 day streak</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#5B8FA8] to-[#4A8B8B] h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-[#8B8B8B]">
                <span>Strong progress</span>
                <span>Keep it up!</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] text-sm font-medium">Weekly Fasting</span>
                <span className="text-[#D4A574] text-sm font-medium">2/4 weeks</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#D4A574] to-[#E6B85C] h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-[#8B8B8B]">
                <span>On track</span>
                <span>Next: Friday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bible Study */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-[#2C2C2C] text-lg">Continue Reading</h2>
            <BookOpen className="w-5 h-5 text-[#4A8B8B]" />
          </div>
          <div className="bg-gradient-to-r from-[#4A8B8B] to-[#5B8FA8] rounded-lg p-4">
            <div className="text-white text-sm font-medium mb-2">Currently Reading</div>
            <div className="text-white text-lg font-bold mb-1">Matthew 6:1-34</div>
            <div className="text-white text-sm opacity-90 mb-3">The Sermon on the Mount continues</div>
            <button className="w-full bg-white text-[#4A8B8B] py-2 rounded-lg text-sm font-medium">
              Continue Reading
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-semibold text-[#2C2C2C] text-lg mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#F8F6F3] p-3 rounded-lg flex flex-col items-center space-y-2">
              <Heart className="w-6 h-6 text-[#B85C7A]" />
              <span className="text-[#2C2C2C] text-sm font-medium">Journal</span>
            </button>
            <button className="bg-[#F8F6F3] p-3 rounded-lg flex flex-col items-center space-y-2">
              <Target className="w-6 h-6 text-[#6B8E23]" />
              <span className="text-[#2C2C2C] text-sm font-medium">Set Goal</span>
            </button>
            <button className="bg-[#F8F6F3] p-3 rounded-lg flex flex-col items-center space-y-2">
              <Clock className="w-6 h-6 text-[#5B8FA8]" />
              <span className="text-[#2C2C2C] text-sm font-medium">Prayer Timer</span>
            </button>
            <button className="bg-[#F8F6F3] p-3 rounded-lg flex flex-col items-center space-y-2">
              <TrendingUp className="w-6 h-6 text-[#D4A574]" />
              <span className="text-[#2C2C2C] text-sm font-medium">Analytics</span>
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
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Hubs</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#4A5D4F] rounded"></div>
          <span className="text-xs text-[#4A5D4F] font-medium">Grow</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default SpiritualGrowthVariation1;