//for open source API for public
const allowedOrigin = process.env.ALLOWED_ORIGINS?.split(',').map(o => o.trim()) || [];

export = allowedOrigin;