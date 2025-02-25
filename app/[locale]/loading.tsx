export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-spa-gold border-t-transparent" />
        <div className="absolute inset-3 animate-pulse rounded-full bg-spa-gold/20" />
      </div>
    </div>
  );
} 