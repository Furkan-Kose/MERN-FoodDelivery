const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
        }
        const token = jwt.sign({ userId: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Geçersiz kullanıcı kimliği' });
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        const newUser = new UserModel({ username, email, password });
    
        await newUser.save();
    
        res.status(201).json({ message: 'Yeni kullanıcı başarıyla oluşturuldu', user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Geçersiz kullanıcı kimliği' });
        }
    
        const { username, email, password } = req.body;
    
        const user = await UserModel.findById(userId);
    
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
    
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
    
        await user.save();
  
        res.status(200).json({ message: 'Kullanıcı bilgileri başarıyla güncellendi', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
    
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Geçersiz kullanıcı kimliği' });
        }
    
        const user = await UserModel.findById(userId);
    
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
  
        const deletedUser = await UserModel.findByIdAndRemove(userId);
    
        res.status(200).json({ message: 'Kullanıcı başarıyla silindi', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

