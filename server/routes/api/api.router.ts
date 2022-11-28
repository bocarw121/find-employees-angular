import { Router } from 'express';

import employeesRouter from './employees/employees.router';

const apiRouter = Router();

apiRouter.use('/employees', employeesRouter);

export default apiRouter;
