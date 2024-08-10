import { Router, type Request, type Response } from 'express';
const router = Router();
import historyService  from '../../service/historyService';
import weatherService from '../../service/weatherService';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {
  history.getfeedback().then((data) => res.json(data));
});


// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
