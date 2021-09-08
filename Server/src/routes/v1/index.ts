import { Router } from "express";
import { requests } from "../../middlewares";

const router = Router();

// Dashboard
router.route("/dashboard").get(requests.dashbaord);

// Sign Up
router.route("/signup").post(requests.signup);

// Google Facebook signup
router.route("/googlefacebook").post(requests.GoogleFacebook);

// Sign In
router.route("/signin").post(requests.signin);

// Sign Out
router.route("/signout").get(requests.signout);

// Forget password
router.route("/forget").post(requests.forget);

// Get user detail
router.route("/user").get(requests.getUser);

// Edit user detail
router.route("/edit").post(requests.userEdit);

// Comment user to fund
router.route("/comment").post(requests.comment);

// Referal link for fund
router.route("/referal/:fundId").get(requests.referalFund);

// Add bank account
router.route("/account").post(requests.addAccount);

// Create fund needs
router.route("/create").post(requests.createFund);

// Edit fund
router.route("/edit_fund").post(requests.editFund);

// Delete fund
router.route("/delete_fund").post(requests.deleteFund);

// Detail Fund
router.route("/detail/:fundId").get(requests.detailFund);

// Donate fund
router.route("/raise").post(requests.raiseFund);

// Search titles
router.route("/init_search").get(requests.titleFund);

// Search fund needs
router.route("/search").post(requests.searchFund);

export default router;
