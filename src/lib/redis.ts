import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  console.warn("[redis] REDIS_URL configuration is missing. Defaulting to local instance.");
}

// reuse one client across hot reloads in dev
const globalForRedis = global as unknown as { redis?: Redis };

export const redis =
  globalForRedis.redis ||
  new Redis(redisUrl || "redis://localhost:6379", {
    lazyConnect: true,
    maxRetriesPerRequest: 3,
    connectTimeout: 5000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForRedis.redis = redis;
}
