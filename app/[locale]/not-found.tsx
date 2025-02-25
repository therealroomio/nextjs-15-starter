import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-playfair text-4xl font-bold text-spa-brown">
        Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button asChild className="bg-spa-gold hover:bg-spa-gold/90 text-spa-brown">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
} 