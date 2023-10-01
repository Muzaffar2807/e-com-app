import { lazy, Suspense } from "react";
import LazyLoading from "../../../assets/loaders/LazyLoading";

const LazyComponent = lazy(() => import("./Signup"));

export default function Signup(props) {
  return (
    <Suspense
      fallback={
        <LazyLoading
          style={{
            margin: "30vh 50vw",
          }}
        />
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
}
