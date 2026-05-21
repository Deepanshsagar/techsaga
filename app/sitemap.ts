// app/sitemap.ts

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.techsaga.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/services/custom-software-development",
    "/services/enterprise-software-development",
    "/services/product-development",
    "/services/web-application-development",
    "/services/mobile-application-development",
    "/services/cloud-application-development",
    "/services/cloud-infrastructure",
    "/services/hybrid-infrastructure",
    "/services/on-premises-infrastructure",
    "/services/integration",
    "/services/migration",
    "/services/devops",

    "/services/marketing/digital-marketing",
    "/services/marketing/influential-marketing",
    "/services/marketing/online-reputation-management",
    "/services/marketing/digital-consultation",
    "/services/marketing/improved-roi",

    "/services/application-support",
    "/services/infrastructure-support",
    "/services/customer-support",

    "/services/manual-testing",
    "/services/automation-testing",
    "/services/continuous-testing",

    "/services/digital-transformation",
    "/services/business-technology-consulting",
    "/services/cloud-strategy-consulting",

    "/solutions/workday",
    "/solutions/salesforce",
    "/solutions/zoho",
    "/solutions/sap",
    "/solutions/data-solutions",
    "/solutions/erpnext",
    "/solutions/servicenow",
    "/solutions/aws-amazon-web-services",
    "/solutions/contract-consulting",

    "/industries/e-commerce-solution",
    "/industries/healthcare",
    "/industries/banking-finance",
    "/industries/education-e-learning",
    "/industries/retail-and-consumer-goods",
    "/industries/manufacturing",
    "/industries/real-estate",
    "/industries/logistics-and-transportation",
    "/industries/travel-tourism",
    "/industries/government",

    "/about-us",
    "/management-team",
    "/portfolio",
    "/careers",
    "/contact-us",

    "/terms-and-conditions",
    "/privacy-policy",
    "/cancellation-and-refund-policy",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/"
        ? "daily"
        : route.includes("/services")
        ? "weekly"
        : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}