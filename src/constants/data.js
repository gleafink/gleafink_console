import {
  Fingerprint,
  PackagePlus,
  ScanEye,
  SquareChartGantt,
} from "lucide-react"

import airflowIcon from "../assets/images/airflow.png"
import ArangoDBIcon from "../assets/images/arangodb.svg"
import DocsIcon from "../assets/images/docs.png"
import JarvisIcon from "../assets/images/jarvisbot.png"
import SupersetLogo from "../assets/images/Superset_logo.svg.png"
import MinioIcon from "../assets/images/minio.svg"
import vaultIcon from "../assets/images/vault.svg"
import AuthorizationIcon from "../assets/images/authorization.png"

export const data = {
  categories: [
    {
      name: "Data Platform Applications",
      applications: [
        {
          name: "Metalnsights",
          link: "https://metainsights.gleafink.com/LandingPageScroll",
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
          icon: JarvisIcon,
        },
        {
          name: "Superset",
          link: "https://superset.gleafink.com",
          description:
            "Apache Superset is an open-source data visualization and exploration platform designed for creating interactive dashboards and reports.",
          url: "",
          icon: SupersetLogo,
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
          link: "https://vault.gleafink.com",
          description:
            "HashiCorp Vault is a secure tool for managing secrets, encryption keys, and access to sensitive data.",
          url: "htts://metainsights.gleafink.com",
          icon: vaultIcon,
        },
        {
          name: "Authoriation",
          link: "",
          description:
            "The authorization module manages access control, ensuring users have the correct permissions for secure resource access.",
          url: "htts://metainsights.gleafink.com",
          icon: AuthorizationIcon,
        },
      ],
    },
    {
      name: "Orchestration",
      applications: [
        {
          name: "Airflow",
          link: "",
          description:
            "Apache Airflow is an open-source platform for scheduling, orchestrating, and monitoring complex workflows.",
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
          link: "https://minio.gleafink.com",
          description:
            "MinIO is a high-performance, open-source object storage solution compatible with the S3 API for managing unstructured data.",
          url: "htts://metainsights.gleafink.com",
          icon: MinioIcon,
        },
        {
          name: "ArangoDB",
          link: "",
          description:
            "ArangoDB is a multi-model, open-source database that supports graph, document, and key-value data models for flexible data storage.",
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
          link: "https://docs.gleafink.com",
          description:
            "Product documentation provides comprehensive guides, references, and best practices to help users effectively utilize and troubleshoot products.",
          url: "htts://metainsights.gleafink.com",
          icon: DocsIcon,
        },
      ],
    },
  ],
}
