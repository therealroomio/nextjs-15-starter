"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold text-spa-brown">Something went wrong!</h2>
      <p className="text-muted-foreground">
        We apologize for the inconvenience. Please try again.
      </p>
      <Button
        onClick={reset}
        variant="outline"
        className="border-spa-gold text-spa-brown hover:bg-spa-gold/10"
      >
        Try again
      </Button>
    </div>
  );
} 