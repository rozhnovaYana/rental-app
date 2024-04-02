import connectDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }: { profile: GoogleProfile }) {
      const { email, name, picture } = profile;
      await connectDB();
      const user = await User.findOne({ email: profile.email });
      if (!user) {
        await User.create({
          email,
          name,
          picture,
        });
      }
      return true;
    },
    async session({ session }: { session: GoogleProfile }) {
      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id;
      return session;
    },
  },
};
