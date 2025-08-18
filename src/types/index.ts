export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  helpful?: boolean;
}

export interface Ticket {
  id: string;
  userId: string;
  domain: string;
  summary: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'escalated';
  createdAt: Date;
  slaTime?: Date;
}

export type Domain = 'customer-support' | 'technical-support' | 'finance' | 'travel';

export interface DomainInfo {
  id: Domain;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  role: 'super-admin' | 'admin';
  createdAt: Date;
}

export interface UserActivity {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  domain: string;
  messagesCount: number;
  ticketsCount: number;
  lastActive: Date;
  status: 'active' | 'inactive' | 'blocked';
}

export interface SystemStats {
  totalUsers: number;
  activeUsers: number;
  totalMessages: number;
  totalTickets: number;
  resolvedTickets: number;
  pendingTickets: number;
}