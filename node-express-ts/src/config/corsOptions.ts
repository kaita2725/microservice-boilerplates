import allowedOrigin from "./allowedOrigins";

type StaticOrigin = boolean | string | RegExp | Array<boolean | string | RegExp>;

const CustomOrigin = (
    requestOrigin: string | undefined,
    callback: (err: Error | null, origin?: StaticOrigin) => void,
) => {
    if (allowedOrigin.indexOf(requestOrigin!) !== -1 || !requestOrigin) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS!"))
    }
}

const corsOptions = {
    credentials: true,
    origin: CustomOrigin,
    // methods: ['GET', 'POST', 'OPTIONS'],
    // allowedHeaders: ['Content-Type', 'Authorization']
    //exposedHeaders: ["set-cookie"]
}

export = corsOptions;