const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
} = require("./controllers");

router.get("/api/accounts", getAllAccounts);
router.post("/api/accounts", addAccount);
router.delete("/api/accounts/:id", deleteAccount);
router.put("/api/accounts/:id", updateAccount);

module.exports = router;
