const PORT = process.env.PORT || 3001;
const SEED = process.env.SEED || 'seed_de_api_mobile_leyends';
const TIME_TOKEN = process.env || 60 * 60 + 24 + 30;

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/leyends_mobile";

module.exports = {
    PORT, 
    SEED,
    TIME_TOKEN,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_URL
}