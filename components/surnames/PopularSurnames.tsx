import { popularSurnames } from "@/lib/data";
import { SurnameCard } from "./SurnameCard";

export function PopularSurnames() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Popular Surnames</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularSurnames.map((surname) => (
          <SurnameCard key={surname.name} surname={surname} />
        ))}
      </div>
    </section>
  );
}