import { createContext, useContext, useEffect, useMemo, useState } from "react";

const USERS_KEY = "canopy_users";
const SESSION_KEY = "canopy_session";

const AuthContext = createContext(null);

function readStorage(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function makeId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function persistUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function persistSession(email) {
  if (email) {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
}

function updateUserCollection(users, updatedUser) {
  return users.map((user) => (user.email === updatedUser.email ? updatedUser : user));
}

function normalizeUser(user) {
  return {
    savedPages: [],
    savedScenarios: [],
    supportRequests: [],
    contactMessages: [],
    eventRsvps: [],
    profileTags: [],
    completedTopics: [],
    quizAttempts: [],
    ...user
  };
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => readStorage(USERS_KEY, []));
  const [sessionEmail, setSessionEmail] = useState(() => readStorage(SESSION_KEY, null)?.email ?? null);

  useEffect(() => {
    persistUsers(users);
  }, [users]);

  useEffect(() => {
    persistSession(sessionEmail);
  }, [sessionEmail]);

  const currentUser = useMemo(
    () => {
      const user = users.find((item) => item.email === sessionEmail);
      return user ? normalizeUser(user) : null;
    },
    [sessionEmail, users]
  );

  const signup = ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((user) => user.email === normalizedEmail)) {
      return { ok: false, message: "An account with that email already exists." };
    }

    const user = {
      id: makeId("user"),
      name: name.trim(),
      email: normalizedEmail,
      password,
      neighborhood: "Riverside District",
      role: "Community member",
      bio: "Interested in neighborhood improvements, park comfort, and local events.",
      joinedAt: new Date().toISOString(),
      savedPages: ["/learn", "/quiz"],
      savedScenarios: [],
      supportRequests: [],
      contactMessages: [],
      eventRsvps: [],
      profileTags: ["greener spaces", "community events"],
      completedTopics: [],
      quizAttempts: []
    };

    setUsers((current) => [...current, user]);
    setSessionEmail(normalizedEmail);
    return { ok: true, user };
  };

  const login = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const user = users.find((item) => item.email === normalizedEmail);

    if (!user || user.password !== password) {
      return { ok: false, message: "Incorrect email or password." };
    }

    setSessionEmail(normalizedEmail);
    return { ok: true, user };
  };

  const logout = () => {
    setSessionEmail(null);
  };

  const saveCurrentUser = (updater) => {
    if (!currentUser) {
      return { ok: false, message: "Please sign in to use this feature." };
    }

    const updatedUser = updater(currentUser);
    setUsers((collection) => updateUserCollection(collection, updatedUser));
    return { ok: true, user: updatedUser };
  };

  const updateProfile = (updates) => {
    return saveCurrentUser((user) => ({
      ...user,
      ...updates,
      name: updates.name?.trim() ?? user.name,
      neighborhood: updates.neighborhood?.trim() ?? user.neighborhood,
      role: updates.role?.trim() ?? user.role,
      bio: updates.bio?.trim() ?? user.bio
    }));
  };

  const toggleSavedPage = (page) => {
    return saveCurrentUser((user) => {
      const savedPages = user.savedPages.includes(page)
        ? user.savedPages.filter((item) => item !== page)
        : [...user.savedPages, page];

      return { ...user, savedPages };
    });
  };

  const saveScenario = (scenario) => {
    return saveCurrentUser((user) => ({
      ...user,
      savedScenarios: [
        {
          id: makeId("scenario"),
          savedAt: new Date().toISOString(),
          ...scenario
        },
        ...user.savedScenarios
      ].slice(0, 6)
    }));
  };

  const toggleTopicProgress = (topicId) => {
    return saveCurrentUser((user) => {
      const completedTopics = user.completedTopics.includes(topicId)
        ? user.completedTopics.filter((item) => item !== topicId)
        : [...user.completedTopics, topicId];

      return { ...user, completedTopics };
    });
  };

  const addQuizAttempt = (attempt) => {
    return saveCurrentUser((user) => ({
      ...user,
      quizAttempts: [
        {
          id: makeId("quiz"),
          completedAt: new Date().toISOString(),
          ...attempt
        },
        ...user.quizAttempts
      ].slice(0, 8)
    }));
  };

  const addSupportRequest = (request) => {
    return saveCurrentUser((user) => ({
      ...user,
      supportRequests: [
        {
          id: makeId("support"),
          submittedAt: new Date().toISOString(),
          ...request
        },
        ...user.supportRequests
      ]
    }));
  };

  const addContactMessage = (message) => {
    return saveCurrentUser((user) => ({
      ...user,
      contactMessages: [
        {
          id: makeId("message"),
          submittedAt: new Date().toISOString(),
          ...message
        },
        ...user.contactMessages
      ]
    }));
  };

  const toggleEventRsvp = (event) => {
    return saveCurrentUser((user) => {
      const exists = user.eventRsvps.some((item) => item.title === event.title);
      const eventRsvps = exists
        ? user.eventRsvps.filter((item) => item.title !== event.title)
        : [{ id: makeId("event"), savedAt: new Date().toISOString(), ...event }, ...user.eventRsvps];

      return { ...user, eventRsvps };
    });
  };

  const value = {
    currentUser,
    isAuthenticated: Boolean(currentUser),
    login,
    logout,
    signup,
    updateProfile,
    toggleSavedPage,
    saveScenario,
    toggleTopicProgress,
    addQuizAttempt,
    addSupportRequest,
    addContactMessage,
    toggleEventRsvp
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
