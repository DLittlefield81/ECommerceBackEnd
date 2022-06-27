const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get All Tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:
    {
      model: Product,
      through: ProductTag
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Get One Tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:
    {
      id: req.params.id
    },
    include:
    {
      model: Product,
      through: ProductTag
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Create Tags
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update Tags
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where:
    {
      id: req.params.id
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete Tags
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:
    {
      id: req.params.id
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;