const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);


router.post('/', cardsController.createCard);

router.get('/:id', cardsController.getCardById);

router.put('/:id', cardsController.updateCard); 

router.delete('/:id', cardsController.deleteCard);

router.post('/:id/difficulty', cardsController.markCardDifficulty);

module.exports = router;
