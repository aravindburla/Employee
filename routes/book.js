import express from "express";
import {
  addBook,
  decrementLike,
  deleteBook,
  getBookByAuthors,
  getBookByIdAndAuthors,
  getBookByIdAndAuthorsOfMe,
  incrementLike,
  updateBook,
} from "../controllers/book.js";
import { extractJwt } from "../middlewares/jwt.js";
const router = express.Router();

router.post("/", extractJwt, addBook);
router.get("/", extractJwt, getBookByAuthors);
router.put("/", extractJwt, updateBook);
router.delete("/", extractJwt, deleteBook);
router.get("/me", extractJwt, getBookByIdAndAuthorsOfMe);
router.get("/like/:id", extractJwt, incrementLike);
router.get("/dislike/:id", extractJwt, decrementLike);
router.get("/:id", extractJwt, getBookByIdAndAuthors);

export default router;
