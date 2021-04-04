const router = require("express").Router();
const Order = require("../models/Order");
const ProductOrdered = require("../models/ProductOrdered");
const verify = require("./verifyToken");

router.post("/:orderId", verify, async (req, res) => {
  const { orderId } = req.params;
  // create a new order
  const order = new Order({
    order_amount: res.body.order_amount,
    currency: res.body.currency,
    order_discount: res.body.order_discount,
    user_id: req.session.auth,
    product_ids: Object.keys(req.body.product_ids),
    product_quantities: Object.values(req.body.product_ids),
    address_id: req.body.address_id,
    payment_id: req.body.payment_id,
    extra_misc: req.body.extra_misc,
  });
  if (orderId) {
    // edit order
    Order.findByIdAndUpdate(orderId, order, (err, res) => {
      if (err) {
        res.status(400).send(res);
      }
      res.status(204);
    });
  } else {
    // save as new
    const orderId = order.save((err) => {
      if (err) {
        res.status(400).send(res);
      }
    });
    if (req.body.product_ids) {
      const productOrders = [];
      Object.keys(req.body.product_ids).forEach((key) => {
        productOrders.push({
          orderId,
          product_id: key,
          quantity: req.body.product_ids[key],
        });
      });
      ProductOrdered.insertMany(productOrders, (err, docs) => {
        if (err) {
          res.status(400).send(err);
        }
      });
    }
  }
  res.status(204);
});

router.get("/", async (req, res) => {
  const { startDuration, endDuration } = req.query;
  // by default give todays date
  const startToday = new Date();
  startToday.setHours(0, 0, 0, 0);
  const endToday = new Date();
  endToday.setHours(23, 59, 59, 999);

  const startDate = startDuration ? new Date(startDuration * 1000) : startToday;
  const endDate = endDuration ? new Date(endDuration * 1000) : endToday;
  const mostProduct = await ProductOrdered.aggregate([
    {
      $match: {
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    },
    {
      $group: {
        _id: "$product_id",
        maxTotalAmount: { $sum: "$quantity" },
        maxQuantity: { $max: "$quantity" },
      },
    },
    {
      $sort: { maxTotalAmount: -1 },
    },
    { $limit: 1 },
    {
      $lookup: {
        from: "Products",
        localField: "_id",
        foreignField: "_id",
        as: "product",
      },
    },
  ]);

  const totalAmount = await Order.aggregate([
    {
      $match: {
        modified_at: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: "$order_amount" },
        totalDiscount: { $sum: "$order_discount" },
        maxAmount: { $max: "$order_amount" },
      },
    },
  ]);

  const totalUser = await Order.aggregate([
    {
      $match: {
        modified_at: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    },
    {
      $group: {
        _id: "$user_id",
        count: { $sum: 1 },
      },
    },
  ]);
  const myOrder = await Order.aggregate([
    {
      $match: {
        user_id: req.session.auth,
      },
    },
    {
      $lookup: {
        from: "Products",
        localField: "product_ids",
        foreignField: "_id",
        as: "products",
      },
    },
  ]);
  const result = { mostProduct, totalAmount, totalUser, myOrder };

  res.send(result);
});

router.get("/dummy", async (req, res) => {
  const productOrders = [];
  for (let index = 0; index < 10; index++) {
    productOrders.push({
      orderId: index,
      product_id: index % 3,
      quantity: index,
    });
  }

  await ProductOrdered.insertMany(productOrders, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    }
  });
  res.status(204);
});

router.delete("/:orderId", verify, async (req, res) => {
  const { orderId } = req.params;
  const order = new Order({
    softDelete: true,
  });
  Order.findByIdAndUpdate(orderId, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(204);
  });
});

module.exports = router;
