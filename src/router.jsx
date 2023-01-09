import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home"
import logementsData from "./api/logements.json"
import Logement from "./pages/Logement"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <Logement />,
        path: "/:logementId",
        loader: logementsData.id,
      },
      { path: "/about", element: <About /> },
      { path: "/*", element: <Error /> },
    ],
  },
])

export default router
