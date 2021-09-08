import { NextFunction, Request, Response } from "express";
import { auth, user, fund, fundProcess } from "../services";
import { firebase } from "../firebase";
import "../type";

const { fbauth, Verify } = firebase;

/* Authendication services */

// Sign In
const signin = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await auth.signin(req.body);
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Sign Up
const signup = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await auth.signup(req.body);
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Google Facebook signin
const GoogleFacebook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = await auth.GoogleFacebook(req.body, id.message);
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Sign Out
const signout = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await auth.signout())) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Forget password
const forget = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await auth.forget(req.body);
  if (!info.err) res.status(200).send(info);
  else next(info);
};

/* User services */

// Get user detail
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await user.getUser(id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Edit user details
const userEdit = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await user.userEdit(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Add bank account removed
const addAccount = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await user.addAccount(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Comment user to fund
const comment = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await user.comment(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

/* Fund detail */

// Fund collector request creation
const createFund = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await fund.createFund(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Fund collector detail edit
const editFund = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await fund.editFund(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Delete fund detail
const deleteFund = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err && (await fund.deleteFund(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Referal fund detail
const referalFund = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err &&
      (await fund.referalFund(
        { fundId: <string>req.params.fundId },
        id.message
      ))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

/* Fund Processing services */

// Dashbaord
const dashbaord = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await fundProcess.dashbaord(); //req.body
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Fund donation to the user
const raiseFund = async (req: Request, res: Response, next: NextFunction) => {
  const id: err = await Verify(
      (<{ headers: { authorization: string } }>req).headers.authorization.split(
        " "
      )[1]
    ),
    info: err = (!id.err &&
      (await fundProcess.raiseFund(req.body, id.message))) || {
      err: true,
      message: "Token not found",
    };
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Detail page
const detailFund = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await fundProcess.detailFund({
    fundId: <string>req.params.fundId,
  });
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// All titles for search
const titleFund = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await fundProcess.titleFund();
  if (!info.err) res.status(200).send(info);
  else next(info);
};

// Search by title with match keyword
const searchFund = async (req: Request, res: Response, next: NextFunction) => {
  const info: err = await fundProcess.searchFund(req.body);
  if (!info.err) res.status(200).send(info);
  else next(info);
};

export default {
  signin,
  signup,
  GoogleFacebook,
  addAccount,
  signout,
  forget,
  getUser,
  userEdit,
  comment,
  createFund,
  editFund,
  deleteFund,
  referalFund,
  dashbaord,
  raiseFund,
  detailFund,
  titleFund,
  searchFund,
};
