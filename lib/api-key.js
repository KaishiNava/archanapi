import crypto from "crypto";

export function generateApiKey(prefix = "arca_live") {
  const secret = crypto.randomBytes(24).toString("hex");
  return `${prefix}_${secret}`;
}
export function hashApiKey(key) {
  return crypto.createHash("sha256").update(key).digest("hex");
}
export function maskApiKey(key) {
  if (!key) return "";
  return key.slice(0, 12) + "••••••••••••" + key.slice(-4);
}
