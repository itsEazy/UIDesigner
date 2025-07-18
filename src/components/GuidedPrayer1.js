import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Clock, BookOpen, Heart, MessageCircle, Settings, X, Plus, Minus, Check } from 'lucide-react';

const GuidedPrayer1 = () => {
  const [currentStep, setCurrentStep] = useState('setup'); // setup, praying, complete
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [timer, setTimer] = useState(10);
  const [sounds, setSounds] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isPaused, setIsPaused] = useState(false);

  const prayerFeatures = [
    {
      id: 'scripture',
      name: 'Scripture Reading',
      icon: BookOpen,
      color: '#4A8B8B',
      description: 'Include relevant Bible verses',
      duration: 2
    },
    {
      id: 'reflection',
      name: 'Reflection',
      icon: Heart,
      color: '#5B8FA8',
      description: 'Silent contemplation time',
      duration: 3
    },
    {
      id: 'prayer',
      name: 'Guided Prayer',
      icon: MessageCircle,
      color: '#6B8E23',
      description: 'Spoken prayer prompts',
      duration: 4
    },
    {
      id: 'declaration',
      name: 'Declarations',
      icon: Plus,
      color: '#D4A574',
      description: 'Faith declarations and affirmations',
      duration: 2
    }
  ];

  const soundOptions = [
    { id: 'rain', name: 'Gentle Rain', emoji: '🌧️' },
    { id: 'ocean', name: 'Ocean Waves', emoji: '🌊' },
    { id: 'birds', name: 'Birds Singing', emoji: '🐦' },
    { id: 'instrumental', name: 'Soft Instrumental', emoji: '🎵' },
    { id: 'silence', name: 'Silence', emoji: '🤫' }
  ];

  const prayerTopics = [
    { id: 'peace', name: 'Peace', color: '#5B8FA8', emoji: '🕊️' },
    { id: 'healing', name: 'Healing', color: '#6B8E23', emoji: '💚' },
    { id: 'strength', name: 'Strength', color: '#D4A574', emoji: '💪' },
    { id: 'guidance', name: 'Guidance', color: '#8B7D8B', emoji: '🧭' },
    { id: 'gratitude', name: 'Gratitude', color: '#D4A574', emoji: '🙏' }
  ];

  const toggleFeature = (featureId) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const adjustTimer = (amount) => {
    setTimer(prev => Math.max(5, Math.min(60, prev + amount)));
  };

  const startPrayer = () => {
    setCurrentStep('praying');
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const pausePrayer = () => {
    setIsPaused(!isPaused);
    setIsPlaying(!isPaused);
  };

  const resetPrayer = () => {
    setCurrentStep('setup');
    setIsPlaying(false);
    setCurrentTime(0);
    setIsPaused(false);
  };

  const completePrayer = () => {
    setCurrentStep('complete');
    setIsPlaying(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateTotalTime = () => {
    return selectedFeatures.reduce((total, featureId) => {
      const feature = prayerFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.duration : 0);
    }, 0);
  };

  if (currentStep === 'setup') {
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
            <h1 className="text-white text-2xl font-semibold mb-2">Guided Prayer</h1>
            <p className="text-white text-sm opacity-80">Create your personal prayer experience</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Prayer Topic Selection */}
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Choose Your Focus</h2>
            <div className="grid grid-cols-2 gap-3">
              {prayerTopics.map((topic) => (
                <button
                  key={topic.id}
                  className="p-4 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-[#5B8FA8] transition-colors"
                  style={{ borderColor: selectedFeatures.includes(topic.id) ? topic.color : 'transparent' }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{topic.emoji}</div>
                    <div className="text-sm font-medium text-[#2C2C2C]">{topic.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prayer Features */}
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Prayer Elements</h2>
            <div className="space-y-3">
              {prayerFeatures.map((feature) => {
                const IconComponent = feature.icon;
                const isSelected = selectedFeatures.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      isSelected 
                        ? 'bg-white border-[#5B8FA8] shadow-sm' 
                        : 'bg-[#F8F6F3] border-transparent hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${feature.color}20` }}
                        >
                          <IconComponent 
                            className="w-5 h-5"
                            style={{ color: feature.color }}
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-[#2C2C2C]">{feature.name}</div>
                          <div className="text-sm text-[#8B8B8B]">{feature.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-[#8B8B8B]">{feature.duration}min</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#5B8FA8] bg-[#5B8FA8]' : 'border-[#8B8B8B]'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timer Settings */}
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Timer Settings</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#5B8FA8]" />
                  <span className="font-medium text-[#2C2C2C]">Duration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => adjustTimer(-5)}
                    className="w-8 h-8 rounded-full bg-[#F8F6F3] flex items-center justify-center hover:bg-[#E0E0E0] transition-colors"
                  >
                    <Minus className="w-4 h-4 text-[#8B8B8B]" />
                  </button>
                  <span className="font-bold text-[#2C2C2C] text-xl w-16 text-center">
                    {timer}min
                  </span>
                  <button
                    onClick={() => adjustTimer(5)}
                    className="w-8 h-8 rounded-full bg-[#F8F6F3] flex items-center justify-center hover:bg-[#E0E0E0] transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#8B8B8B]" />
                  </button>
                </div>
              </div>
              <div className="text-center text-sm text-[#8B8B8B]">
                Estimated time: {calculateTotalTime()} minutes
              </div>
            </div>
          </div>

          {/* Sound Settings */}
          <div className="mb-6">
            <h2 className="text-[#2C2C2C] text-lg font-semibold mb-3">Background Sound</h2>
            <div className="grid grid-cols-2 gap-3">
              {soundOptions.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => setSounds(sound.id)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    sounds === sound.id
                      ? 'bg-white border-[#5B8FA8] shadow-sm'
                      : 'bg-[#F8F6F3] border-transparent hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg mb-1">{sound.emoji}</div>
                    <div className="text-sm font-medium text-[#2C2C2C]">{sound.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-[#FDFCF8] border-t border-[#E0E0E0]">
          <button
            onClick={startPrayer}
            disabled={selectedFeatures.length === 0}
            className={`w-full py-4 rounded-xl font-medium text-white transition-all ${
              selectedFeatures.length > 0
                ? 'bg-[#5B8FA8] hover:bg-[#4A7A8A] shadow-sm'
                : 'bg-[#8B8B8B] cursor-not-allowed'
            }`}
          >
            Begin Prayer Session
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

  if (currentStep === 'praying') {
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
          <div className="flex items-center justify-between">
            <button
              onClick={resetPrayer}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="text-center">
              <h1 className="text-white text-lg font-semibold">Prayer Session</h1>
              <p className="text-white text-sm opacity-80">
                {formatTime(timer * 60 - currentTime)} remaining
              </p>
            </div>
            <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Prayer Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Timer Circle */}
          <div className="relative mb-8">
            <div className="w-48 h-48 rounded-full border-4 border-[#F8F6F3] relative">
              <div 
                className="absolute inset-0 rounded-full border-4 border-[#5B8FA8] transform -rotate-90 transition-all duration-1000"
                style={{
                  clipPath: `polygon(50% 0%, 50% 50%, ${50 + 50 * Math.cos((currentTime / (timer * 60)) * 2 * Math.PI - Math.PI/2)}% ${50 + 50 * Math.sin((currentTime / (timer * 60)) * 2 * Math.PI - Math.PI/2)}%, 50% 50%)`
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2C2C2C] mb-2">
                    {formatTime(timer * 60 - currentTime)}
                  </div>
                  <div className="text-sm text-[#8B8B8B]">
                    {isPaused ? 'Paused' : 'Praying'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Prayer Phase */}
          <div className="text-center mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#2C2C2C] mb-3">Scripture Reading</h2>
              <p className="text-[#8B8B8B] text-sm mb-4">
                "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
              </p>
              <p className="text-[#5B8FA8] text-sm font-medium">Psalm 46:10</p>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={() => setVolume(volume > 0 ? 0 : 0.7)}
              className="p-2 bg-white rounded-full shadow-sm"
            >
              {volume > 0 ? (
                <Volume2 className="w-5 h-5 text-[#5B8FA8]" />
              ) : (
                <VolumeX className="w-5 h-5 text-[#8B8B8B]" />
              )}
            </button>
            <div className="flex-1 h-2 bg-[#F8F6F3] rounded-full">
              <div 
                className="h-full bg-[#5B8FA8] rounded-full transition-all"
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
            <span className="text-sm text-[#8B8B8B] w-8">{Math.round(volume * 100)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-[84px] left-0 right-0 px-4 py-4 bg-[#FDFCF8] border-t border-[#E0E0E0]">
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={resetPrayer}
              className="w-12 h-12 bg-[#F8F6F3] rounded-full flex items-center justify-center hover:bg-[#E0E0E0] transition-colors"
            >
              <RotateCcw className="w-6 h-6 text-[#8B8B8B]" />
            </button>
            <button
              onClick={pausePrayer}
              className="w-16 h-16 bg-[#5B8FA8] rounded-full flex items-center justify-center hover:bg-[#4A7A8A] transition-colors shadow-lg"
            >
              {isPaused ? (
                <Play className="w-8 h-8 text-white ml-1" />
              ) : (
                <Pause className="w-8 h-8 text-white" />
              )}
            </button>
            <button
              onClick={completePrayer}
              className="w-12 h-12 bg-[#6B8E23] rounded-full flex items-center justify-center hover:bg-[#5A7A1F] transition-colors"
            >
              <Check className="w-6 h-6 text-white" />
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
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-[#6B8E23]" />
          </div>
          <h1 className="text-white text-2xl font-semibold mb-2">Prayer Complete</h1>
          <p className="text-white text-sm opacity-80">Well done! You spent {timer} minutes in prayer</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl p-6 shadow-sm text-center mb-8">
          <h2 className="text-xl font-semibold text-[#2C2C2C] mb-3">
            "The Lord your God is with you, the Mighty Warrior who saves."
          </h2>
          <p className="text-[#5B8FA8] text-sm font-medium">Zephaniah 3:17</p>
        </div>

        <div className="space-y-4 w-full">
          <button
            onClick={resetPrayer}
            className="w-full py-4 bg-[#5B8FA8] text-white rounded-xl font-medium hover:bg-[#4A7A8A] transition-colors"
          >
            Start New Prayer Session
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            Share Your Prayer Time
          </button>
          
          <button className="w-full py-4 bg-[#F8F6F3] text-[#8B8B8B] rounded-xl font-medium hover:bg-[#E0E0E0] transition-colors">
            View Prayer History
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

export default GuidedPrayer1;