import React from 'react';
import { X, ChevronDown, Image, Video, Paperclip, Type, FileImage, Video as VideoIcon, Camera, Home, Building, TreePine, Plus, Bell, User } from 'lucide-react';

const CreatePost = () => {
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
        <X className="w-6 h-6 text-black" />
        <h1 className="text-black text-lg font-semibold">Create A Post</h1>
        <button className="text-gray-400 text-lg font-medium">Post</button>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-3 flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">JM</span>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-md">
          <span className="text-black text-sm font-medium">Public</span>
          <ChevronDown className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Text Input Area */}
      <div className="px-4 py-4">
        <div className="min-h-[200px] bg-white">
          <textarea 
            placeholder="What's on your heart"
            className="w-full h-full text-gray-400 text-lg bg-transparent border-none outline-none resize-none"
            style={{ fontFamily: 'inherit' }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-200 mb-6"></div>
      <div className="mx-auto w-16 h-1 bg-gray-300 rounded-full mb-6"></div>

      {/* Action Options */}
      <div className="px-4 space-y-4 mb-6">
        {/* Add A Photo */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Image className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Add A Photo</span>
        </div>

        {/* Take A Video */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Take A Video</span>
        </div>

        {/* Create a Verse */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Paperclip className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Create a Verse</span>
        </div>

        {/* Background Color */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Type className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Background Color</span>
        </div>

        {/* Gif */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">GIF</span>
          </div>
          <span className="text-black text-lg">Gif</span>
        </div>

        {/* Live Video */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <VideoIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Live Video</span>
        </div>

        {/* Camera */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <span className="text-black text-lg">Camera</span>
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

export default CreatePost;