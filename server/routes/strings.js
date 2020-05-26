/** API routes for strings. */

const express = require('express');
const router = new express.Router();

let data = ['Original string!', 'Second string!', 'Third string!'];

/** GET /   get all strings
 */

router.get('/', (req, res, next) => {
  try {
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

/** POST /     add a new string
 */

router.post('/', (req, res, next) => {
  try {
    const { str } = req.body;
    if (!str || !str.trim()) throw new Error('Please input valid string.');
    data = [str, ...data];

    return res.status(201).json(data[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
