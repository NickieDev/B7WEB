import express from 'express';
import helmet from 'helmet';
import router from './routes';
import path from 'path';
import passport from 'passport';
import { localStrategy } from './libs/passport-local';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')))

passport.use(localStrategy)
server.use(passport.initialize());

server.use('/', router);

server.listen(3001, () => {
    console.log('Servidor rodando: http://localhost:3001/');
});