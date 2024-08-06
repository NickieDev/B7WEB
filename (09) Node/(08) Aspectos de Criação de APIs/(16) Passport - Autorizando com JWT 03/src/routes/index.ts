import express from 'express';
import { createContactController, deleteContactController, getContactsController } from '../controllers/contactController';
import { privateRequest } from '../middlewares/auth';
import { localStrategyAuth } from '../libs/passport-local';
import { bearerStrategyAuth } from '../libs/passport-bearer';
import { jwtStrategyAuth } from '../libs/passport-jwt';

const router = express.Router();

router.post('/contato', privateRequest, createContactController);

router.get('/contatos', getContactsController);

router.delete('/contato', privateRequest, deleteContactController);

router.post('/login', localStrategyAuth, async (req, res) => {
   res.json({
      user: req.user,
      auto: req.authInfo
   })
})

router.get('/private', bearerStrategyAuth, async(req, res) => {
   res.json({ msg: 'Acessou' })
})

router.get('/privatejwt', jwtStrategyAuth, async(req, res) => {
   res.json({ msg: 'Acessou JWT' })
})


export default router;