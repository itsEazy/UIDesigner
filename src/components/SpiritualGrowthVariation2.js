import React from 'react';
import { BookOpen, Target, Calendar, Heart, Flame, Clock, Plus } from 'lucide-react';

const SpiritualGrowthVariation2 = () => {
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
          <h1 className="text-white text-xl font-bold">Your Journey</h1>
          <Plus className="w-5 h-5 text-white" />
        </div>
        <p className="text-white text-sm opacity-90 mt-1">Track your spiritual growth path</p>
      </div>

      {/* Journey Progress */}
      <div className="px-4 py-4 bg-gradient-to-r from-[#6B8E23] to-[#4A5D4F]">
        <div className="flex items-center justify-between text-white mb-2">
          <span className="text-sm">Current Streak</span>
          <div className="flex items-center space-x-1">
            <Flame className="w-4 h-4 text-[#E6B85C]" />
            <span className="font-bold">15 Days</span>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
          <div className="bg-white h-2 rounded-full" style={{width: '60%'}}></div>
        </div>
        <p className="text-white text-xs opacity-80 mt-1">10 more days to reach your 25-day milestone!</p>
      </div>

      {/* Timeline Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Today Section */}
        <div className="p-4 border-b border-[#E0E0E0] bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#2C2C2C]">Today</h3>
              <p className="text-sm text-[#8B8B8B]">Keep your momentum going</p>
            </div>
          </div>
          
          {/* Today's Activities */}
          <div className="ml-11 space-y-3">
            <div className="bg-[#F8F6F3] rounded-lg p-3 border-l-4 border-[#6B8E23]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] font-medium text-sm">Morning Prayer</span>
                <span className="text-[#6B8E23] text-xs font-medium">✓ Complete</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Started your day with gratitude and intention</p>
            </div>
            
            <div className="bg-[#F8F6F3] rounded-lg p-3 border-l-4 border-[#6B8E23]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] font-medium text-sm">Matthew 6 Reading</span>
                <span className="text-[#6B8E23] text-xs font-medium">✓ Complete</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Reflected on the Lord's Prayer and fasting</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border-l-4 border-[#E0E0E0] border-dashed">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] font-medium text-sm">Evening Reflection</span>
                <span className="text-[#8B8B8B] text-xs">Scheduled 8:00 PM</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Review the day and set tomorrow's intentions</p>
            </div>
          </div>
        </div>

        {/* This Week Section */}
        <div className="p-4 border-b border-[#E0E0E0] bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-[#5B8FA8] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#2C2C2C]">This Week</h3>
              <p className="text-sm text-[#8B8B8B]">Progress on weekly goals</p>
            </div>
          </div>
          
          <div className="ml-11">
            <div className="bg-gradient-to-r from-[#5B8FA8] to-[#4A8B8B] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">Bible Reading Plan</span>
                <span className="text-white text-xs">5/7 days</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-2">
                <div className="bg-white h-2 rounded-full" style={{width: '71%'}}></div>
              </div>
              <p className="text-white text-xs opacity-90">Almost there! 2 more days to complete this week</p>
            </div>
          </div>
        </div>

        {/* Current Month Section */}
        <div className="p-4 border-b border-[#E0E0E0] bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#2C2C2C]">January Progress</h3>
              <p className="text-sm text-[#8B8B8B]">Monthly spiritual disciplines</p>
            </div>
          </div>
          
          <div className="ml-11 space-y-3">
            <div className="bg-white border border-[#E0E0E0] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] font-medium text-sm">30-Day Bible Challenge</span>
                <span className="text-[#D4A574] text-xs font-medium">Day 15/30</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#D4A574] to-[#E6B85C] h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
              <p className="text-xs text-[#8B8B8B]">Halfway through! Keep reading consistently</p>
            </div>
            
            <div className="bg-white border border-[#E0E0E0] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2C2C2C] font-medium text-sm">Prayer Partner Check-ins</span>
                <span className="text-[#B85C7A] text-xs font-medium">3/4 weeks</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-[#B85C7A] to-[#8B7D8B] h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-xs text-[#8B8B8B]">Great accountability! Schedule this week's call</p>
            </div>
          </div>
        </div>

        {/* Upcoming Milestones */}
        <div className="p-4 bg-[#F8F6F3]">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-[#8B7D8B] rounded-full flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[#2C2C2C]">Upcoming Milestones</h3>
              <p className="text-sm text-[#8B8B8B]">Goals within reach</p>
            </div>
          </div>
          
          <div className="ml-11 space-y-3">
            <div className="bg-white rounded-lg p-3 border border-[#E0E0E0]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#2C2C2C] font-medium text-sm">25-Day Prayer Streak</span>
                <span className="text-[#E6B85C] text-xs font-medium">10 days to go</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Your longest streak yet! Keep it up</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-[#E0E0E0]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#2C2C2C] font-medium text-sm">Complete Matthew</span>
                <span className="text-[#4A8B8B] text-xs font-medium">13 chapters left</span>
              </div>
              <p className="text-xs text-[#8B8B8B]">Finish the Gospel by month's end</p>
            </div>
          </div>
        </div>

        {/* Journey Insights */}
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-[#2C2C2C] mb-3">Journey Insights</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F8F6F3] p-3 rounded-lg text-center">
              <Calendar className="w-6 h-6 text-[#6B8E23] mx-auto mb-1" />
              <div className="text-[#6B8E23] font-bold text-lg">47</div>
              <div className="text-[#8B8B8B] text-xs">Days Active</div>
            </div>
            <div className="bg-[#F8F6F3] p-3 rounded-lg text-center">
              <BookOpen className="w-6 h-6 text-[#5B8FA8] mx-auto mb-1" />
              <div className="text-[#5B8FA8] font-bold text-lg">342</div>
              <div className="text-[#8B8B8B] text-xs">Verses Read</div>
            </div>
            <div className="bg-[#F8F6F3] p-3 rounded-lg text-center">
              <Heart className="w-6 h-6 text-[#B85C7A] mx-auto mb-1" />
              <div className="text-[#B85C7A] font-bold text-lg">23</div>
              <div className="text-[#8B8B8B] text-xs">Journal Entries</div>
            </div>
            <div className="bg-[#F8F6F3] p-3 rounded-lg text-center">
              <Clock className="w-6 h-6 text-[#D4A574] mx-auto mb-1" />
              <div className="text-[#D4A574] font-bold text-lg">18h</div>
              <div className="text-[#8B8B8B] text-xs">Prayer Time</div>
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

export default SpiritualGrowthVariation2;