import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "./App.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
