const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'show all clients' } });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'create new client' } });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, data: { msg: `get client ${req.params.id}` } });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, data: { msg: `update client ${req.params.id}` } });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, data: { msg: `delete client ${req.params.id}` } });
});

module.exports = router;
