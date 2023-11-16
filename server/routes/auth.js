const express = require("express");
const router = express.Router();

// Remove passport and User model imports

// Route if something goes wrong
router.get('/login-failure', (req, res) => {
  res.send('Something went wrong...');
});

// Destroy user session
router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.log(error);
      res.send('Error logging out');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
