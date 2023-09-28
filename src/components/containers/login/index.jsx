import { lazy, Suspense } from "react";
import LazyLoading from "../../../assets/loaders/LazyLoading";

const LazyComponent = lazy(() => import("./Login"));

export default function Login(props) {
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
