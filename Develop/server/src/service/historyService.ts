class City {
  name: string;
  id: string;
  constructor(name: string, id: string) {
    this.name = name;
  this.id = id;
  }
};

import fs from 'fs';

class HistoryService {
  private filePath: string = 'searchHistory.json';

  private async read(): Promise<City[]> {
    try{
      const data = await fs.promises.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  };
  
  private async write(cities: City[]): Promise <void> {
  await fs.promises.writeFile(this.filePath, JSON.stringify(cities, null, 2));
};

async addCity(city: string): Promise<void> {
const cities = await this.read();
const newCity = new City(city, Math.random().toString(36).substr(2, 9)); 
cities.push(newCity);
await this.write(cities);
};

 // BONUS: Implementing removeCity method
 async removeCity(id: string): Promise<void> {
  const cities = await this.read();
  const updatedCities = cities.filter(city => city.id !== id);
  await this.write(updatedCities);
}
};

export default new HistoryService();
