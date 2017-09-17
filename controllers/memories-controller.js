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

memoryController.getComment = (req, res) => {
  Memory.getAllComment(req.params.id)
  .then(comment => {
    res.json({
      data:comment,
    });
  }).catch(err =>{
    console.log(err);
    res.status(500).json({err: err});
  });
}

memoryController.addComment = (req, res) => {
  Memory.createNewComment({
    name:req.body.name,
    comment:req.body.comment,
    memory_id:req.body.id
  }).then(memories => {
      console.log(memories);
      res.json({
        message: 'ok',
        data: comment,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

memoryController.delete = (req,res) => {
  Memory.deleteMemory(req.params.id)
  .then(memory => {
    res.json({
      message:'ok',
    });
  }).catch(err =>{
    console.log(err);
    res.status(500).json({err: err});
  });
}

memoryController.update = (req, res) => {
  Memory.update(
    {
      title: req.body.title,
      description: req.body.description,
      id: req.body.id
    },
  )
    .then(memory => {
      res.json({
        message: 'ok',
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}




module.exports = memoryController;