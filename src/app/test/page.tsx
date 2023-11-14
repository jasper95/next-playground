'use client';

import { useRoqPlatformUserProfiles } from "@/lib/roq";


export default function TestPage() {
  const {data} = useRoqPlatformUserProfiles()
  console.log('data: ', data);
  return (
    <div>Test Page</div>
  )
}