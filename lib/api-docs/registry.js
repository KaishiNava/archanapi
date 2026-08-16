export const apiDocs = [
  {
    slug: "health",
    name: "Health Check",
    category: "System",
    method: "GET",
    endpoint: "/api/v1/health",
    description: "Check service status and API version.",
    authentication: false,
    parameters: [],
    exampleResponse: {
      status: true, code: 200, creator: "ArchanaAPI",
      data: { service: "ArchanaAPI", status: "online", version: "3.0.0" }
    }
  },
  {
    slug: "tiktok",
    name: "TikTok",
    category: "Downloader",
    method: "GET",
    endpoint: "/api/v1/tiktok",
    description: "Public TikTok processing endpoint. Replace the service implementation with your scraper.",
    authentication: true,
    parameters: [
      { name: "url", type: "string", required: true, description: "Public TikTok URL." }
    ],
    exampleResponse: {
      status: true, code: 200, creator: "ArchanaAPI",
      data: { url: "https://www.tiktok.com/@user/video/123", title: "Example", media: [] }
    }
  }
];
