# Docs

## Microservices

### Frontend [80:30080]

Loads the UI and takes care of user sessions. Communicates with all other microservices.

#### Endpoints:

#### :30093/login [3003:30093]

Description: *Login Microservice* Logs in to the app

Method: GET

#### :30094/signup [3004:30094]

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

#### :30090/book [3000:30090]

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

#### :30090/listBookingByUser/:id [3000:30090]

Description: *Booking Microservice* Search all flights by its ID

Method: GET

#### :30091/checkin/:bookid/:userid [3001:30091]

Description: *Checkin Microservice* Checkin to a flight

Method: GET


#### :30092/listFlights [3002:30092]

Description: *Listing Microservice* Search flights by queries

Method: POST

Example input:

```JavaScript
{
  Year: Integer,
  Month: Integer,
  DayofMonth: String,
  Origin: String,
  Dest: String
}
```

#### :30092/listFlightsByID/:id [3002:30092]

Description: *Listing Microservice* Get Booked flights by Id

Method: Get

#### :30989/postEmail [4000:30989]

Description: *Celery Microservice* Post Emails

Method: POST

Example input:

```JavaScript
{
  toemail: Integer,
  src: Integer,
  dest: String
```

#### :30989/setBlockchain [3008:30089]

Description: *Ethereum Microservice* Post data on blockchain

Method: POST

Example input:

```JavaScript
{
  data: String
```

#### :30989/getBlockchain [3008:30089]

Description: *Ethereum Microservice* Get data on blockchain

Method: GET

#### :30989/odm [3005:30095]

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

