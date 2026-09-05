import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import IntroLoader from "./IntroLoader";
import PageMeta from "./PageMeta";
import ScrollProgress from "./ScrollProgress";
import ScrollTopButton from "./ScrollTopButton";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useRevealOnScroll(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="app-shell">
      <PageMeta />
      <IntroLoader visible={loading} />
      <ScrollProgress />
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <SiteHeader />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <ScrollTopButton />
      <SiteFooter />
    </div>
  );
}

export default Layout;
