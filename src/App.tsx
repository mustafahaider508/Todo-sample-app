import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./components/Todos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ToastContainer />
          <Todo />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
