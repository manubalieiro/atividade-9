
import sinon from "sinon"
import { App } from "./app"
import { Bike } from "./bike"
import { User } from "./user"
import { Location } from "./location"
import { BikeNotFoundError } from "./bike-not-found-error"
import { UnavailableBikeError } from "./unavailable-bike-error"
import { UserNotFoundError } from "./user-not-found-error"

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('should correctly calculate the rent amount', async () => {
    const user = new User('Jose', 'jose@mail.com', '1234');
    const bike = new Bike('caloi mountainbike', 'mountain bike', 1234, 1234, 100.0, 'My bike', 5, []);
    
    await app.registerUser(user);
    app.registerBike(bike);

    const clock = sinon.useFakeTimers();
    app.rentBike(bike.id, user.email);

    const hour = 1000 * 60 * 60;
    clock.tick(2 * hour);

    const rentAmount = app.returnBike(bike.id, user.email);
    expect(rentAmount).toEqual(200
