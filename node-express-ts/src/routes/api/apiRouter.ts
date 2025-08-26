import { hello } from "../../controllers/hello";
import express from "express";
//routes
const apiRouter = express.Router();

//======================//
//===== API Routes =====//
//======================//

//tester
apiRouter.use('/hello', hello)


export default apiRouter;
