import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Mic, MicOff, ArrowRight, ArrowLeft, BookOpen, Edit3, FileText, Heart, Sparkles, User, Settings } from 'lucide-react';

const GuidedPrayer3 = () => {
  const [currentView, setCurrentView] = useState('journey'); // journey, praying, complete
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [prayerText, setPrayerText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const prayerJourney = [
    {
      id: 'welcome',
      title: 'Welcome & Preparation',
      type: 'guided',
      icon: User,
      color: '#5B8FA8',
      duration: 2,
      content: {
        voiceText: 'Welcome to this guided prayer journey. Take a moment to find a comfortable position and quiet your heart before the Lord.',
        scriptureReflection: 'Come to me, all you who are weary and burdened, and I will give you rest.',
        scriptureRef: 'Matthew 11:28',
        interaction: 'Take three deep breaths and center yourself in God\'s presence.'
      }
    },
    {
      id: 'adoration',
      title: 'Adoration & Praise',
      type: 'responsive',
      icon: Heart,
      color: '#D4A574',
      duration: 4,
      content: {
        voiceText: 'Let us begin by praising God for who He is. Think about His character, His love, His faithfulness.',
        scriptureReflection: 'Great is the Lord and most worthy of praise; his greatness no one can fathom.',
        scriptureRef: 'Psalm 145:3',
        prompts: [
          'God, I praise You for Your love that never fails...',
          'Lord, I worship You for Your faithfulness in my life...',
          'Father, I adore You for Your amazing grace...'
        ],
        interaction: 'Choose a praise prompt or speak your own words of adoration.'
      }
    },
    {
      id: 'confession',
      title: 'Confession & Forgiveness',
      type: 'reflective',
      icon: BookOpen,
      color: '#8B7D8B',
      duration: 3,
      content: {
        voiceText: 'In God\'s loving presence, we can honestly confess our shortcomings and receive His forgiveness.',
        scriptureReflection: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
        scriptureRef: '1 John 1:9',
        interaction: 'Take time to silently confess any areas where you need God\'s forgiveness.'
      }
    },
    {
      id: 'thanksgiving',
      title: 'Thanksgiving & Gratitude',
      type: 'interactive',
      icon: Sparkles,
      color: '#6B8E23',
      duration: 3,
      content: {
        voiceText: 'Now let\'s turn our hearts to gratitude. What has God done in your life that you can thank Him for?',
        scriptureReflection: 'Give thanks to the Lord, for he is good; his love endures forever.',
        scriptureRef: 'Psalm 107:1',
        prompts: [
          'God, I thank You for my family and friends...',
          'Lord, I\'m grateful for Your provision in my life...',
          'Father, thank You for the gift of salvation...'
        ],
        interaction: 'Share three specific things you\'re thankful for today.'
      }
    },
    {
      id: 'supplication',
      title: 'Prayers & Requests',
      type: 'personal',
      icon: Edit3,
      color: '#B85C7A',
      duration: 5,
      content: {
        voiceText: 'This is your time to bring your personal prayers and requests before God. He loves to hear from you.',
        scriptureReflection: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
        scriptureRef: 'Philippians 4:6',
        categories: [
          'Personal needs',
          'Family & friends',
          'Health & healing',
          'Work & provision',
          'Spiritual growth'
        ],
        interaction: 'Speak or write your personal prayers and requests.'
      }
    },
    {
      id: 'intercession',
      title: 'Intercession for Others',
      type: 'community',
      icon: Heart,
      color: '#4A8B8B',
      duration: 3,
      content: {
        voiceText: 'Let\'s pray for others - your family, friends, community, and the world around you.',
        scriptureReflection: 'I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people.',
        scriptureRef: '1 Timothy 2:1',
        suggestions: [
          'Pray for world leaders and peace',
          'Pray for your local community',
          'Pray for those who are suffering',
          'Pray for missionaries and ministers'
        ],
        interaction: 'Choose who you\'d like to intercede for today.'
      }
    },
    {
      id: 'meditation',
      title: 'Meditation & Listening',
      type: 'contemplative',
      icon: BookOpen,
      color: '#5B8FA8',
      duration: 4,
      content: {
        voiceText: 'Now let\'s be still and listen. This is your time to meditate on God\'s word and listen for His voice.',
        scriptureReflection: 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.',
        scriptureRef: 'Psalm 46:10',
        meditation: 'Focus on the phrase "Be still and know that I am God." Let this truth wash over you.',
        interaction: 'Sit quietly and meditate on God\'s presence with you.'
      }
    },
    {
      id: 'blessing',
      title: 'Blessing & Sending',
      type: 'declaration',
      icon: Sparkles,
      color: '#D4A574',
      duration: 2,
      content: {
        voiceText: 'As we conclude, receive God\'s blessing and declare His truth over your life.',
        scriptureReflection: 'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.',
        scriptureRef: 'Numbers 6:24-25',
        declarations: [
          'I am loved by God',
          'I am equipped for His purposes',
          'His peace goes with me',
          'His strength sustains me'
        ],
        interaction: 'Declare God\'s truth over your life as you go forward.'
      }
    }
  ];

  const currentSegmentData = prayerJourney[currentSegment];
  const progress = ((currentSegment + 1) / prayerJourney.length) * 100;

  const startPrayerJourney = () => {
    setCurrentView('praying');
    setCurrentSegment(0);
    setIsPlaying(true);
  };

  const nextSegment = () => {
    if (currentSegment < prayerJourney.length - 1) {
      setCurrentSegment(currentSegment + 1);
    } else {
      setCurrentView('complete');
      setIsPlaying(false);
    }
  };

  const prevSegment = () => {
    if (currentSegment > 0) {
      setCurrentSegment(currentSegment - 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    setMicEnabled(!isRecording);
  };

  const goBackToJourney = () => {
    setCurrentView('journey');
    setCurrentSegment(0);
    setIsPlaying(false);
  };

  if (currentView === 'journey') {
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
            <h1 className="text-white text-2xl font-semibold mb-2">Prayer Journey</h1>
            <p className="text-white text-sm opacity-80">Interactive guided prayer experience</p>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Your Prayer Path</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#2C2C2C]">Total Duration</span>
                <span className="text-sm text-[#8B8B8B]">26 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2C2C2C]">Interactive Steps</span>
                <span className="text-sm text-[#8B8B8B]">{prayerJourney.length} segments</span>
              </div>
            </div>
          </div>

          {/* Journey Steps */}
          <div className="space-y-4">
            {prayerJourney.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <div
                  key={segment.id}
                  className="bg-white rounded-xl p-4 shadow-sm border-l-4"
                  style={{ borderLeftColor: segment.color }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#F8F6F3] flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-[#8B8B8B]">{index + 1}</span>
                      </div>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${segment.color}20` }}
                      >
                        <IconComponent 
                          className="w-5 h-5"
                          style={{ color: segment.color }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">{segment.title}</h3>
                      <p className="text-sm text-[#8B8B8B] mb-2 capitalize">{segment.type} • {segment.duration} min</p>
                      <p className="text-sm text-[#8B8B8B] leading-relaxed">
                        {segment.content.scriptureReflection}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Settings */}
          <div className="mt-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Settings</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2C2C2C]">Voice Guidance</span>
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    voiceEnabled ? 'bg-[#5B8FA8]' : 'bg-[#E0E0E0]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      voiceEnabled ? 'transform translate-x-7' : 'transform translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2C2C2C]">Microphone Input</span>
                <button
                  onClick={() => setMicEnabled(!micEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    micEnabled ? 'bg-[#5B8FA8]' : 'bg-[#E0E0E0]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      micEnabled ? 'transform translate-x-7' : 'transform translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#2C2C2C]">Volume</span>
                  <span className="text-sm text-[#8B8B8B]">{Math.round(volume * 100)}%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <VolumeX className="w-4 h-4 text-[#8B8B8B]" />
                  <div className="flex-1 h-2 bg-[#F8F6F3] rounded-full">
                    <div 
                      className="h-full bg-[#5B8FA8] rounded-full transition-all"
                      style={{ width: `${volume * 100}%` }}
                    ></div>
                  </div>
                  <Volume2 className="w-4 h-4 text-[#8B8B8B]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-[#FDFCF8] border-t border-[#E0E0E0]">
          <button
            onClick={startPrayerJourney}
            className="w-full py-4 bg-[#5B8FA8] text-white rounded-xl font-medium hover:bg-[#4A7A8A] transition-colors flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Begin Prayer Journey</span>
          </button>
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

  if (currentView === 'praying') {
    const IconComponent = currentSegmentData.icon;

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
              onClick={goBackToJourney}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="text-center">
              <h1 className="text-white text-lg font-semibold">{currentSegmentData.title}</h1>
              <p className="text-white text-sm opacity-80">
                {currentSegment + 1} of {prayerJourney.length}
              </p>
            </div>
            <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-white" />
            </button>
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
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Segment Icon */}
          <div className="text-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${currentSegmentData.color}20` }}
            >
              <IconComponent 
                className="w-8 h-8"
                style={{ color: currentSegmentData.color }}
              />
            </div>
            <span 
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: `${currentSegmentData.color}20`,
                color: currentSegmentData.color
              }}
            >
              {currentSegmentData.type}
            </span>
          </div>

          {/* Voice Guidance */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Volume2 className="w-4 h-4 text-[#5B8FA8]" />
              <span className="text-sm font-medium text-[#2C2C2C]">Voice Guidance</span>
            </div>
            <p className="text-[#2C2C2C] text-sm leading-relaxed">
              {currentSegmentData.content.voiceText}
            </p>
          </div>

          {/* Scripture */}
          <div className="bg-[#4A8B8B] bg-opacity-5 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#4A8B8B]" />
              <span className="text-sm font-medium text-[#2C2C2C]">Scripture</span>
            </div>
            <p className="text-[#2C2C2C] text-sm leading-relaxed mb-2 italic">
              "{currentSegmentData.content.scriptureReflection}"
            </p>
            <p className="text-[#4A8B8B] text-sm font-medium">
              {currentSegmentData.content.scriptureRef}
            </p>
          </div>

          {/* Interactive Elements */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Edit3 className="w-4 h-4 text-[#5B8FA8]" />
              <span className="text-sm font-medium text-[#2C2C2C]">Your Response</span>
            </div>
            <p className="text-[#8B8B8B] text-sm mb-3">
              {currentSegmentData.content.interaction}
            </p>

            {/* Prompts for responsive segments */}
            {currentSegmentData.content.prompts && (
              <div className="space-y-2 mb-4">
                {currentSegmentData.content.prompts.map((prompt, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 bg-[#F8F6F3] rounded-lg hover:bg-[#E0E0E0] transition-colors"
                  >
                    <p className="text-sm text-[#2C2C2C]">{prompt}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Text Input */}
            <textarea
              value={prayerText}
              onChange={(e) => setPrayerText(e.target.value)}
              placeholder="Type your prayer here..."
              className="w-full h-24 p-3 border border-[#E0E0E0] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5B8FA8] focus:border-transparent text-sm"
            />

            {/* Recording Button */}
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={toggleRecording}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? 'bg-[#B85C57] text-white'
                    : 'bg-[#F8F6F3] text-[#8B8B8B] hover:bg-[#E0E0E0]'
                }`}
              >
                {isRecording ? (
                  <>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Recording...</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    <span>Record Prayer</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-[#FDFCF8] border-t border-[#E0E0E0]">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSegment}
              disabled={currentSegment === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                currentSegment === 0
                  ? 'bg-[#F8F6F3] text-[#8B8B8B] cursor-not-allowed'
                  : 'bg-[#F8F6F3] text-[#2C2C2C] hover:bg-[#E0E0E0]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-[#5B8FA8] rounded-full flex items-center justify-center hover:bg-[#4A7A8A] transition-colors shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </button>
            
            <button
              onClick={nextSegment}
              className="flex items-center space-x-2 px-4 py-2 bg-[#5B8FA8] text-white rounded-lg font-medium hover:bg-[#4A7A8A] transition-colors"
            >
              <span>{currentSegment === prayerJourney.length - 1 ? 'Finish' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
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
          <div className="text-4xl mb-4">✨</div>
          <h1 className="text-white text-2xl font-semibold mb-2">Journey Complete</h1>
          <p className="text-white text-sm opacity-80">
            You completed the full prayer journey
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl p-6 shadow-sm text-center mb-8">
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-3">
            "Now may the Lord of peace himself give you peace at all times and in every way."
          </h2>
          <p className="text-[#5B8FA8] text-sm font-medium">2 Thessalonians 3:16</p>
        </div>

        {/* Prayer Summary */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6 w-full">
          <h3 className="text-[#2C2C2C] font-semibold mb-3">Your Prayer Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[#8B8B8B]">Duration</span>
              <span className="text-sm text-[#2C2C2C]">26 minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#8B8B8B]">Segments Completed</span>
              <span className="text-sm text-[#2C2C2C]">{prayerJourney.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#8B8B8B]">Prayers Recorded</span>
              <span className="text-sm text-[#2C2C2C]">3</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full">
          <button
            onClick={goBackToJourney}
            className="w-full py-4 bg-[#5B8FA8] text-white rounded-xl font-medium hover:bg-[#4A7A8A] transition-colors"
          >
            Start New Journey
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            Save Prayer Recording
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            Share Prayer Experience
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

export default GuidedPrayer3;