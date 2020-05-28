/** API routes for strings. */

const express = require('express');
const router = new express.Router();
const StringData = require('../models/stringData');

/** GET /   get all strings
 */

router.get('/', async (req, res, next) => {
  try {
    const result = await StringData.findAll();
    return res.json(result);
  } catch (err) {
    return next(err);
  }
});

/** POST /     add new string
 */

router.post('/', async (req, res, next) => {
  try {
    const { str } = req.body;
    if (!str || !str.trim()) {
      const error = new Error('Error - must input valid string');
      error.status = 400;
      throw error;
    }
    const result = await StringData.create(str);
    return res.status(201).json(result[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
