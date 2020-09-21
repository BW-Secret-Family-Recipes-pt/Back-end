const Ingredients = require('./ingredients-model');

function validateRecipeId(req, res, next) {
    const { id } = req.params;

    Ingredients.findIngredientById(id)
         .then(data => {
              if (data) {
                   req.data = data;
                   next();
              } else {
                   res.status(400).json({ message: 'Recipe ID not validated' })
              }
         })
         .catch(err => {
              res.status(500).json({ message: 'Server Error' })
         })
}

module.exports = validateRecipeId;