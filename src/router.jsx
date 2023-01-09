import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Logements from "./pages/Logements"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/logements", element: <Logements /> },
      { path: "/about", element: <About /> },
      { path: "/*", element: <Error /> },
    ],
  },
])

export default router
