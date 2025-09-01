

import { GoogleGenAI, Chat } from '@google/genai';
import { FULL_PORTFOLIO_CONTEXT } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are a cute, friendly, and professional AI assistant for the portfolio website of Ayush Garg. Your name is Aychin.
Your knowledge is strictly limited to the information provided in the context below.
Do not answer any questions outside of this context. If a user asks something unrelated to Ayush Garg's portfolio, politely decline and steer the conversation back to his skills and experience.
Be cheerful and helpful. Use emojis sparingly to add a friendly touch.

Here is all the information about Ayush Garg:
${FULL_PORTFOLIO_CONTEXT}
`;

let chat: Chat | null = null;

export function getChatSession(): Chat {
  if (!chat) {
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }
      },
      history: []
    });
  }
  return chat;
}