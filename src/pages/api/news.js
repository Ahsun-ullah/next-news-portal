// const { default: config } = require("@/config");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://ahsunrahim:WDDVQuK4OMm0ASIF@cluster0.xetv3r0.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const newsCollection = client.db("news_portal").collection("news");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }
  } finally {
  }
}
export default run;
