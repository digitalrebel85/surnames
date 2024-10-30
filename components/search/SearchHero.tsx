"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchHero() {
  const [surname, setSurname] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (surname) {
      router.push(`/surname/${surname.toLowerCase()}`);
    }
  };

  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">
        Discover Your Surname's Origin and Meaning
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Explore the history and significance behind your family name
      </p>
      <div className="flex max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Enter a surname"
          className="mr-2"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </section>
  );
}