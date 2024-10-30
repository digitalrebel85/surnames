import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Surname } from "@/lib/types";

interface SurnameCardProps {
  surname: Surname;
  showDetails?: boolean;
}

export function SurnameCard({ surname, showDetails = false }: SurnameCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {surname.name}
          <span className="text-sm font-normal text-muted-foreground">
            {surname.nationality}
          </span>
        </CardTitle>
        {showDetails && (
          <CardDescription>{surname.meaning}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {showDetails ? (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Notable Figures</h4>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                {surname.notableFigures.slice(0, 2).map((figure, index) => (
                  <li key={index}>{figure}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Interesting Facts</h4>
              <p className="text-sm text-muted-foreground">
                {surname.interestingFacts[0]}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {surname.meaning}
            </p>
            <Link
              href={`/surname/${surname.name.toLowerCase()}`}
              className="text-sm text-primary hover:underline inline-block"
            >
              Learn more
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}