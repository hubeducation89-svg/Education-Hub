import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  noindex = false,
}: SEOProps) {
  const defaultTitle = "Education Hub by Gunjan Gaur";
  const defaultDescription =
    "Learn from Education Hub by GUNJAN GAUR. Get free courses on C Programming, C++, Logical Organization, Digital Marketing, Computer Basics, MS Office, and Science.";
  const defaultKeywords =
    "Education Hub by GUNJAN GAUR, Gunjan Gaur, Gunjan Gaur YouTube, free programming courses, learn C programming, learn C++, Logical organization computer, Computer basics, MS Office courses, science courses, digital marketing";
  const siteUrl = "https://education-hub-ivory.vercel.app";

  useEffect(() => {
    // Set page title
    const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
    document.title = pageTitle;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent = description || defaultDescription;
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = keywords || defaultKeywords;
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywordsContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }

    // Set robots meta tag for noindex
    if (noindex) {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute("content", "noindex, nofollow");
      } else {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
      }
    }

    // OpenGraph Meta Tags
    setMetaTag("property", "og:title", ogTitle || pageTitle);
    setMetaTag("property", "og:description", ogDescription || descContent);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", ogUrl || siteUrl);
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("property", "og:image:alt", ogTitle || pageTitle);
    }

    // Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", twitterCard);
    setMetaTag("name", "twitter:title", twitterTitle || pageTitle);
    setMetaTag("name", "twitter:description", twitterDescription || descContent);
    if (twitterImage) {
      setMetaTag("name", "twitter:image", twitterImage);
    }
    setMetaTag("name", "twitter:creator", "@GunjanGaur");
    setMetaTag("name", "twitter:site", "@GunjanGaur");

    // Additional SEO Meta Tags
    setMetaTag("name", "viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("name", "charset", "UTF-8");
    setMetaTag("name", "language", "English");
    setMetaTag("name", "author", "Education Hub by GUNJAN GAUR");
    setMetaTag("name", "theme-color", "#0f2147");

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Alternate links for multiple languages (future expansion)
    setAlternateLink("en", ogUrl || siteUrl);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonical, noindex]);

  return null;
}

/**
 * Helper function to set meta tags
 */
function setMetaTag(
  attr: "name" | "property",
  attrValue: string,
  content: string
): void {
  let metaTag = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (metaTag) {
    metaTag.setAttribute("content", content);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute(attr, attrValue);
    meta.content = content;
    document.head.appendChild(meta);
  }
}

/**
 * Helper function to set alternate language links
 */
function setAlternateLink(lang: string, href: string): void {
  let altLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (!altLink) {
    altLink = document.createElement("link");
    altLink.rel = "alternate";
    altLink.setAttribute("hreflang", lang);
    altLink.href = href;
    document.head.appendChild(altLink);
  }
}