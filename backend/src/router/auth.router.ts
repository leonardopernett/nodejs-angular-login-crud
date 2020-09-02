import {Router} from 'express'
import {signin,signup,profile} from '../controller/Authcontroller'
import {verifyToken} from '../verify/verifyToken'

const router = Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/profile',verifyToken,profile)


export default router