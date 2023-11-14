'use client';
import { defaultBrowserClient } from "@/lib/roq/roq-client";

export default function RegisterPage() {
  return (
    <div>
      <button onClick={() => defaultBrowserClient.signUp()}>Signup</button>
      <button onClick={() => defaultBrowserClient.signIn()}>Signin</button>
    </div>
  )
}