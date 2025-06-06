import { createLazyFileRoute } from "@tanstack/react-router";
import MarketHero from "../components/marketplace/MarketHero";
import MarketNFTs from "../components/marketplace/MarketNFTs";

export const Route = createLazyFileRoute("/marketPlace")({
  component: RouteComponent,
});

const content = {
  head: "Browse Marketplace",
  des: "Browse through more than 50k NFTs on the NFT Marketplace.",
};

function RouteComponent() {
  return (
    <>
      <MarketHero {...content} />
      <MarketNFTs />
    </>
  );
}
