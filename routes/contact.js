import express from "express";

import * as contactController from '../controllers/contact.js'

const router = express.Router();

router.post('/',contactController.addContact)
router.get('/',contactController.getContact)

export default router;


