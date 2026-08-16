const config = {
  app: {
    name: "ArchanaAPI",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://archanapi.eu.cc",
    version: "3.0.0"
  },
  api: {
    prefix: "/api/v1",
    defaultDailyLimit: 100,
    plans: {
      free: { label: "FREE USER", dailyLimit: 100 },
      premium: { label: "PREMIUM", dailyLimit: 5000 },
      enterprise: { label: "ENTERPRISE", dailyLimit: 1000000 },
      owner: { label: "OWNER", dailyLimit: 999999999 }
    }
  }
};
module.exports = config;
