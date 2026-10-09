import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  console.warn("⚠️ REDIS_URL environment variable is not defined in .env");
}

// Global singleton pattern to prevent multiple open connections during Fast Refresh in development
const globalForRedis = global as unknown as { redis?: Redis };

export const redis =
  globalForRedis.redis ||
  new Redis(redisUrl || "redis://localhost:6379", {
    lazyConnect: true,
    maxRetriesPerRequest: 3,
    connectTimeout: 5000,
  });

// Cache connection in development mode only
if (process.env.NODE_ENV !== "production") {
  globalForRedis.redis = redis;
}
