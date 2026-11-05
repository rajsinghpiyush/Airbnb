import express from "express"
import { login, signUp } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});
export default  authRouter