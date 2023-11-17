'use client';
import { useOrganizationFindMany } from "@/lib/roq";
import { roqBrowserClient } from "@/lib/roq/roq-client";

export default function RegisterPage() {
  const { data, error } = useOrganizationFindMany()
  console.log('error: ', error);
  console.log('data: ', data);
  return (
    <div>
      <button onClick={() => roqBrowserClient.signUp()}>Signup</button>
      <button onClick={() => roqBrowserClient.signIn()}>Signin</button>
    </div>
  )
}