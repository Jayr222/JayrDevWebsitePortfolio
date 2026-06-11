import { useMemo, useState } from 'react';
import { Bot, ExternalLink, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';

const starterPrompts = [
  'What can Jayr build?',
  'Show me AI projects',
  'How do I contact Jayr?',
];

const initialMessages = [
  {
    from: 'bot',
    text: 'Hi, I can walk you through Jayr\'s skills, projects, availability, and contact options.',
  },
];

function findProjectReply(message) {
  const normalized = message.toLowerCase();
  const project = projects.find((item) => {
    const title = item.title.toLowerCase();
    const type = item.type.toLowerCase();
    return normalized.includes(title) || normalized.includes(type);
  });

  if (!project) return null;

  return {
    text: `${project.title} is a ${project.type}. ${project.description}`,
    link: project.link,
    linkLabel: project.link.startsWith('http') ? 'Open project' : 'Contact about this',
  };
}

function getReply(message) {
  const normalized = message.toLowerCase();
  const projectReply = findProjectReply(message);

  if (projectReply) return projectReply;

  if (normalized.includes('ai') || normalized.includes('automation') || normalized.includes('agent')) {
    return {
      text: 'Jayr works on AI automation, AI agents, RAG-style study tools, n8n workflows, and business assistant dashboards. Strong examples are StudyHub and AI Business Assistant.',
      anchor: '#projects',
      linkLabel: 'View AI work',
    };
  }

  if (normalized.includes('skill') || normalized.includes('stack') || normalized.includes('tech')) {
    return {
      text: `Jayr works with ${skills.slice(0, 10).join(', ')}, plus ${skills.slice(10).join(', ')}.`,
      anchor: '#skills',
      linkLabel: 'See skills',
    };
  }

  if (normalized.includes('project') || normalized.includes('work') || normalized.includes('portfolio')) {
    return {
      text: `There are ${projects.length} featured projects, including ${projects.slice(0, 4).map((project) => project.title).join(', ')} and more.`,
      anchor: '#projects',
      linkLabel: 'View projects',
    };
  }

  if (normalized.includes('contact') || normalized.includes('hire') || normalized.includes('available') || normalized.includes('email')) {
    return {
      text: 'Jayr is open to freelance and full-time opportunities. The contact form is the best next step for project inquiries.',
      anchor: '#contact-form',
      linkLabel: 'Go to form',
    };
  }

  if (normalized.includes('flutter') || normalized.includes('inventory') || normalized.includes('barcode') || normalized.includes('dart')) {
    return {
      text: 'The Sales & Inventory System uses Flutter and Dart with Python-powered barcode scanning for faster product tracking and inventory workflows.',
      link: 'https://github.com/Jayr222/Sales_and_inventory_system',
      linkLabel: 'Open repository',
    };
  }

  return {
    text: 'I\'m focused on Jayr\'s portfolio, projects, skills, services, and contact details. Try asking about his AI work, tech stack, featured projects, or how to start a project inquiry.',
    anchor: '#projects',
    linkLabel: 'View projects',
    actions: [
      { label: 'See skills', href: '#skills' },
      { label: 'Contact Jayr', href: '#contact-form' },
    ],
  };
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const projectCount = useMemo(() => projects.length, []);

  const sendMessage = (value = input) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { from: 'user', text: trimmed },
      { from: 'bot', ...getReply(trimmed) },
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div
          className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-lg border border-line bg-cream shadow-[0_24px_80px_rgba(17,17,17,0.22)]"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between bg-green px-4 py-3 text-cream">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold">Ask Jayr&apos;s Portfolio</p>
                <p className="text-[11px] text-cream/70">{projectCount} projects indexed</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 transition hover:bg-cream/10"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="chatbot-scroll max-h-[22rem] space-y-3 overflow-y-auto overscroll-contain px-4 py-4">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-lg px-3 py-2 text-xs leading-5 ${
                    message.from === 'user'
                      ? 'bg-green text-cream'
                      : 'border border-line bg-white/65 text-ink'
                  }`}
                >
                  <p>{message.text}</p>
                  {(message.link || message.anchor) && (
                    <a
                      href={message.link || message.anchor}
                      target={message.link?.startsWith('http') ? '_blank' : undefined}
                      rel={message.link?.startsWith('http') ? 'noreferrer' : undefined}
                      className="mt-2 inline-flex items-center gap-1 font-bold text-green"
                    >
                      {message.linkLabel}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {message.actions?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {message.actions.map((action) => (
                        <a
                          key={action.label}
                          href={action.href}
                          className="rounded-full border border-green/20 px-2 py-1 text-[10px] font-bold text-green transition hover:border-gold hover:bg-gold hover:text-ink"
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-line px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-line bg-white/60 px-3 py-1.5 text-[11px] font-semibold text-ink transition hover:border-gold hover:bg-gold"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, AI, skills..."
                className="min-h-11 flex-1 rounded-md border border-line bg-white/70 px-3 text-xs outline-none transition placeholder:text-muted focus:border-gold"
              />
              <button
                type="submit"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-ink transition hover:bg-orange hover:text-white"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex h-14 items-center gap-3 rounded-full border border-gold bg-gold px-4 text-sm font-bold text-ink shadow-[0_18px_45px_rgba(17,17,17,0.18)] transition hover:-translate-y-1 hover:bg-orange hover:text-white"
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Ask Jayr</span>
          <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
        </button>
      )}
    </div>
  );
}
