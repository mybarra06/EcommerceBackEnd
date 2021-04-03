const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData =  await Tag.findAll({
      include: [Product]
    })
      res.json(tagData)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data 
  try {
    const tag =  await Tag.findByPk(req.params.id, {
      include: [Product]
    })
      res.json(tag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
 
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag =  await Tag.create(req.body);
      res.json(newTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag =  await Tag.update(body, { where: { id }});
      res.json(updateTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});


router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value

  try {
    const id = req.params.id
    const tagToDelete = await Tag.findByPk(id)
    tagToDelete.destroy()

      res.json(tagToDelete)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message);
  }
});

module.exports = router;