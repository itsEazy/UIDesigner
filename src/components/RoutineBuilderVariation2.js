import React, { useState } from 'react';
import { Play, Plus, Clock, ChevronRight, Shuffle, Settings, ArrowLeft, CheckCircle } from 'lucide-react';

const RoutineBuilderVariation2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const routineFlow = [
    { 
      id: 1, 
      type: 'devotion', 
      title: 'Morning Devotion', 
      duration: 15, 
      color: '#6B8E23',
      description: 'Start with gratitude and reflection',
      completed: true
    },
    { 
      id: 2, 
      type: 'bible', 
      title: 'Bible Reading', 
      duration: 20, 
      color: '#4A8B8B',
      description: 'Today: Matthew 5:1-12',
      completed: false
    },
    { 
      id: 3, 
      type: 'prayer', 
      title: 'Guided Prayer', 
      duration: 10, 
      color: '#5B8FA8',
      description: 'Focus on intercession',
      completed: false
    },
    { 
      id: 4, 
      type: 'journal', 
      title: 'Reflection Journal', 
      duration: 15, 
      color: '#6B8E23',
      description: 'Write down insights',
      completed: false
    }
  ];

  const totalDuration = routineFlow.reduce((sum, item) => sum + item.duration, 0);
  const completedDuration = routineFlow
    .filter(item => item.completed)
    .reduce((sum, item) => sum + item.duration, 0);
  const progressPercentage = Math.round((completedDuration / totalDuration) * 100);

  return (
    <div className="w-[375px] h-[812px] bg-[#FDFCF8] relative overflow-hidden">
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] p-2">
        <div className="w-full h-full bg-[#FDFCF8] rounded-[32px] overflow-hidden">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2">
            <span className="text-black font-semibold">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-black rounded-sm"></div>
              <div className="w-4 h-2 bg-black rounded-sm opacity-60"></div>
              <div className="w-4 h-2 bg-black rounded-sm opacity-30"></div>
            </div>
          </div>

          {/* Header */}
          <div className="px-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <button className="w-10 h-10 bg-[#F8F6F3] rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-[#2C2C2C]" />
              </button>
              <h1 className="text-[28px] font-semibold text-[#2C2C2C] leading-[36px] tracking-[-0.3px]">
                Morning Flow
              </h1>
              <button className="w-10 h-10 bg-[#F8F6F3] rounded-full flex items-center justify-center">
                <Settings className="w-5 h-5 text-[#2C2C2C]" />
              </button>
            </div>

            {/* Progress Header */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-[18px] font-medium text-[#2C2C2C]">Today's Progress</h2>
                  <p className="text-[14px] text-[#8B8B8B]">{completedDuration}/{totalDuration} minutes complete</p>
                </div>
                <div className="text-right">
                  <span className="text-[24px] font-semibold text-[#6B8E23]">{progressPercentage}%</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#6B8E23] to-[#4A8B8B] transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Flow Timeline */}
          <div className="flex-1 px-6">
            <div className="space-y-4">
              {routineFlow.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < routineFlow.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-8 bg-[#F8F6F3]"></div>
                  )}
                  
                  {/* Step Card */}
                  <div 
                    className={`bg-white rounded-xl p-4 shadow-sm border-l-4 transition-all ${
                      step.completed 
                        ? 'border-[#6B8E23] bg-opacity-95' 
                        : index === currentStep 
                        ? 'border-[#4A5D4F] shadow-md'
                        : 'border-[#F8F6F3]'
                    }`}
                  >
                    <div className="flex items-center">
                      {/* Step Number/Status */}
                      <div className="relative mr-4">
                        {step.completed ? (
                          <div className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                        ) : (
                          <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                              index === currentStep
                                ? 'border-[#4A5D4F] bg-[#4A5D4F]'
                                : 'border-[#F8F6F3] bg-white'
                            }`}
                          >
                            <span 
                              className={`text-[16px] font-semibold ${
                                index === currentStep ? 'text-white' : 'text-[#8B8B8B]'
                              }`}
                            >
                              {index + 1}
                            </span>
                          </div>
                        )}
                        
                        {/* Duration Badge */}
                        <div 
                          className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-white"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.duration}m
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-[16px] font-medium text-[#2C2C2C]">
                            {step.title}
                          </h3>
                          {index === currentStep && !step.completed && (
                            <button 
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="w-8 h-8 bg-[#4A5D4F] rounded-full flex items-center justify-center"
                            >
                              <Play className="w-4 h-4 text-white ml-0.5" />
                            </button>
                          )}
                        </div>
                        <p className="text-[14px] text-[#8B8B8B] mb-2">
                          {step.description}
                        </p>
                        
                        {/* Progress for current step */}
                        {index === currentStep && !step.completed && isPlaying && (
                          <div className="w-full h-1 bg-[#F8F6F3] rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-1000"
                              style={{ 
                                width: '40%', 
                                backgroundColor: step.color 
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Step Button */}
            <button className="w-full mt-6 bg-[#F8F6F3] border-2 border-dashed border-[#8B8B8B] rounded-xl p-4 flex items-center justify-center hover:bg-[#F0F0F0] transition-colors">
              <Plus className="w-5 h-5 text-[#8B8B8B] mr-2" />
              <span className="text-[16px] font-medium text-[#8B8B8B]">Add Step</span>
            </button>
          </div>

          {/* Flow Controls */}
          <div className="px-6 pb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <button className="flex items-center px-4 py-2 bg-[#F8F6F3] rounded-lg">
                  <Shuffle className="w-4 h-4 text-[#8B8B8B] mr-2" />
                  <span className="text-[14px] font-medium text-[#8B8B8B]">Shuffle</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#8B8B8B]" />
                  <span className="text-[14px] font-medium text-[#8B8B8B]">
                    {totalDuration} min total
                  </span>
                </div>
                
                <button className="flex items-center px-4 py-2 bg-[#4A5D4F] rounded-lg">
                  <span className="text-[14px] font-medium text-white mr-2">Start Flow</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoutineBuilderVariation2;