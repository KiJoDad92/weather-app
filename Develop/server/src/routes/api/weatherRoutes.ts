import { Router, Request, Response } from 'express';
const router = Router();
import historyService from '../../service/historyService';
import weatherService from '../../service/weatherService';

router.post('/', async (req: Request, res: Response) => {
  const { city } = req.body;

  try {
    const weatherData = await weatherService.getWeatherData(city);

    await historyService.saveCity(city);
    res.json(weatherData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving weather data' });
  }
});

router.get('/history', async (req: Request, res: Response) => {
  const searchHistory = await historyService.getSearchHistory();
  res.json(searchHistory);
});

router.delete('/history/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {

    await historyService.deleteCity(id);

    res.json({ message: 'City deleted from search history' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting city from search history' });
  }
});

export default router;