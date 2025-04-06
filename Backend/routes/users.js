var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); 

    const newUser = new User({username, password: hashedPassword});
    await newUser.save();
    res.status(201).json({ message: "Usuario registrado con exito" });


  } catch (error) {
    res.status(500).json({ message: "Error en el registro","description":error.tostring() });
  }
}); 

router.post('/login', async (req, res) => {
  try {
    
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('habitToken',token,{
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days 
    })
    res.json({ message: "Login exitoso", token });

  } catch (error) {
    res.status(500).json({ message: "Error en el login", "description":error.tostring() });
  }

});

module.exports = router;
