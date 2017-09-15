const Memory = require('../models/memory');

const memoryController = {};

memoryController.create = (req, res) => {
console.log(req.body.title + req.body.description);
Memory.create({
    title:req.body.title,
    description:req.body.description
  })
    .then(memories => {
      console.log(memories);
      res.json({
        message: 'ok',
        data: memories,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

memoryController.index  = (req, res) => {
  Memory.findAll()
    .then(memories => {
      res.json({ 
        message: 'ok',
        data: memories
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}

memoryController.show = (req, res) => {
    Memory.findById(req.params.id)
     .then( memory => {
        res.json({
        data: memory,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}



module.exports = memoryController;