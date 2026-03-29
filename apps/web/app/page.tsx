import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-2">
          Apple-Inspired UI
        </h1>
        <p className="text-neutral-500">
          Clean, subtle, and tactile components.
        </p>
      </div>

      {/* Your Buttons */}
      <div className="flex items-center gap-6 p-12 border border-neutral-100 rounded-[24px] bg-neutral-50/50 shadow-sm">
        <Button variant="primary" size="default">
          Primary Action
        </Button>

        <Button variant="secondary" size="default">
          Secondary
        </Button>

        <Button variant="ghost" size="default">
          Cancel
        </Button>
      </div>
    </main>
  );
}
