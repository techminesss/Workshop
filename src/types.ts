export interface RegistrationData {
  fullName: string;
  phone: string;
  college: string;
  degree: string;
  agreed: boolean;
  ticketId?: string;
  seatNumber?: number;
  registeredAt?: string;
}

export interface SyllabusModule {
  id: number;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  tools: string[];
  learningOutcomes: string[];
  liveDemoScenario: string;
}

export interface Mentor {
  id: string;
  initials: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  badge: string;
  certifications: string[];
  recentWork: string;
}

export interface BonusItem {
  id: number;
  bonusNumber: string;
  title: string;
  description: string;
  worth: string;
  contents: string[];
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
