import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    providers: [
      CredentialsProvider({
        name: "Sign In with your credentials",
    
        credentials: {
          email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const {email, password} = credentials
            const response = await fetch("http://127.0.0.1:8000/users/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password,})
            })
    
            const user = await response.json()
    
            if (response.ok && user) {
                return user
            } else {
                return null
            }
        }
      })
    ],

    session: {
        strategy: "jwt",
    }
}

export default NextAuth(authOptions)