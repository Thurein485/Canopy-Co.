import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": {
    title: "Canopy Co. | Park Learning Website",
    description: "A modern educational website about better local parks, community learning, and public participation."
  },
  "/learn": {
    title: "Learn | Canopy Co.",
    description: "Explore short educational lessons about park safety, shade, access, ecology, and community use."
  },
  "/quiz": {
    title: "Quiz | Canopy Co.",
    description: "Take the park learning quiz and test your understanding of the site's key ideas."
  },
  "/impact": {
    title: "Impact | Canopy Co.",
    description: "Understand the environmental, social, and community benefits behind better park design."
  },
  "/get-involved": {
    title: "Get Involved | Canopy Co.",
    description: "Join workshops, volunteer moments, and community learning activities."
  },
  "/contact": {
    title: "Contact | Canopy Co.",
    description: "Access contact details, workshop information, and FAQs for the educational website."
  },
  "/login": {
    title: "Login | Canopy Co.",
    description: "Sign in to access your learning dashboard, saved pages, and account activity."
  },
  "/signup": {
    title: "Sign Up | Canopy Co.",
    description: "Create an account to save learning pages, join events, and manage your activity."
  },
  "/dashboard": {
    title: "Dashboard | Canopy Co.",
    description: "Manage your profile, quiz activity, saved pages, and community participation."
  }
};

function updateMeta(name, content) {
  const selector = `meta[name="${name}"], meta[property="${name}"]`;
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute("content", content);
  }
}

function PageMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta["/"];
    document.title = meta.title;
    updateMeta("description", meta.description);
    updateMeta("og:title", meta.title);
    updateMeta("og:description", meta.description);
    updateMeta("twitter:title", meta.title);
    updateMeta("twitter:description", meta.description);
  }, [location.pathname]);

  return null;
}

export default PageMeta;
