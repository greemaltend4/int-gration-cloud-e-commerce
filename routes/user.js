const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Création d'un nouvel utilisateur
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send('Utilisateur créé avec succès');
  } catch (error) {
    res.status(400).send('Erreur dans la création de l’utilisateur');
  }
});

module.exports = router;