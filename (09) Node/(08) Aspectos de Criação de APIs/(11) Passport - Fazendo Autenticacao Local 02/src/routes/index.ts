import express from 'express';
import { createContactController, deleteContactController, getContactsController } from '../controllers/contactController';
import { privateRequest } from '../middlewares/auth';

const router = express.Router();

router.post('/contato', privateRequest, createContactController);

router.get('/contatos', getContactsController);

router.delete('/contato', privateRequest, deleteContactController);

router.post('login', async (req, res) => {
   res.json({
      user: req.user,
      auto: req.authInfo
   })
})

export default router;