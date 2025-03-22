
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  
  const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  ];

  const handleLanguageChange = (value: string) => {
    setCurrentLanguage(value);
    // In a real app, this would trigger language change throughout the application
    console.log(`Language changed to: ${value}`);
  };

  return (
    <div className="flex items-center">
      <Globe className="mr-2 h-4 w-4 text-kisan-600" />
      <Select value={currentLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[120px] bg-transparent border-none focus:ring-0 focus:ring-offset-0 p-0 h-auto">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="flex items-center">
                {lang.nativeName} <span className="ml-2 text-xs text-muted-foreground">({lang.name})</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
