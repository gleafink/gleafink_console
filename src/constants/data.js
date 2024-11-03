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

import ArangoDBIcon from "../assets/images/arangodb.svg"
import DocsIcon from "../assets/images/docs.png"
import airflowIcon from "../assets/images/airflow.png"
import vaultIcon from "../assets/images/vault.svg"
import MinioIcon from "../assets/images/minio.svg"

export const data = {
  categories: [
    {
      name: "Data Platform Applications",
      applications: [
        {
          name: "Metalnsights",
          link: "https://metainsights.gleafink.com/LandingPage",
          description:
            "A unified 360° metadata tool, helps in transforming data discovery, streamline governance and collaboration to empower your team in making insightful, data-driven decisions.",
          url: "htts://metainsights.gleafink.com",
          icon: <ScanEye />,
        },
        {
          name: "DataSculpt",
          link: "https://datasculpt.gleafink.com/",
          description:
            "Unlock the power of your data with DataSculpt! Tailor your transformations to reveal insights that drive smart, strategic decisions.",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
        {
          name: "IntroSight",
          link: "https://introsight.gleafink.com/#/build?query={%22limit%22:5000}",
          description:
            "A semantic tool that transforms complex data into a user-friendly, enriched model, empowering business users to easily understand and leverage insights!",
          url: "htts://metainsights.gleafink.com",
          icon: <SquareChartGantt />,
        },
      ],
    },
    {
      name: "Data Analytics Products",
      applications: [
        {
          name: "Talk to your Data",
          link: "https://jarvis.gleafink.com/landing",
          description:
            "Experience the power of dialogue with your data! Jarvis AI tool transforms complex queries into clear insights, simplifying decision-making!",
          url: "htts://metainsights.gleafink.com",
          icon: <PackagePlus />,
        },
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
      ],
    },
    {
      name: "Security",
      applications: [
        {
          name: "Vault",
          link: "vault.gleafink.com",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: vaultIcon,
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
          icon: airflowIcon,
        },
      ],
    },
    {
      name: "Storage",
      applications: [
        {
          name: "MinIo",
          link: "minio.gleafink.com",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: MinioIcon,
        },
        {
          name: "ArangoDB",
          link: "",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: ArangoDBIcon,
        },
      ],
    },

    {
      name: "Documentation",
      applications: [
        {
          name: "Data Platform Docs",
          link: "docs.gleafink.com",
          description: "",
          url: "htts://metainsights.gleafink.com",
          icon: DocsIcon,
        },
      ],
    },
  ],
}
