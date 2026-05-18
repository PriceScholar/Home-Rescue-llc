import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useBooking } from './BookingModal';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
}

const BOT_RESPONSES: Record<string, { text: string; quickReplies: string[]; action?: string }> = {
  'services': {
    text: `🏠 We offer premium services in Dubai:\n\n✅ Paint Work\n✅ AC Maintenance\n✅ Plumbing\n✅ Electrical\n✅ Tile & Marble\n✅ Wooden Work\n✅ Handyman & More\n\nWhich service interests you? 🎯`,
    quickReplies: ['Paint Work', 'AC Service', 'Plumbing', 'Get Pricing', 'Book Now']
  },
  'pricing': {
    text: `💰 Our pricing varies by service:\n\n🎨 Paint: From AED 200\n❄️ AC: From AED 99\n💧 Plumbing: From AED 150\n⚡ Electrical: From AED 200\n\nWant a personalized quote? Share your needs! 📋`,
    quickReplies: ['Get Free Quote', 'Book Service', 'Talk to Expert']
  },
  'emergency': {
    text: `🚨 EMERGENCY SERVICE AVAILABLE 24/7!\n\nCall NOW: +971 52 452 4295\nWhatsApp: +971 52 452 4295\n\nWe arrive within 1-2 hours! 🚀`,
    quickReplies: ['Call Emergency', 'WhatsApp Now']
  },
  'consultation': {
    text: `🎥 VIRTUAL CONSULTATION - FREE!\n\nGet expert advice from your home via 15-minute video call. FREE - No charges!\n\nWant to book a VIRTUAL CONSULTATION?`,
    quickReplies: ['Book Virtual Consultation', 'Learn More', 'Contact Us']
  },
  'hours': {
    text: `⏰ WORKING HOURS:\n\n📅 Mon - Sat: 9:00 AM - 6:00 PM\n🚨 Emergency Service: 24/7\n\nWe serve across all 7 emirates of UAE! 🇦🇪`,
    quickReplies: ['Service Areas', 'Book Now', 'Emergency Service']
  },
  'default': {
    text: `I'd love to help! 😊\n\nLet me connect you with our expert team. Would you prefer WhatsApp or a phone call?`,
    quickReplies: ['WhatsApp Now', 'Call Now', 'Talk to Expert']
  }
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: '👋 Hello! Welcome to **Home Rescue**!\n\nI\'m your virtual assistant. How can I help you today?',
      quickReplies: ['services', 'pricing', 'emergency', 'consultation', 'hours']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { openBooking, openConsultation, askExpert, callNow } = useBooking();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lowerText = text.toLowerCase();
      let responseKey = 'default';

      if (lowerText.includes('service')) responseKey = 'services';
      else if (lowerText.includes('price') || lowerText.includes('cost')) responseKey = 'pricing';
      else if (lowerText.includes('emergency') || lowerText.includes('urgent')) responseKey = 'emergency';
      else if (lowerText.includes('consultation') || lowerText.includes('video')) responseKey = 'consultation';
      else if (lowerText.includes('hour') || lowerText.includes('time')) responseKey = 'hours';

      const botResp = BOT_RESPONSES[responseKey];
      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResp.text,
        quickReplies: botResp.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const formattedReply = reply.charAt(0).toUpperCase() + reply.slice(1);
    
    // Check for special actions
    if (reply === 'services') handleSend('What services do you provide?');
    else if (reply === 'pricing') handleSend('How much are your services?');
    else if (reply === 'emergency') handleSend('I have an emergency!');
    else if (reply === 'consultation') handleSend('I want a virtual consultation');
    else if (reply === 'hours') handleSend('What are your working hours?');
    else if (reply === 'Book Virtual Consultation') {
      setIsOpen(false);
      openConsultation();
    }
    else if (reply === 'Book Now' || reply === 'Book Service') {
      setIsOpen(false);
      openBooking();
    }
    else if (reply === 'WhatsApp Now' || reply === 'WhatsApp') {
      askExpert();
    }
    else if (reply === 'Call Now' || reply === 'Call Emergency') {
      callNow();
    }
    else {
      handleSend(formattedReply);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9997] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[380px] max-w-[90vw] h-[540px] max-height-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-brand-navy to-blue-900 p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy">
                  <i className="fa-solid fa-headset text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Home Rescue Support</h4>
                  <div className="flex items-center gap-1.5 text-[10px] opacity-80">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online Now
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    m.type === 'user' 
                      ? 'bg-brand-navy text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {m.text.split('\n').map((line, i) => (
                      <p key={i} className={line ? 'mb-1 last:mb-0' : 'h-2'} dangerouslySetInnerHTML={{ 
                        __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }} />
                    ))}
                  </div>
                  
                  {m.type === 'bot' && m.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-2">
                      {m.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 bg-white border border-brand-navy text-brand-navy text-[10px] font-bold rounded-full hover:bg-brand-navy hover:text-white transition-all uppercase tracking-wider"
                        >
                          {reply.replace(/_/g, ' ')}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-1.5 p-3.5 bg-white rounded-2xl w-fit shadow-sm border border-gray-100 ml-2">
                  <div className="w-1.5 h-1.5 bg-brand-navy/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-navy/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-brand-navy/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputText)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border-none rounded-full px-5 py-2.5 text-sm focus:ring-2 focus:ring-brand-navy/5 outline-none"
              />
              <button 
                onClick={() => handleSend(inputText)}
                className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:scale-105 transition-all"
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>

            {/* Footer */}
            <div className="p-2.5 bg-gray-50 text-center border-t border-gray-100">
              <a href="https://wa.me/971524524295" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-green-600 hover:text-green-700 transition-all flex items-center justify-center gap-1.5">
                <i className="fa-brands fa-whatsapp text-xs"></i>
                CHAT ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-2xl transition-all relative ${
          isOpen ? 'bg-brand-red text-white' : 'bg-brand-navy text-white'
        }`}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <>
            <i className="fa-solid fa-message"></i>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-brand-red text-white text-[8px] md:text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              1
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
