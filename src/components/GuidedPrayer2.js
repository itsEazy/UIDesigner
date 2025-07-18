import React, { useState } from 'react';
import { Play, Pause, Clock, BookOpen, Heart, Star, Users, ChevronRight, ArrowLeft, Volume2, Mic } from 'lucide-react';

const GuidedPrayer2 = () => {
  const [currentView, setCurrentView] = useState('templates'); // templates, prayer, complete
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const prayerTemplates = [
    {
      id: 'morning',
      title: 'Morning Devotion',
      duration: '12 minutes',
      description: 'Start your day with gratitude and surrender',
      color: '#D4A574',
      emoji: '🌅',
      popularity: 4.9,
      users: '12.3k',
      steps: [
        {
          type: 'welcome',
          title: 'Welcome to Morning Prayer',
          content: 'Take a deep breath and center your heart on God.',
          duration: 1
        },
        {
          type: 'scripture',
          title: 'Opening Scripture',
          content: 'This is the day the Lord has made; we will rejoice and be glad in it.',
          reference: 'Psalm 118:24',
          duration: 2
        },
        {
          type: 'reflection',
          title: 'Gratitude Reflection',
          content: 'Think of three things you\'re grateful for today. Take a moment to thank God for each one.',
          duration: 3
        },
        {
          type: 'prayer',
          title: 'Prayer of Surrender',
          content: 'Lord, I surrender this day to You. Guide my steps and help me to walk in Your ways.',
          duration: 4
        },
        {
          type: 'declaration',
          title: 'Daily Declaration',
          content: 'I can do all things through Christ who strengthens me.',
          reference: 'Philippians 4:13',
          duration: 2
        }
      ]
    },
    {
      id: 'healing',
      title: 'Prayer for Healing',
      duration: '15 minutes',
      description: 'Find comfort and strength in God\'s healing power',
      color: '#6B8E23',
      emoji: '💚',
      popularity: 4.8,
      users: '8.7k',
      steps: [
        {
          type: 'welcome',
          title: 'Coming to the Healer',
          content: 'Jesus welcomes you with open arms. Come as you are.',
          duration: 1
        },
        {
          type: 'scripture',
          title: 'God\'s Promise of Healing',
          content: 'He heals the brokenhearted and binds up their wounds.',
          reference: 'Psalm 147:3',
          duration: 2
        },
        {
          type: 'reflection',
          title: 'Reflect on God\'s Care',
          content: 'Remember times when God has carried you through difficult seasons.',
          duration: 4
        },
        {
          type: 'prayer',
          title: 'Prayer for Restoration',
          content: 'Father, I bring my pain to You. Touch every area that needs healing.',
          duration: 6
        },
        {
          type: 'declaration',
          title: 'Declaration of Faith',
          content: 'By His stripes, I am healed. God\'s love makes me whole.',
          reference: 'Isaiah 53:5',
          duration: 2
        }
      ]
    },
    {
      id: 'peace',
      title: 'Finding Peace',
      duration: '10 minutes',
      description: 'Release anxiety and find God\'s perfect peace',
      color: '#5B8FA8',
      emoji: '🕊️',
      popularity: 4.7,
      users: '15.2k',
      steps: [
        {
          type: 'welcome',
          title: 'Enter His Rest',
          content: 'Come to Me, all you who are weary and burdened.',
          duration: 1
        },
        {
          type: 'scripture',
          title: 'Promise of Peace',
          content: 'Peace I leave with you; my peace I give you. Do not let your hearts be troubled.',
          reference: 'John 14:27',
          duration: 2
        },
        {
          type: 'reflection',
          title: 'Release Your Worries',
          content: 'Cast all your anxiety on Him because He cares for you.',
          duration: 3
        },
        {
          type: 'prayer',
          title: 'Prayer for Peace',
          content: 'Lord, calm my anxious heart. Fill me with Your perfect peace.',
          duration: 3
        },
        {
          type: 'declaration',
          title: 'Walking in Peace',
          content: 'I will keep in perfect peace those whose minds are steadfast.',
          reference: 'Isaiah 26:3',
          duration: 1
        }
      ]
    },
    {
      id: 'strength',
      title: 'Strength & Courage',
      duration: '8 minutes',
      description: 'Find strength for today and hope for tomorrow',
      color: '#8B7D8B',
      emoji: '💪',
      popularity: 4.6,
      users: '6.8k',
      steps: [
        {
          type: 'welcome',
          title: 'God Is Your Strength',
          content: 'The Lord is my strength and my shield; my heart trusts in him.',
          duration: 1
        },
        {
          type: 'scripture',
          title: 'Source of Strength',
          content: 'Be strong and courageous. Do not be afraid; do not be discouraged.',
          reference: 'Joshua 1:9',
          duration: 2
        },
        {
          type: 'prayer',
          title: 'Prayer for Strength',
          content: 'Lord, when I am weak, You are strong. Renew my strength today.',
          duration: 3
        },
        {
          type: 'declaration',
          title: 'Declaration of Courage',
          content: 'I can do all things through Christ who strengthens me.',
          reference: 'Philippians 4:13',
          duration: 2
        }
      ]
    }
  ];

  const getStepIcon = (type) => {
    switch (type) {
      case 'scripture': return BookOpen;
      case 'reflection': return Heart;
      case 'prayer': return Heart;
      case 'declaration': return Star;
      default: return Play;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startPrayer = (template) => {
    setSelectedTemplate(template);
    setCurrentView('prayer');
    setCurrentStep(0);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const nextStep = () => {
    if (currentStep < selectedTemplate.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentView('complete');
      setIsPlaying(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goBackToTemplates = () => {
    setCurrentView('templates');
    setSelectedTemplate(null);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  if (currentView === 'templates') {
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
        <div className="mt-[44px] bg-[#5B8FA8] px-4 py-6">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold mb-2">Prayer Templates</h1>
            <p className="text-white text-sm opacity-80">Choose from our curated prayer experiences</p>
          </div>
        </div>

        {/* Featured Template */}
        <div className="px-4 py-6">
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Today's Featured</h2>
            <div 
              className="bg-white rounded-xl p-6 shadow-sm border-l-4"
              style={{ borderLeftColor: prayerTemplates[0].color }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{prayerTemplates[0].emoji}</div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">{prayerTemplates[0].title}</h3>
                    <p className="text-sm text-[#8B8B8B]">{prayerTemplates[0].description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B8B8B]" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-[#8B8B8B]" />
                    <span className="text-sm text-[#8B8B8B]">{prayerTemplates[0].duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-[#8B8B8B]" />
                    <span className="text-sm text-[#8B8B8B]">{prayerTemplates[0].users}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#E6B85C]" />
                    <span className="text-sm text-[#8B8B8B]">{prayerTemplates[0].popularity}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => startPrayer(prayerTemplates[0])}
                className="w-full py-3 bg-[#5B8FA8] text-white rounded-lg font-medium hover:bg-[#4A7A8A] transition-colors"
              >
                Start Prayer
              </button>
            </div>
          </div>

          {/* All Templates */}
          <div>
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">All Prayer Templates</h2>
            <div className="space-y-4">
              {prayerTemplates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white rounded-xl p-4 shadow-sm border-l-4"
                  style={{ borderLeftColor: template.color }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="text-2xl">{template.emoji}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#2C2C2C]">{template.title}</h3>
                        <p className="text-sm text-[#8B8B8B] mb-2">{template.description}</p>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#8B8B8B]" />
                            <span className="text-xs text-[#8B8B8B]">{template.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3 text-[#8B8B8B]" />
                            <span className="text-xs text-[#8B8B8B]">{template.users}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-[#E6B85C]" />
                            <span className="text-xs text-[#8B8B8B]">{template.popularity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => startPrayer(template)}
                      className="ml-4 px-4 py-2 bg-[#F8F6F3] text-[#8B8B8B] rounded-lg text-sm font-medium hover:bg-[#5B8FA8] hover:text-white transition-colors"
                    >
                      Pray
                    </button>
                  </div>
                </div>
              ))}
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
            <div className="w-6 h-6 bg-[#5B8FA8] rounded"></div>
            <span className="text-xs text-[#5B8FA8] font-medium">Prayer</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
            <span className="text-xs text-[#8B8B8B]">Profile</span>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'prayer' && selectedTemplate) {
    const currentStepData = selectedTemplate.steps[currentStep];
    const StepIcon = getStepIcon(currentStepData.type);
    const progress = ((currentStep + 1) / selectedTemplate.steps.length) * 100;

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
        <div className="mt-[44px] bg-[#5B8FA8] px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={goBackToTemplates}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="text-center">
              <h1 className="text-white text-lg font-semibold">{selectedTemplate.title}</h1>
              <p className="text-white text-sm opacity-80">
                Step {currentStep + 1} of {selectedTemplate.steps.length}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-white" />
              <Mic className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Prayer Content */}
        <div className="flex-1 flex flex-col px-4 py-6">
          {/* Step Icon */}
          <div className="text-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${selectedTemplate.color}20` }}
            >
              <StepIcon 
                className="w-8 h-8"
                style={{ color: selectedTemplate.color }}
              />
            </div>
            <h2 className="text-xl font-semibold text-[#2C2C2C] mb-2">
              {currentStepData.title}
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-[#2C2C2C] text-lg leading-relaxed mb-4">
                {currentStepData.content}
              </p>
              
              {currentStepData.reference && (
                <p className="text-[#5B8FA8] text-sm font-medium">
                  - {currentStepData.reference}
                </p>
              )}
            </div>
          </div>

          {/* Timer */}
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-[#2C2C2C] mb-2">
              {formatTime(currentStepData.duration * 60 - currentTime)}
            </div>
            <div className="text-sm text-[#8B8B8B]">
              {isPlaying ? 'Praying' : 'Paused'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-[#FDFCF8] border-t border-[#E0E0E0]">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'bg-[#F8F6F3] text-[#8B8B8B] cursor-not-allowed'
                  : 'bg-[#F8F6F3] text-[#2C2C2C] hover:bg-[#E0E0E0]'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-[#5B8FA8] rounded-full flex items-center justify-center hover:bg-[#4A7A8A] transition-colors shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
            
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-[#5B8FA8] text-white rounded-lg font-medium hover:bg-[#4A7A8A] transition-colors"
            >
              {currentStep === selectedTemplate.steps.length - 1 ? 'Finish' : 'Next'}
            </button>
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
            <div className="w-6 h-6 bg-[#5B8FA8] rounded"></div>
            <span className="text-xs text-[#5B8FA8] font-medium">Prayer</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
            <span className="text-xs text-[#8B8B8B]">Profile</span>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="mt-[44px] bg-[#6B8E23] px-4 py-6">
        <div className="text-center">
          <div className="text-4xl mb-4">🙏</div>
          <h1 className="text-white text-2xl font-semibold mb-2">Prayer Complete</h1>
          <p className="text-white text-sm opacity-80">
            You completed {selectedTemplate?.title}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl p-6 shadow-sm text-center mb-8">
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-3">
            "The Lord bless you and keep you; the Lord make his face shine on you."
          </h2>
          <p className="text-[#5B8FA8] text-sm font-medium">Numbers 6:24-25</p>
        </div>

        <div className="space-y-4 w-full">
          <button
            onClick={goBackToTemplates}
            className="w-full py-4 bg-[#5B8FA8] text-white rounded-xl font-medium hover:bg-[#4A7A8A] transition-colors"
          >
            Choose Another Prayer
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            Share Your Prayer Experience
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            Add to Favorites
          </button>
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
          <div className="w-6 h-6 bg-[#5B8FA8] rounded"></div>
          <span className="text-xs text-[#5B8FA8] font-medium">Prayer</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-6 bg-[#8B8B8B] rounded"></div>
          <span className="text-xs text-[#8B8B8B]">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default GuidedPrayer2;