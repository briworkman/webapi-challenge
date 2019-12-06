const router = require("express").Router();

const Projects = require("./data/helpers/projectModel");

const express = require("express");

router.use(express.json());

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error retrieving the projects!" });
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  Projects.getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "There was an error retrieving the project actions!"
      });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  Projects.insert(newProject)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error adding the new project!" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateProject = req.body;

  Projects.update(id, updateProject)
    .then(updateProject => {
      res.status(200).json(updateProject);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error updating the project!" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then(deleteProject => {
      res.status(200).json({
        message: "The project was deleted successfully!",
        id
      });
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "There was an error deleting the project!" });
    });
});

module.exports = router;
