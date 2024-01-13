const express = require('express');
const router = express.Router();

router.post('/foodData', async (req, res) => {
    try {
        const foodData = global.foodData;
        const foodCategory = global.foodCategory;

        const food_data = [foodData, foodCategory];
        
        // console.log(food_data); 

        res.json(food_data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
});

module.exports = router;