import NextAuth from "next-auth/next";
import googleProvider from 'next-auth/providers/google'
const handler = NextAuth({
    providers:[
        googleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){
        
    },
    async signIn({profile}){
try {
    
} catch (error) {
    
}
    }
})
export {handler as GET , handler as POST}