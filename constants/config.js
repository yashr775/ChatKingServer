const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:4173", "https://chatkingdep-3yxkyg402-yashs-projects-bc7edce6.vercel.app", process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}

const CHATKING_TOKEN = "chatKingToken"

export { corsOptions, CHATKING_TOKEN }