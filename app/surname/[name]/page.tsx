import { notFound } from "next/navigation";
import { surnames } from "@/lib/data";
import { SurnameCard } from "@/components/surnames/SurnameCard";

interface SurnamePageProps {
  params: {
    name: string;
  };
}

export function generateStaticParams() {
  return surnames.map((surname) => ({
    name: surname.name.toLowerCase(),
  }));
}

export default function SurnamePage({ params }: SurnamePageProps) {
  const surname = surnames.find(
    (s) => s.name.toLowerCase() === params.name.toLowerCase()
  );

  if (!surname) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{surname.name}</h1>
          <p className="text-xl text-muted-foreground">
            Origin: {surname.nationality}
          </p>
        </div>

        <SurnameCard surname={surname} showDetails />

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">All Interesting Facts</h2>
            <ul className="space-y-2">
              {surname.interestingFacts.map((fact, index) => (
                <li key={index} className="text-muted-foreground">
                  • {fact}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Notable People</h2>
            <ul className="space-y-2">
              {surname.notableFigures.map((person, index) => (
                <li key={index} className="text-muted-foreground">
                  • {person}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}