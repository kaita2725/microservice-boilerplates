import { Redis } from "ioredis"
import redisConfig from "../database/config/redis.config";
const config = redisConfig;

const redis = new Redis({
    host: config.host,
    port: config.port,
    password: config.password,
    retryStrategy: function (times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
})

export default redis