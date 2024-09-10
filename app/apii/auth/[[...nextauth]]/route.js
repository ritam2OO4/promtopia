import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@/utils/database'
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        // store the user id from MongoDB to session

    },
    async signIn({ account, profile, user, credentials }) {
        try {
            await connectToDB();
        } catch (error) {

        }
    }
})

export { handler as GET, handler as POST }