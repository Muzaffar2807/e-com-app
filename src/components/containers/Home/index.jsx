import { lazy, Suspense } from "react";
import { LazyLoader } from "../../../assets/loaders";

const LazyComponent = lazy(() => import("./Home"));

const Home = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export default Home;
