import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
