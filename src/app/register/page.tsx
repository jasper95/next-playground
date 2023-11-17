'use client';
import { useOrganizationFindMany } from "@/lib/roq";
import { defaultBrowserClient } from "@/lib/roq/roq-client";

export default function RegisterPage() {
  const { data, error } = useOrganizationFindMany()
  console.log('error: ', error);
  console.log('data: ', data);
  return (
    <div>
      <button onClick={() => defaultBrowserClient.signUp()}>Signup</button>
      <button onClick={() => defaultBrowserClient.signIn()}>Signin</button>
    </div>
  )
}