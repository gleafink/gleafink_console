import {
  BookCheck,
  Database,
  Fan,
  Fingerprint,
  Music3,
  PackagePlus,
  ScanEye,
  SquareChartGantt,
  Vault,
} from "lucide-react"

export const data = {
  categories: [
    {
      name: "Data Platform Applications",
      applications: [
        {
          name: "Metalnsights",
          link: "https://metainsights.gleafink.com/LandingPage",
          description: "It is a insights tool for your Db.",
          url: "htts://metainsights.gleafink.com",
          icon: <ScanEye />,
        },
        {
          name: "DataSculpt",
          link: "https://datasculpt.gleafink.com/",
          description:
            "It involves transforming raw data into a more usable and structured format.",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "IntroSight",
          link: "https://introsight.gleafink.com/#/build?query={%22limit%22:5000}",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <SquareChartGantt />,
        },
      ],
    },
    {
      name: "Data Analytics Products",
      applications: [
        {
          name: "A/B Testing",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "Customer Segmentation",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "Talk to your Data",
          link: "https://jarvis.gleafink.com/landing",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
      ],
    },
    {
      name: "Security",
      applications: [
        {
          name: "Vault",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Vault />,
        },
        {
          name: "Authoriation",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Fingerprint />,
        },
      ],
    },
    {
      name: "Orchestration",
      applications: [
        {
          name: "Airflow",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Fan />,
        },
      ],
    },
    {
      name: "Storage",
      applications: [
        {
          name: "MinIo",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Music3 />,
        },
        {
          name: "ArangoDB",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Database />,
        },
      ],
    },

    {
      name: "Documentation",
      applications: [
        {
          name: "Data Platform Docs",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <BookCheck />,
        },
      ],
    },
  ],
}
