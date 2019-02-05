# Docs

## Microservices

#### Endpoints:

#### :31380/loginsvc/login [3003:31380]

Description: *Login Microservice* Logs in to the app

Method: POST

```JavaScript
{
  email: String,
  password: String,
}
```

#### :31380/loginsvc/createUser [3003:31380]

Description: *Sign Microservice* Signsup in to the api

Method: POST

Example input:

```JavaScript
{
  lastName: String,
  firstName: String,
  location: String,
  email: String,
  password: String,
  age: String,
  tier: String
}
```

#### :31380/bookingsvc/book [3000:31380]

Description: *Booking Microservice* Book for a flight

Method: POST

Example input:

```JavaScript
{
  UserID: Integer,
  FlightID: Integer,
  OfferNamePricing: String,
  OfferTypePricing: String,
  CostPricing: String,
  OfferNameUpgrade: String,
  OfferTypeUpgrade: String,
  CostUpgrade: String,
}
```

#### :31380/listingsvc/listBookingByUser/:id [3000:31380]

Description: *Booking Microservice* Search all flights by its ID

Method: GET

#### :31380/bookingsvc/checkin/:bookid/:userid [3001:31380]

Description: *Checkin Microservice* Checkin to a flight

Method: GET


#### :31380/listingsvc/listFlights [3002:31380]

Description: *Listing Microservice* Search flights by queries

Method: POST

Example input:

```JavaScript
{
  Year: String,
  Month: String,
  DayofMonth: String,
  Origin: String,
  Dest: String
}
```

#### :31380/listingsvc/listFlightsByID/:id [3002:31380]

Description: *Listing Microservice* Get Booked flights by Id

Method: Get

#### :31380/emailsvc/postEmail [4000:31380]

Description: *Celery Microservice* Post Emails

Method: POST

Example input:

```JavaScript
{
  toemail: String,
  src: String,
  dest: String
```

#### :31380/odmsvc/odm [4000:31380]

Description: *ODM Microservice* Queries ODM

Method: POST

Example input:

```JavaScript
{
  srcAirport: String,
  dstAirport: String,
  customerTier: String,
  customerName: String,
  milesBalance: String
}
```