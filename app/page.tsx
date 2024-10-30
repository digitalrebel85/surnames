import { SearchHero } from "@/components/search/SearchHero";
import { PopularSurnames } from "@/components/surnames/PopularSurnames";
import { OriginExplorer } from "@/components/surnames/OriginExplorer";
import { AlphabetBrowser } from "@/components/surnames/AlphabetBrowser";
import { surnames } from "@/lib/data";
import { groupSurnamesByOrigin } from "@/lib/utils";

export default function HomePage() {
  const originGroups = groupSurnamesByOrigin(surnames);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <SearchHero />
      <PopularSurnames />
      <OriginExplorer groups={originGroups} />
      <AlphabetBrowser />
    </div>
  );
}