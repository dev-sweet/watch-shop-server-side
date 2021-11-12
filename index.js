const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// mongo db uri and mongodb client
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DP_PASS}@cluster0.mas8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("watch_shop");
    const productsCollection = database.collection("products");
    const usersCollection = database.collection("users");

    app.get("/products", async (req, res) => {
      const limit = parseInt(req.query.limit);
      let products;
      if (limit) {
        const result = productsCollection.find({}).limit(limit);
        products = await result.toArray();
      } else {
        const result = productsCollection.find({});
        products = await result.toArray();
      }

      res.json(products);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const product = await productsCollection.findOne(filter);

      res.json(product);
    });

    // post user to users collection
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.json(result);
      console.log(result);
    });
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = { $set: user };

      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      res.json(result);
    });
  } finally {
  }
}
run().catch(console.dir());
app.get("/", (req, res) => {
  res.send("Watch shop server is running...");
});

app.listen(port, () => {
  console.log(`watch shop server running at port : ${port}`);
});
