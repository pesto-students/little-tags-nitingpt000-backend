const Payment = require("../models/Payment");
const mongoose = require("mongoose");

async function createPayment(req, res) {
  const payment = new Payment({
    name: req.body.name,
    cardNumber: req.body.cardNumber,
    expiry: req.body.expiry,
    cardHash: req.body.cardHash,
    currency: req.body.currency,
  });
  const result = await payment.save();
  res.status(201).send(result);
}

async function getAllPayments(req, res) {
  const payments = await Payment.find({});
  res.send(payments);
}

async function updatePayment(req, res) {
  const payment = await Payment.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      cardNumber: req.body.cardNumber,
      expiry: req.body.expiry,
      cardHash: req.body.cardHash,
      currency: req.body.currency,
    },
  });
  console.log(payment);
  res.status(200).send(payment);
}

async function deletePayment(req, res) {
  const payment = await Payment.findByIdAndUpdate(req.params.id, {
    $set: {
      softDelete: true,
    },
  });
  res.status(200).send(payment);
}

module.exports = {
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
};
