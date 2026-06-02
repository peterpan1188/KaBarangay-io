export interface Testimonial {
  id: string;
  name: string;
  role: 'official' | 'resident' | 'volunteer' | 'leader';
  title: string; // e.g., "Barangay Captain", "Sari-Sari Store Owner"
  location: string; // e.g., "Pasig City", "Brgy. Malanday, Valenzuela"
  quote: string; // default English quote
  quoteNative: string; // Native language quote (Tagalog, Bisaya, Ilocano, Bicolano)
  quoteEn: string; // English translation quote (explicitly stated)
  languageName: string; // e.g. "Tagalog", "Bisaya", "Ilocano", "Bicolano"
  languageFlag?: string; // Flag or badge text
  avatarSeed: string; // seed for fallback or SVG
  imageUrl?: string; // Direct Unsplash real-face photography URL
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'residents' | 'admins' | 'security';
}

export interface ProblemSolution {
  id: string;
  indicator: string; // e.g., "01"
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  metricLabel: string; // e.g. "Processing Time"
  metricBefore: string; // e.g. "3-5 Days"
  metricAfter: string;  // e.g. "5 Minutes"
}

export interface SandboxRequest {
  id: string;
  documentType: string;
  purpose: string;
  residentName: string;
  status: 'pending' | 'ready' | 'received';
  dateApplied: string;
}

export interface SandboxComplaint {
  id: string;
  subject: string;
  details: string;
  category: string;
  status: 'filed' | 'investigating' | 'resolved';
  submittedAt: string;
}
