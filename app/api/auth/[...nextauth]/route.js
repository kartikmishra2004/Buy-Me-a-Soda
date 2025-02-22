import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDb from "@/db/dbConnection";

export const authOptions = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == 'github' || account.provider == 'google') {
                // Connect to the database
                await connectDb();
                // Check if user already exist in the database
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    // Create new user
                    const newUser = new User({
                        email: user.email,
                        username: user.email.split("@")[0],
                    });
                    await newUser.save();
                }
                return true;
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email });
            session.user.name = dbUser.username;
            return session
        },
    }
});
export { authOptions as GET, authOptions as POST };