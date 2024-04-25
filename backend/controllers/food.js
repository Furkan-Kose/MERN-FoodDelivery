const FoodModel = require('../models/food');
const mongoose = require('mongoose');

const getAllFoods = async (req, res) => {
    try {
      let query = {};
  
      if (req.query.category) {
        query.category = req.query.category;
      }
  
      if (req.query.query) {
        query.name = { $regex: req.query.query, $options: 'i' };
      }
  
      const foods = await FoodModel.find(query);
  
      res.status(200).json(foods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

  const getFoodById = async (req, res) => {
    try {
        const foodId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(foodId)) {
            return res.status(400).json({ message: 'Geçersiz yemek kimliği' });
        }

        const food = await FoodModel.findById(foodId);

        if (!food) {
            return res.status(404).json({ message: 'Yemek bulunamadı' });
        }

        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createFood = async (req, res) => {
  try {
    const { name, image, description, price, category } = req.body;

    const newFood = new FoodModel({ name, image, description, price, category });

    await newFood.save();

    res.status(201).json({ message: 'Yemek başarıyla oluşturuldu', food: newFood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(foodId)) {
      return res.status(400).json({ message: 'Geçersiz yemek kimliği' });
    }

    const existingFood = await FoodModel.findById(foodId);

    if (!existingFood) {
      return res.status(404).json({ message: 'Yemek bulunamadı' });
    }

    const { name, image, description, price, category } = req.body;

    existingFood.name = name;
    existingFood.image = image;
    existingFood.description = description;
    existingFood.price = price;
    existingFood.category = category;

    await existingFood.save();

    res.status(200).json({ message: 'Yemek başarıyla güncellendi', food: existingFood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(foodId)) {
      return res.status(400).json({ message: 'Geçersiz yemek kimliği' });
    }

    const deletedFood = await FoodModel.findByIdAndRemove(foodId);

    res.status(200).json({ message: 'Yemek başarıyla silindi', food: deletedFood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
}
