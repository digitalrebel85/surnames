import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AlphabetBrowser() {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Browse Surnames</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {letters.map((letter) => (
          <Link key={letter} href={`/surnames/${letter.toLowerCase()}`}>
            <Button variant="outline" className="w-full">
              {letter}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}