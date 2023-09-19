import { lazy, Suspense } from "react";
import { LazyLoader } from "../../../assets/loaders";

const LazyComponent = lazy(() => import("./Wishlist"));

const Wishlist = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export default Wishlist;
