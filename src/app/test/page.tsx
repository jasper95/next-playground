'use client';

import { useRoqPlatformUserProfiles, useSession } from "@/lib/roq";


export default function TestPage() {
  const {data} = useRoqPlatformUserProfiles()
  const { session, status }= useSession()
  // console.log('session, status: ', session, status);
  // console.log('data: ', data);
  return (
    <div>Test Page</div>
  )
}