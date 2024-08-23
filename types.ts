import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: Date | null;
            role: string; // Add role here
        };
    }

    interface User {
        id: string;
        name: string;
        email: string;
        emailVerified: Date | null;
        role: string; // Add role here
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        name: string;
        email: string;
        emailVerified: Date | null;
        role: string; // Add role here
    }
}
