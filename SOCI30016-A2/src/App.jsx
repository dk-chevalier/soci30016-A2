import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Mining from "./pages/Mining";
import Manufacturing from "./pages/Manufacturing";
import Use from "./pages/Use";
import Disposal from "./pages/Disposal";
import Landfill from "./pages/Landfill";
import Reuse from "./pages/Reuse";
import Recycle from "./pages/Recycle";
import Repurpose from "./pages/Repurpose";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
    id: "root",
    children: [
      {
        element: <Mining />,
        path: "/mining",
        id: "mining",
      },
      {
        element: <Manufacturing />,
        path: "/manufacturing",
        id: "manufacturing",
      },
      {
        element: <Use />,
        path: "/use",
        id: "use",
      },
      {
        element: <Disposal />,
        path: "/disposal",
        id: "disposal",
      },
      {
        element: <Landfill />,
        path: "/landfill",
        id: "landfill",
      },
      {
        element: <Reuse />,
        path: "/reuse",
        id: "reuse",
      },
      {
        element: <Recycle />,
        path: "/recycle",
        id: "recycle",
      },
      {
        element: <Repurpose />,
        path: "/repurpose",
        id: "repurpose",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
