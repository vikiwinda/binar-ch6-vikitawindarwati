const express = require('express');
const router = express.Router();

const userGameController = require('./controllers/user_game');
// const userGameBio = require('./controllers').user_game_biodata;
// const userGameHistory = require('./controllers').user_game_history;


// Router Frontend
router.get('/login', (req, res)=>{
    res.status(200).render('login')
});

router.post('/login', (req, res)=>{
    if (req.body.username === "admin" && req.body.password === "123456") {
        res.redirect('/dashboard');
    } else {
        res.status(401).send({'message': 'unauthorized'})
    }
})

router.get('/dashboard', userGameController.list);
router.get('/dashboard/:id', userGameController.getById);

router.get('/dashboards/form', (req, res)=>{
    res.status(200).render('dashboardForm')
})
router.post('/dashboards/form', userGameController.add);

router.get('/dashboards/update/:id', (req, res)=>{
    res.render('dashboardUpdate', {id : req.params.id})
})
router.put('/dashboards/:id', userGameController.update);
router.delete('/dashboards/delete/:id', userGameController.delete);

// UserGame Router API
router.get('/users', userGameController.list);
router.get('/users/:id', userGameController.getById)
router.post('/users', userGameController.add);
router.put('/users/:id', userGameController.update);
router.delete('/users/:id', userGameController.delete);

module.exports = router;