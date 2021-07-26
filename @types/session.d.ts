declare module 'express-session' {
  interface SessionData {
    info: {
      _id: string;
      id: string;
      role: string;
    };
  }
}
