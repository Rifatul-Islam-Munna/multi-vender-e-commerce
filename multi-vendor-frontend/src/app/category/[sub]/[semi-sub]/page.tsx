import { ExploreMore } from "@/components/global/wearing-common-each/explore-more";
import { HeroBanner } from "@/components/global/wearing-common-each/hero-banner";
import { Lookbook } from "@/components/global/wearing-common-each/lookbook";

import { lookbookImages } from "@/Static-Data/wearing-common/lookbook";

import { recommendations } from "@/Static-Data/wearing-common/recommendations";
import ClintWrapper from "./ClintWrapper";
import { categories } from "@/Static-Data/NavBar";
export async function generateStaticParams() {
  const params: { sub: string; "semi-sub": string }[] = [];

  for (const main of categories) {
    for (const sub of main.submenu) {
      params.push({
        sub: main.name.toLocaleLowerCase(),
        "semi-sub": sub.label.toLocaleLowerCase(),
      });
    }
  }

  return params;
}

export default async function page({
  params,
}: {
  params: { sub: string; "semi-sub": string };
}) {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <ClintWrapper />

      <Lookbook images={lookbookImages} />

      <ExploreMore recommendations={recommendations} />
    </main>
  );
}
