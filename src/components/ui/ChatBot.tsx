import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Mic, MicOff } from 'lucide-react';

// Define types
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

// Define types for the SpeechRecognition API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResult {
  0: SpeechRecognitionAlternative;
  length: number;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultList {
  0: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionError extends Event {
  error: string;
}

// Define the SpeechRecognition interface
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onerror: (event: SpeechRecognitionError) => void;
}

// Define the SpeechRecognition constructor
interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

// Extend the Window interface to include the SpeechRecognition API
declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    // Check if browser supports speech recognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.error('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      // recognitionRef.current.lang = 'en-US';
      recognitionRef.current.lang = 'hi-IN'; // Hindi language

      // Handle recognition results
      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
      };

      // Handle recognition end
      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };

      // Handle recognition errors
      recognitionRef.current.onerror = (event: SpeechRecognitionError) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };
    }

    return () => {
      // Clean up
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Handle text-to-speech for bot responses
  const speakText = (text: string): void => {
    if (!('speechSynthesis' in window)) {
      console.error('Speech synthesis not supported in this browser');
      return;
    }
  
    window.speechSynthesis.cancel();
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Hindi language
  
    // Select a Hindi voice if available
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(voice => voice.lang === 'hi-IN');
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
  
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
  
    window.speechSynthesis.speak(utterance);
  };
  

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const toggleChat = (): void => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage: Message = { id: messages.length + 1, text: inputValue, sender: "user" };
    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Process the user's message and generate a response
    // In a real app, this would call your API or chatbot backend
    processMessage(inputValue);
  };

  const processMessage = (userInput: string): void => {
    // Simulate bot response (replace with actual chatbot logic)
    setTimeout(() => {
      const botResponse: Message = { 
        id: messages.length + 2, 
        text: getBotResponse(userInput), 
        sender: "bot" 
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      
      // Speak the bot's response
      if (isListening) {
        speakText(botResponse.text);
      }
    }, 1000);
  };

  // Simple response generator - replace with actual chatbot logic
  const getBotResponse = (input: string): string => {  
    const lowerInput = input.toLowerCase();  
  
    if (lowerInput.includes('फसल') || lowerInput.includes('खेती')) {  
      return 'आप अपनी मिट्टी और मौसम के अनुसार सबसे उपयुक्त फसलों का चयन कर सकते हैं। मैं इसमें आपकी मदद कर सकता हूँ।';  
    } else if (lowerInput.includes('उर्वरक') || lowerInput.includes('खाद')) {  
      return 'आपकी फसल के लिए जैविक या रासायनिक उर्वरक का सही चयन महत्वपूर्ण है। मैं आपको उपयुक्त सुझाव दे सकता हूँ।';  
    } else if (lowerInput.includes('कीटनाशक') || lowerInput.includes('कीट')) {  
      return 'फसल को कीटों से बचाने के लिए जैविक और रासायनिक कीटनाशकों के विकल्प उपलब्ध हैं। कृपया बताएं कि आपको किस प्रकार की सहायता चाहिए।';  
    } else if (lowerInput.includes('मंडी भाव') || lowerInput.includes('बाजार')) {  
      return 'आप मंडी के ताजा भाव ऑनलाइन सरकारी पोर्टल या ऐप के माध्यम से देख सकते हैं।';  
    } else if (lowerInput.includes('सरकारी योजना') || lowerInput.includes('सब्सिडी')) {  
      return 'किसानों के लिए विभिन्न सरकारी योजनाएं और सब्सिडी उपलब्ध हैं। मैं आपको उनके बारे में जानकारी दे सकता हूँ।';  
    } else if (lowerInput.includes('सिंचाई') || lowerInput.includes('पानी')) {  
      return 'जल प्रबंधन और आधुनिक सिंचाई तकनीक आपकी फसल की उत्पादकता बढ़ा सकते हैं। आप ड्रिप या स्प्रिंकलर सिंचाई अपना सकते हैं।';  
    } else if (lowerInput.includes('कृषि यंत्र') || lowerInput.includes('मशीन')) {  
      return 'ट्रैक्टर, हार्वेस्टर, और अन्य आधुनिक कृषि यंत्रों की जानकारी और खरीद विकल्प उपलब्ध हैं।';  
    } else if (lowerInput.includes('जैविक खेती') || lowerInput.includes('ऑर्गेनिक')) {  
      return 'जैविक खेती से रसायन मुक्त उत्पाद प्राप्त किए जा सकते हैं। मैं आपको इसकी तकनीकों और लाभों के बारे में बता सकता हूँ।';  
    } else if (lowerInput.includes('मौसम') || lowerInput.includes('मौसम पूर्वानुमान')) {  
      return 'सही समय पर खेती के लिए मौसम की जानकारी बहुत जरूरी होती है। आप सरकारी मौसम ऐप या वेबसाइट से अपडेट प्राप्त कर सकते हैं।';  
    } else {  
      return 'धन्यवाद! मैं एक डेमो चैटबॉट हूँ, इसलिए मेरे उत्तर सीमित हैं। वास्तविक अनुप्रयोग में, मैं API से जुड़कर अधिक उपयोगी उत्तर प्रदान कर सकता हूँ।';  
    }  
  };
  

  const toggleRecording = (): void => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    if (isRecording) {
      // Stop recording
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      // Start recording
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  };

  const toggleListening = (): void => {
    setIsListening(!isListening);
    // If turning on listening mode, announce it
    if (!isListening) {
      speakText("Voice response mode activated. I'll read out my responses.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isOpen ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 mb-4 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-blue-500 p-4 text-white font-medium flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>Chat Support</span>
              {/* Listening toggle button */}
              <button 
                onClick={toggleListening}
                className={`text-xs px-2 py-1 rounded ${isListening ? 'bg-green-600' : 'bg-gray-600'}`}
                title={isListening ? "Voice responses on" : "Voice responses off"}
              >
                {isListening ? "Voice On" : "Voice Off"}
              </button>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-3">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg px-4 py-2 max-w-xs ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleRecording}
              className={`p-2 rounded-full ${
                isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="Click to speak"
            >
              {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={isRecording ? "Listening..." : "Type a message..."}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isRecording}
            />
            <button
              type="submit"
              className={`text-white p-2 rounded-full ${
                inputValue.trim() === '' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={inputValue.trim() === ''}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;