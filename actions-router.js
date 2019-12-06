const router = require("express").Router();

const Actions = require("./data/helpers/actionModel");

router.get("/", (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error retieving the actions!" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Actions.get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error retrieving the action!" });
    });
});

router.post("/", (req, res) => {
  const postAction = req.body;

  Actions.insert(postAction)
    .then(postAction => {
      res.status(201).json(postAction);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error adding the action!" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateAction = req.body;

  Actions.update(id, updateAction)
    .then(updateAction => {
      res.status(201).json(updateAction);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error updating the action!" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Actions.remove(id)
    .then(deleteAction => {
      res.status(201).json(deleteAction);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error deleting the action!" });
    });
});

module.exports = router;
