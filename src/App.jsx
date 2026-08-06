import {
  lazy,
  Suspense,
} from "react";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";

const AuraDrive = lazy(() =>
  import("./pages/AuraDrive"),
);

const Kokoro = lazy(() =>
  import("./pages/Kokoro"),
);

const GuQi = lazy(() =>
  import("./pages/GuQi"),
);

const BeyondTheShadows = lazy(() =>
  import("./pages/BeyondTheShadows"),
);

function RouteLoader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="route-loader"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
            }
      }
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.25,
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading project"
    >
      <span className="route-loader-line" />
      <p>Loading project</p>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteLoader />}>
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/projects/aura-drive"
            element={
              <PageTransition>
                <AuraDrive />
              </PageTransition>
            }
          />

          <Route
            path="/projects/kokoro"
            element={
              <PageTransition>
                <Kokoro />
              </PageTransition>
            }
          />

          <Route
            path="/projects/gu-qi"
            element={
              <PageTransition>
                <GuQi />
              </PageTransition>
            }
          />

          <Route
            path="/projects/beyond-the-shadows"
            element={
              <PageTransition>
                <BeyondTheShadows />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <NavBar />
      <AnimatedRoutes />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MotionConfig>
  );
}