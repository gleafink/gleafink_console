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
          description: "It is a insights tool for your Db.",
          url: "htts://metainsights.gleafink.com",
          icon: <ScanEye />,
        },
        {
          name: "DataSculpt",
          description:
            "It involves transforming raw data into a more usable and structured format.",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "IntroSight",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <SquareChartGantt />,
        },
      ],
    },
    {
      name: "Security",
      applications: [
        {
          name: "Vault",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Vault />,
        },
        {
          name: "Authoriation",
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
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Music3 />,
        },
        {
          name: "ArangoDB",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <Database />,
        },
      ],
    },
    {
      name: "Data Science Products",
      applications: [
        {
          name: "A/B Testing",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "Customer Segmentation",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "Talk to your Data",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
      ],
    },
    {
      name: "Documentation",
      applications: [
        {
          name: "Data Platform Docs",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: <BookCheck />,
        },
      ],
    },
  ],
}
