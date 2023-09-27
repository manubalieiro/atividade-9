
import { Bike } from "./bike";
import { Crypt } from "./crypt";
import { Rent } from "./rent";
import { User } from "./user";
import { Location } from "./location";
import crypto from 'crypto'
import { BikeNotFoundError } from "./bike-not-found-error";
import { UnavailableBikeError } from "./unavailable-bike-error";
import { UserNotFoundError } from "./user-not-found-error";

export class App {
  users: User[] = []
  bikes: Bike[] = []
  rents: Rent[] = []
  crypt: Crypt = new Crypt()

  // Métodos existentes aqui...

  // Novo método para mover uma bicicleta para uma localização específica
  moveBikeTo(bikeId: string, location: Location): void {
    const bike = this.findBike(bikeId);
    bike.location.latitude = location.latitude;
    bike.location.longitude = location.longitude;
  }

  // Novo método para encontrar uma bicicleta por seu ID
  findBike(bikeId: string): Bike {
    const bike = this.bikes.find(bike => bike.id === bikeId);
    if (!bike) throw new BikeNotFoundError();
    return bike;
  }
}
