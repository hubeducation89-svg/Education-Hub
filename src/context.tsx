import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "student" | "teacher";

export type Message = {
  id: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  text: string;
  timestamp: number;
};

export type Progress = {
  [courseId: string]: {
    completedModules: string[];
  };
};

type AppState = {
  role: UserRole;
  userName: string;
  progress: Progress;
  messages: Message[];
};

type AppContextType = {
  state: AppState;
  setRole: (role: UserRole) => void;
  markModuleComplete: (courseId: string, moduleName: string) => void;
  sendMessage: (text: string, receiverId: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

const DEFAULT_STATE: AppState = {
  role: "student",
  userName: "Ravi Kumar",
  progress: {},
  messages: [
    {
      id: "msg1",
      senderId: "teacher1",
      senderName: "Gunjan Gaur",
      receiverId: "student1",
      text: "Welcome to Education Hub! Let me know if you need help with your courses.",
      timestamp: Date.now() - 86400000,
    }
  ],
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem("edu-hub-state");
    return saved ? JSON.parse(saved) : DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("edu-hub-state", JSON.stringify(state));
  }, [state]);

  const setRole = (role: UserRole) => {
    setState((s) => ({ ...s, role }));
  };

  const markModuleComplete = (courseId: string, moduleName: string) => {
    setState((s) => {
      const courseProgress = s.progress[courseId] || { completedModules: [] };
      if (!courseProgress.completedModules.includes(moduleName)) {
        return {
          ...s,
          progress: {
            ...s.progress,
            [courseId]: {
              ...courseProgress,
              completedModules: [...courseProgress.completedModules, moduleName],
            },
          },
        };
      }
      return s;
    });
  };

  const sendMessage = (text: string, receiverId: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      senderId: state.role === "student" ? "student1" : "teacher1",
      senderName: state.userName,
      receiverId,
      text,
      timestamp: Date.now(),
    };
    setState((s) => ({
      ...s,
      messages: [...s.messages, newMessage],
    }));
  };

  return (
    <AppContext.Provider value={{ state, setRole, markModuleComplete, sendMessage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
