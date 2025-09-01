

import React, { useState, useRef, useEffect } from 'react';
import { getChatSession } from '../services/geminiService';
import type { Message } from '../types';
import { MessageCircleIcon, SendIcon, XIcon, LoaderIcon, RobotIcon } from './icons/index';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', text: "Hi there! I'm Aychin, Ayush's AI assistant. Ask me anything about his skills, projects, or experience!", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatSession = useRef(getChatSession());

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponseId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: aiResponseId, text: '', sender: 'ai' }]);

    try {
      const stream = await chatSession.current.sendMessageStream({ message: input });
      
      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === aiResponseId ? { ...msg, text: msg.text + chunkText } : msg
        ));
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiResponseId ? { ...msg, text: "Oops! I seem to be having some trouble connecting. Please try again later." } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-110 z-50"
        aria-label="Toggle AI Assistant"
        title="I am Aychin Ayush's Personal assistant, I can tell you more about him"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MessageCircleIcon className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-surface rounded-xl shadow-2xl flex flex-col z-50 animate-fade-in">
          <header className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
                <RobotIcon className="h-6 w-6" />
                <h3 className="font-bold text-lg">Aychin</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-75">
              <XIcon className="h-5 w-5" />
            </button>
          </header>

          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-background text-text-primary rounded-bl-none'}`}>
                  <p className="text-sm break-words">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length-1].sender === 'user' && (
              <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl bg-background text-text-primary rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-75"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-150"></span>
                    </div>
                  </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-background flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 bg-background border-none focus:ring-0 rounded-full px-4 py-2 text-sm text-text-primary placeholder-text-secondary"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="ml-3 bg-primary text-white p-2 rounded-full hover:bg-secondary disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
              {isLoading ? <LoaderIcon className="h-5 w-5"/> : <SendIcon className="h-5 w-5" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;