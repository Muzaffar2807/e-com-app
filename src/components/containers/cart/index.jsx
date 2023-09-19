import { lazy, Suspense } from "react";
import { LazyLoader } from "../../../assets/loaders";

const LazyComponent = lazy(() => import("./Cart"));

const Cart = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export default Cart;
