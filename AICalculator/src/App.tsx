import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./screens/home";
import Splash from "./screens/welcome/welcomescreen";
import "@/index.css";

const paths = [{
  path:'/',
  element:(
    <Home/>
  ),
},]

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <MantineProvider>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <RouterProvider router={BrowserRouter} />
      )}
    </MantineProvider>
  )
}

export default App;