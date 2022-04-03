const express = require("express");
require("dotenv").config({ path: "src/.env" });
const cors = require("cors");
const uuid = require("uuid").v4;

require("./src/dbConfig/connection");
const stripe = require('stripe')('sk_test_R10Qnz7v0YC19OD7v54ve3UO00A3dxDiHU');
const apiRoutes = require("./src/routes");
//const deserializeUser = require("./src/middlewares/deserializeUser");
// App Configuration
const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(deserializeUser);

app.use(express.static("build"));
app.use("/public", express.static("public"));
// API Routes
app.use("/api/", apiRoutes);



app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);
 
  let error;
  let status;
  try {
    const { product, token } = req.body;
 
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
 
    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
 
  res.json({ error, status });
});

app.listen(PORT, () => {
  console.log(`Server Is running on http://localhost:8000`);
});
