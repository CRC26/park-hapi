export const seedData = {
    users: {
      _model: "User",
      mickey: {
        firstName: "Mickey",
        lastName: "Mouse",
        email: "mickey@mouse.com",
        password: "secret",
      },
      minnie: {
        firstName: "Minnie",
        lastName: "Mouse",
        email: "minnie@mouse.com",
        password: "secret",
      },
      donald: {
        firstName: "Donald",
        lastName: "Duck",
        email: "donald@duck.com",
        password: "secret",
      },
    },
    counties: {
      _model: "County",
      fingal: {
        countyFirst: "fingal",
        countySecond: "council"
      },
      dcc: {
        countyFirst: "dublin",
        countySecond: "city",
      },
      sdcc: {
        countyFirst: "south",
        countySecond: "dublin"
      },
    } ,
    parks: {
      _model: "Park",
      one: {
        parkName: "Poppintree",
        rating: "3",
        lat: "53.3972",
        lng: "6.2792",
        user: "->users.donald",
        county: "->counties.dcc",
      },
      two: {
        parktName: "Herbert",
        rating: "5",
        lat: "53.3264",
        lng: "6.2350",
        user: "->users.minnie",
        county: "->counties.sdcc",
      },
      three: {
        parktName: "Santry",
        rating: "4",
        lat: "53.4015",
        lng: "6.2513",
        user: "->users.mickey",
        county: "->counties.fingal",
      },
    },
};
