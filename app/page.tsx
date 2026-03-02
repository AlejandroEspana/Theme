'use client';

import { useState } from 'react';

interface AppearanceSettings {
  language: string;
  theme: 'auto' | 'light' | 'dark';
  accentColor: string;
  reduceMotion: boolean;
  autoPlay: boolean;
  highQualityPhoto: boolean;
}

const THEME_OPTIONS = [
  { id: 'auto', label: 'Auto' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
];

const ACCENT_COLORS = [
  { id: 'coral', hex: '#EF9A9A', name: 'Coral' },
  { id: 'yellow', hex: '#FDD835', name: 'Yellow' },
  { id: 'green', hex: '#81C784', name: 'Green' },
  { id: 'purple', hex: '#7C4DFF', name: 'Purple' },
  { id: 'pink', hex: '#F48FB1', name: 'Pink' },
];

function ThemePreview({ type }: { type: 'auto' | 'light' | 'dark' }) {
  if (type === 'auto') {
    return (
      <div className="h-28 w-full rounded-lg bg-linear-to-br from-purple-100 to-purple-300 p-3">
        <div className="flex h-full w-full flex-col">
          <div className="mb-2 flex gap-1">
            <div className="h-2 w-8 rounded-full bg-purple-400 opacity-60" />
            <div className="h-2 w-4 rounded-full bg-purple-400 opacity-40" />
          </div>
          <div className="flex flex-1 gap-2">
            <div className="w-1/3 rounded bg-purple-400 opacity-60" />
            <div className="flex-1 space-y-1">
              <div className="h-1 rounded bg-purple-400 opacity-50" />
              <div className="h-1 w-4/5 rounded bg-purple-400 opacity-40" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'light') {
    return (
      <div className="relative h-28 w-full rounded-lg border-2 border-purple-500 bg-white p-3">
        <div className="flex h-full flex-col">
          <div className="mb-2 flex gap-1">
            <div className="h-2 w-8 rounded-full bg-gray-300" />
            <div className="h-2 w-4 rounded-full bg-gray-300" />
          </div>
          <div className="flex flex-1 gap-2">
            <div className="w-1/3 rounded bg-gray-200" />
            <div className="flex-1 space-y-1">
              <div className="h-1 rounded bg-gray-300" />
              <div className="h-1 w-4/5 rounded bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="absolute right-3 top-3 h-4 w-4 rounded-full bg-purple-500" />
      </div>
    );
  }

  return (
    <div className="h-28 w-full rounded-lg bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 p-3">
      <div className="flex h-full flex-col">
        <div className="mb-2 flex gap-1">
          <div className="h-2 w-8 rounded-full bg-purple-300 opacity-80" />
          <div className="h-2 w-4 rounded-full bg-purple-300 opacity-60" />
        </div>
        <div className="flex flex-1 gap-2">
          <div className="w-1/3 rounded bg-purple-300 opacity-70" />
          <div className="flex-1 space-y-1">
            <div className="h-1 rounded bg-purple-300 opacity-60" />
            <div className="h-1 w-4/5 rounded bg-purple-300 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppearanceSettingsPage() {
  const [settings, setSettings] = useState<AppearanceSettings>({
    language: 'en',
    theme: 'light',
    accentColor: 'coral',
    reduceMotion: true,
    autoPlay: true,
    highQualityPhoto: false,
  });

  const handleThemeChange = (theme: 'auto' | 'light' | 'dark') => {
    setSettings((prev) => ({ ...prev, theme }));
  };
  const handleAccentColorChange = (colorId: string) => {
    setSettings((prev) => ({ ...prev, accentColor: colorId }));
  };
  const handleToggle = (
    key: 'reduceMotion' | 'autoPlay' | 'highQualityPhoto'
  ) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings((prev) => ({ ...prev, language: e.target.value }));
  };
  const handleSavePreferences = () => {
    // Save logic here
  };
  const handleCancel = () => {
    // Cancel logic here
  };
  const handleResetToDefault = () => {
    setSettings({
      language: 'en',
      theme: 'light',
      accentColor: 'coral',
      reduceMotion: true,
      autoPlay: true,
      highQualityPhoto: false,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F8FA] font-sans">
      <div className="w-full max-w-[420px] rounded-[24px] bg-white shadow-[0_8px_32px_rgba(60,72,100,0.08)] p-8 sm:p-10">
        {/* Header */}
        <h1 className="text-[22px] font-bold leading-[28px] text-[#23272F] mb-1">Appearance</h1>
        <p className="text-[14px] leading-[20px] text-[#7C8493] mb-6">Set or customize your preferences for the system</p>

        {/* Language */}
        <div className="mb-6">
          <label className="block text-[14px] font-medium text-[#23272F] mb-1">Language</label>
          <p className="text-[13px] text-[#7C8493] mb-3">Select the language of the platform</p>
          <div className="relative w-full">
            <select
              value={settings.language}
              onChange={handleLanguageChange}
              className="appearance-none w-full h-[40px] rounded-[8px] border border-[#E4E6EB] bg-white px-4 pr-10 text-[15px] text-[#23272F] focus:border-[#6C47FF] focus:outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              {/* Chevron Down SVG */}
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-[#F0F1F3] mb-6" />

        {/* Theme Selection */}
        <div className="mb-6">
          <label className="block text-[14px] font-medium text-[#23272F] mb-1">Interface theme</label>
          <p className="text-[13px] text-[#7C8493] mb-4">Customize your application appearence</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleThemeChange(option.id as 'auto' | 'light' | 'dark')}
                className={`relative flex flex-col items-center gap-2 rounded-[12px] border ${settings.theme === option.id ? 'border-[#6C47FF] bg-[#F4F2FF]' : 'border-[#E4E6EB] bg-[#F7F8FA]'} p-3 transition-all duration-150`}
              >
                {/* Theme preview illustration */}
                <div className="w-full h-[56px] rounded-[8px] mb-2 flex items-center justify-center bg-[#F7F8FA]">
                  {/* Simulated preview: can be replaced with SVG for more detail */}
                  {option.id === 'auto' && (
                    <div className="w-full h-full bg-gradient-to-r from-[#6C47FF]/30 to-[#6C47FF]/10 rounded-[8px]" />
                  )}
                  {option.id === 'light' && (
                    <div className="w-full h-full bg-[#F7F8FA] border border-[#E4E6EB] rounded-[8px]" />
                  )}
                  {option.id === 'dark' && (
                    <div className="w-full h-full bg-[#6C47FF]/30 rounded-[8px]" />
                  )}
                </div>
                <span className={`text-[14px] font-medium ${settings.theme === option.id ? 'text-[#6C47FF]' : 'text-[#23272F]'}`}>{option.label}</span>
                {settings.theme === option.id && (
                  <span className="absolute left-2 top-2">
                    {/* Check SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6C47FF"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-[#F0F1F3] mb-6" />

        {/* Accent Color */}
        <div className="mb-6">
          <label className="block text-[14px] font-medium text-[#23272F] mb-1">Accent color</label>
          <p className="text-[13px] text-[#7C8493] mb-4">Pick your platform's main color</p>
          <div className="flex gap-3">
            {ACCENT_COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => handleAccentColorChange(color.id)}
                className={`relative w-6 h-6 rounded-full transition-all duration-150 ${settings.accentColor === color.id ? 'ring-2 ring-[#E4E6EB]' : ''}`}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              >
                {settings.accentColor === color.id && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="#fff"/></svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-[#F0F1F3] mb-6" />

        {/* Toggles */}
        <div className="flex flex-col gap-2 mb-8">
          {/* Reduce motion */}
          <div className="flex items-center justify-between h-[40px]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 flex items-center justify-center">
                {/* Sparkle SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#7C8493" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="text-[15px] text-[#23272F]">Reduce motion</span>
            </div>
            <button
              onClick={() => handleToggle('reduceMotion')}
              className={`relative w-10 h-6 rounded-full transition-colors duration-150 ${settings.reduceMotion ? 'bg-[#6C47FF]' : 'bg-[#E4E6EB]'}`}
              role="switch"
              aria-checked={settings.reduceMotion}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-150 ${settings.reduceMotion ? 'translate-x-4' : ''}`}
              />
            </button>
          </div>
          {/* Auto play */}
          <div className="flex items-center justify-between h-[40px]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 flex items-center justify-center">
                {/* Play SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" fill="#7C8493"/></svg>
              </span>
              <span className="text-[15px] text-[#23272F]">Auto play</span>
            </div>
            <button
              onClick={() => handleToggle('autoPlay')}
              className={`relative w-10 h-6 rounded-full transition-colors duration-150 ${settings.autoPlay ? 'bg-[#6C47FF]' : 'bg-[#E4E6EB]'}`}
              role="switch"
              aria-checked={settings.autoPlay}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-150 ${settings.autoPlay ? 'translate-x-4' : ''}`}
              />
            </button>
          </div>
          {/* High quality photo */}
          <div className="flex items-center justify-between h-[40px]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 flex items-center justify-center">
                {/* Photo SVG */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" fill="#7C8493"/><circle cx="8" cy="12" r="2" fill="#fff"/></svg>
              </span>
              <span className="text-[15px] text-[#23272F]">High quality photo</span>
            </div>
            <button
              onClick={() => handleToggle('highQualityPhoto')}
              className={`relative w-10 h-6 rounded-full transition-colors duration-150 ${settings.highQualityPhoto ? 'bg-[#6C47FF]' : 'bg-[#E4E6EB]'}`}
              role="switch"
              aria-checked={settings.highQualityPhoto}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-150 ${settings.highQualityPhoto ? 'translate-x-4' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-[#F0F1F3] mb-6" />

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleResetToDefault}
            className="text-[15px] text-[#7C8493] px-2 py-1 rounded hover:bg-[#F7F8FA] transition"
          >
            Reset to default
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="text-[15px] font-medium border border-[#E4E6EB] bg-white text-[#23272F] px-5 py-2 rounded-[8px] hover:bg-[#F7F8FA] transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePreferences}
              className="text-[15px] font-semibold bg-[#6C47FF] text-white px-5 py-2 rounded-[8px] shadow hover:bg-[#5936D9] transition"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

