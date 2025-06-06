import { createLazyFileRoute } from "@tanstack/react-router";
import TopHero from "../components/topcreator/TopHero";

export const Route = createLazyFileRoute("/rankings")({
  component: RouteComponent,
});

const content = {
  head: "Top Creators",
  des: "Check out top ranking NFT artists on the NFT Marketplace.",
};

function RouteComponent() {
  return (
    <>
      <TopHero {...content} />
    </>
  );
}
