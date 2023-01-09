import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css"
import { RouterProvider } from "react-router"
import router from "./router"
import App from "./App"
import Header from "./components/Header"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <Header />
      <App />
      <Footer />
    </RouterProvider>
  </React.StrictMode>
)
