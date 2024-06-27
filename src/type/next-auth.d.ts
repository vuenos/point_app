import NextAuth, {DefaultSession} from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      _id?: string | undefined | null
    } & DefaultSession["user"]
  }
}
