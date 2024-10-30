import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OriginExplorer() {
  const origins = [
    "English",
    "Irish",
    "Scottish",
    "German",
    "French",
    "Italian",
    "Spanish",
    "Polish",
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Explore by Origin</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {origins.map((origin) => (
          <Link key={origin} href={`/origin/${origin.toLowerCase()}`}>
            <Button variant="outline" className="w-full">
              {origin} Names
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}