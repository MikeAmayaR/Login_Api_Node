import { Router } from "express";
import SessionController from '../controller/SessionController';


const LoginRoutes = Router();

LoginRoutes.post('/login', SessionController.createUser)
// LoginRoutes.get('/login/:id', SessionController.getDatatUser)
LoginRoutes.get('/login/:Mail', SessionController.getDatatUser)


export default LoginRoutes;