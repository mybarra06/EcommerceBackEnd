const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({include: [Product]});
    res.json(categoryData)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {include: [Product]});
      res.json(category)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory =  await Category.create(req.body);
    res.json(newCategory)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCat = await Category.update(body, { where: { id }})
    res.json(updatedCat)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).json(err);
  }
});
  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {

  try {
    const id = req.params.id
    const catToDelete = await Category.findByPk(id)
    catToDelete.destroy()
    res.json(catToDelete)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).json(err);
  }
});

module.exports = router;