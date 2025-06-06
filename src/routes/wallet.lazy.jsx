import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/wallet"!</div>;
}
