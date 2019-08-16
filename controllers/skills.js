var Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req,res) {
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills`);
}

function edit(req,res) {
  var skill = Skill.getOne(req.params.id);
  res.render('skills/edit' , {
    skill,
    skillIdx: req.params.id
  });
}

function deleteSkill(req,res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      skillNum: parseInt(req.params.id) + 1
    });
  }