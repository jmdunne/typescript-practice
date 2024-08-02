"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {
  const { onOpen } = useNewAccount();
  
  return (
    <div className="flex  items-center justify-center h-screen">
      <Button onClick={onOpen}>Open</Button>
    </div>
  );
}