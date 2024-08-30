const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://iambotforwork72:sahidportfoliome123@cluster0.2a1sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
dbConnect();
async function dbConnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("DB connected successfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default client;
