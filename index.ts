
import { App } from "./app";
import { Bike } from "./bike";
import { User } from "./user";
import { Location } from "./location";
import crypto from 'crypto'

async function main() {
  const clock = sinon.useFakeTimers();
  const app = new App();
  const user1 = new User('Jose', 'jose@mail.com', '1234');
  const newYork = new Location(40.753056, -73.983056);
  await app.registerUser(user1);

  const bike = new Bike('caloi mountainbike', 'mountain bike', 1234, 1234, 100.0, 'My bike', 5, []);
  app.registerBike(bike);
  
  console.log('Bike disponível:', bike.available);
  app.rentBike(bike.id, user1.email);
  console.log('Bike disponível:', bike.available);

  clock.tick(1000 * 60 * 65);

  const rentAmount = app.returnBike(bike.id, user1.email);
  console.log('Rent Amount:', rentAmount);

  app.moveBikeTo(bike.id, newYork);
  console.log('Bike Location:', bike.location);
}

main();
