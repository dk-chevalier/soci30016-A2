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
import YourEmissions from "./pages/YourEmissions";

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
        element: <YourEmissions />,
        path: "/your-emissions",
        id: "your-emissions",
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
        path: "/eol",
        id: "eol",
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
