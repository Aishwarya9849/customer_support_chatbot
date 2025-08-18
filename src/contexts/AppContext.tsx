import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Domain, Ticket, Admin, UserActivity, SystemStats } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedDomain: Domain | null;
  setSelectedDomain: (domain: Domain | null) => void;
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  admin: Admin | null;
  setAdmin: (admin: Admin | null) => void;
  userActivities: UserActivity[];
  setUserActivities: (activities: UserActivity[]) => void;
  systemStats: SystemStats;
  setSystemStats: (stats: SystemStats) => void;
  blockUser: (userId: string) => void;
  unblockUser: (userId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(() => {
    const savedDomain = localStorage.getItem('selectedDomain');
    return savedDomain as Domain | null;
  });

  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [admin, setAdmin] = useState<Admin | null>(() => {
    const savedAdmin = localStorage.getItem('admin');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  const [userActivities, setUserActivities] = useState<UserActivity[]>([
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      domain: 'customer-support',
      messagesCount: 15,
      ticketsCount: 2,
      lastActive: new Date(),
      status: 'active'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      domain: 'technical-support',
      messagesCount: 8,
      ticketsCount: 1,
      lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: 'active'
    }
  ]);

  const [systemStats, setSystemStats] = useState<SystemStats>({
    totalUsers: 1247,
    activeUsers: 89,
    totalMessages: 5432,
    totalTickets: 234,
    resolvedTickets: 198,
    pendingTickets: 36
  });

  const handleSetUser = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  const handleSetAdmin = (newAdmin: Admin | null) => {
    setAdmin(newAdmin);
    if (newAdmin) {
      localStorage.setItem('admin', JSON.stringify(newAdmin));
    } else {
      localStorage.removeItem('admin');
    }
  };

  const handleSetDomain = (domain: Domain | null) => {
    setSelectedDomain(domain);
    if (domain) {
      localStorage.setItem('selectedDomain', domain);
    } else {
      localStorage.removeItem('selectedDomain');
    }
  };

  const addTicket = (ticket: Ticket) => {
    setTickets(prev => [...prev, ticket]);
  };

  const blockUser = (userId: string) => {
    setUserActivities(prev =>
      prev.map(activity =>
        activity.userId === userId
          ? { ...activity, status: 'blocked' as const }
          : activity
      )
    );
  };

  const unblockUser = (userId: string) => {
    setUserActivities(prev =>
      prev.map(activity =>
        activity.userId === userId
          ? { ...activity, status: 'active' as const }
          : activity
      )
    );
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser: handleSetUser,
      selectedDomain,
      setSelectedDomain: handleSetDomain,
      tickets,
      addTicket,
      admin,
      setAdmin: handleSetAdmin,
      userActivities,
      setUserActivities,
      systemStats,
      setSystemStats,
      blockUser,
      unblockUser
    }}>
      {children}
    </AppContext.Provider>
  );
};