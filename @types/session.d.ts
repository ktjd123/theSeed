declare global {
  namespace Express {
    // Inject additional properties on express.Request
    interface Request {
      session: {
        info?: {
          _id: string;
          id: string;
          role: string;
        };
      };

      /**
       * This request's session ID.
       * Even though this property isn't marked as optional, it won't exist until you use the `express-session` middleware
       */
      sessionID: string;
    }
  }
}
