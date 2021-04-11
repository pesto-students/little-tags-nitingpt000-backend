const router = require("express").Router();
const {
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/paymentController");

router.route("/").get(getAllPayments).post(createPayment);
router.route("/:id").put(updatePayment).delete(deletePayment);

module.exports = router;
