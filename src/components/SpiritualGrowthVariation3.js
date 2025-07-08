import React from 'react';
import { BookOpen, Target, Calendar, Heart, Flame, Clock, Plus, Hand, Edit3, ChevronRight } from 'lucide-react';

const SpiritualGrowthVariation3 = () => {
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
          <h1 className="text-white text-xl font-bold">Spiritual Tools</h1>
          <Plus className="w-5 h-5 text-white" />
        </div>
        <p className="text-white text-sm opacity-90 mt-1">Everything you need for spiritual growth</p>
      </div>

      {/* Current Streak Banner */}
      <div className="mx-4 mt-4 bg-gradient-to-r from-[#6B8E23] to-[#8B7D8B] rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">15 Day Streak!</h3>
            <p className="text-white text-sm opacity-90">Keep up the great work</p>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Flame className="w-6 h-6 text-[#E6B85C]" />
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Bible Study Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-[#2C2C2C] text-lg mb-3">Bible Study</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#4A8B8B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Bible Reading</h3>
                    <p className="text-sm text-[#8B8B8B]">Continue Matthew 6:1-34</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
              <div className="mt-3 bg-[#F8F6F3] rounded-lg p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#4A8B8B] font-medium">30-Day Challenge</span>
                  <span className="text-[#8B8B8B]">Day 15/30</span>
                </div>
                <div className="w-full bg-[#E0E0E0] rounded-full h-2 mt-2">
                  <div className="bg-[#4A8B8B] h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Study Plans</h3>
                    <p className="text-sm text-[#8B8B8B]">Guided reading plans</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-[#2C2C2C] text-lg mb-3">Prayer</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#5B8FA8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                    <Hand className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Prayer List</h3>
                    <p className="text-sm text-[#8B8B8B]">12 active prayer requests</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#B85C7A] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Prayer Timer</h3>
                    <p className="text-sm text-[#8B8B8B]">Guided prayer sessions</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#8B7D8B] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🧱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Prayer Wall</h3>
                    <p className="text-sm text-[#8B8B8B]">Community prayer requests</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Habits Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-[#2C2C2C] text-lg mb-3">Goals & Habits</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#6B8E23]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Spiritual Goals</h3>
                    <p className="text-sm text-[#8B8B8B]">3 active goals</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="flex-1 bg-[#F8F6F3] rounded p-2 text-center">
                  <div className="text-xs text-[#6B8E23] font-medium">Bible Reading</div>
                  <div className="text-xs text-[#8B8B8B]">50% done</div>
                </div>
                <div className="flex-1 bg-[#F8F6F3] rounded p-2 text-center">
                  <div className="text-xs text-[#5B8FA8] font-medium">Prayer Habit</div>
                  <div className="text-xs text-[#8B8B8B]">15 day streak</div>
                </div>
                <div className="flex-1 bg-[#F8F6F3] rounded p-2 text-center">
                  <div className="text-xs text-[#D4A574] font-medium">Fasting</div>
                  <div className="text-xs text-[#8B8B8B]">On track</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Daily Routine</h3>
                    <p className="text-sm text-[#8B8B8B]">Build spiritual habits</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-[#2C2C2C] text-lg mb-3">Reflection</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#B85C7A]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#B85C7A] rounded-full flex items-center justify-center">
                    <Edit3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Journal</h3>
                    <p className="text-sm text-[#8B8B8B]">Last entry: 2 days ago</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#E6B85C] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">Gratitude</h3>
                    <p className="text-sm text-[#8B8B8B]">Daily thankfulness practice</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#F8F6F3] rounded-xl p-4">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">Quick Start</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white p-3 rounded-lg flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-[#5B8FA8] rounded-full flex items-center justify-center">
                <Hand className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#2C2C2C] text-sm font-medium">Quick Prayer</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-[#4A8B8B] rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#2C2C2C] text-sm font-medium">Read Now</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-[#B85C7A] rounded-full flex items-center justify-center">
                <Edit3 className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#2C2C2C] text-sm font-medium">Journal Entry</span>
            </button>
            <button className="bg-white p-3 rounded-lg flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#2C2C2C] text-sm font-medium">New Goal</span>
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

export default SpiritualGrowthVariation3;