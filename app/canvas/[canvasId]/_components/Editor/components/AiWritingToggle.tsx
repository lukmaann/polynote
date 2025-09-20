"use client";

import { Switch } from "@/components/ui/switch";

export function AiWritingToggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-gray-200/60 bg-white/80 hover:bg-white hover:border-gray-300/60 transition-all duration-200 backdrop-blur-sm">
      {/* Subtle glow effect when enabled */}
      {enabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-lg pointer-events-none" />
      )}
      
      <div className="flex items-center justify-center w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-blue-600 shadow-sm">
        <span className="text-white text-xs">✨</span>
      </div>
      
      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors whitespace-nowrap">
        AI Writing
      </span>
      
      <Switch 
        checked={enabled} 
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-blue-600 scale-75 "
      />
    </div>
  );
}