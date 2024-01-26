import { IUser } from "../models/model";

export class UserService {
  private static users: IUser[] = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Giray",
        last: "Mayhoş",
      },
      location: {
        street: {
          number: 2642,
          name: "Tunalı Hilmi Cd",
        },
        city: "Bolu",
        state: "Mardin",
        country: "Turkey",
        postcode: 98545,
        coordinates: {
          latitude: "71.5436",
          longitude: "-130.8479",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "giray.mayhos@example.com",
      login: {
        uuid: "7904a29f-edb8-4170-bad4-2e07cfb5a3f4",
        username: "ticklishelephant262",
        password: "over",
        salt: "72RFhBco",
        md5: "e697a069fc35f2a2fea03bfcd8b36b2f",
        sha1: "b82ba2f26ff161d5962cdf233149ae00911d808c",
        sha256:
          "241f26922eaf890467a6d864fe3d684d0edf677a130c9ded332dcf47d8d78374",
      },
      dob: {
        date: "1996-03-08T01:44:23.518Z",
        age: 27,
      },
      registered: {
        date: "2002-07-13T15:39:37.972Z",
        age: 21,
      },
      phone: "(796)-362-9306",
      cell: "(134)-732-9354",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Olga",
        last: "Serrano",
      },
      location: {
        street: {
          number: 3677,
          name: "Paseo de Zorrilla",
        },
        city: "Pontevedra",
        state: "Cataluña",
        country: "Spain",
        postcode: 16014,
        coordinates: {
          latitude: "-81.2050",
          longitude: "40.8523",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "olga.serrano@example.com",
      login: {
        uuid: "256c43f5-874e-4ceb-95fb-6174561ce090",
        username: "angrymeercat564",
        password: "masamune",
        salt: "EqvyfV4d",
        md5: "fb447eda7d87012b8c24bba1c4d4e25b",
        sha1: "a103983ccd53152399ab96275fb18ae861f2c8de",
        sha256:
          "5d7515f2e2e550c815b2c514f4c4aa2a72ea886f30c19e6454dfca5f25519be6",
      },
      dob: {
        date: "1961-08-07T18:04:37.584Z",
        age: 62,
      },
      registered: {
        date: "2008-11-06T03:51:20.841Z",
        age: 15,
      },
      phone: "934-454-520",
      cell: "622-026-214",
      id: {
        name: "DNI",
        value: "50987763-W",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Maja",
        last: "Šarović",
      },
      location: {
        street: {
          number: 3487,
          name: "Videnjs",
        },
        city: "Lebane",
        state: "West Bačka",
        country: "Serbia",
        postcode: 97274,
        coordinates: {
          latitude: "14.7044",
          longitude: "5.8726",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "maja.sarovic@example.com",
      login: {
        uuid: "45367687-9303-4314-a337-81edbbb5dd97",
        username: "crazygoose343",
        password: "show",
        salt: "E2nN9mQh",
        md5: "4e615d8fc1bf9baceba2bbf87d870d13",
        sha1: "43d1b359fee747c41e83cd8f0fa53862488f5e85",
        sha256:
          "ba112614a31327f92e5981cb7c7ff6fd4dd97fb0d0644de8325f09f4ccdba45c",
      },
      dob: {
        date: "1950-12-23T02:44:08.990Z",
        age: 73,
      },
      registered: {
        date: "2020-07-16T01:33:36.700Z",
        age: 3,
      },
      phone: "028-9153-637",
      cell: "069-7174-339",
      id: {
        name: "SID",
        value: "560594418",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/35.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
      },
      nat: "RS",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Daisy",
        last: "Tucker",
      },
      location: {
        street: {
          number: 6172,
          name: "Samaritan Dr",
        },
        city: "San Mateo",
        state: "Connecticut",
        country: "United States",
        postcode: 20519,
        coordinates: {
          latitude: "29.3375",
          longitude: "177.4078",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "daisy.tucker@example.com",
      login: {
        uuid: "55e6ff7d-3af3-4a1c-8541-e57df285a5bf",
        username: "blackfrog126",
        password: "because",
        salt: "EN0xZpvC",
        md5: "386f65e5bb79372b773fd03d1df7a276",
        sha1: "23d65914d37161ca5586bc5a0d039ba0171ab704",
        sha256:
          "283130f710e7bc35e8a019f5b4605560e51fb551a11c1494a8e5cb1b18df57a4",
      },
      dob: {
        date: "1973-07-06T02:34:52.724Z",
        age: 50,
      },
      registered: {
        date: "2005-07-31T07:07:51.309Z",
        age: 18,
      },
      phone: "(975) 562-0667",
      cell: "(509) 946-0118",
      id: {
        name: "SSN",
        value: "675-55-3158",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Tracy",
        last: "Cole",
      },
      location: {
        street: {
          number: 5892,
          name: "Lakeview St",
        },
        city: "Columbia",
        state: "Pennsylvania",
        country: "United States",
        postcode: 40522,
        coordinates: {
          latitude: "49.2971",
          longitude: "-143.8923",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "tracy.cole@example.com",
      login: {
        uuid: "b745f9b0-8f77-42cf-83e1-99bc217af6d4",
        username: "greenrabbit533",
        password: "hughes",
        salt: "swc51tZX",
        md5: "50cc2f1fcd8fef55dda85726a0f33c7b",
        sha1: "80b27b3fcc53d6bb09913f20846395ba948117bb",
        sha256:
          "8edb89f4393d1b48a42dcebc38ca29fcce1e76f4aeb2ebdd43cfe9387436ed3a",
      },
      dob: {
        date: "1946-09-15T00:58:14.312Z",
        age: 77,
      },
      registered: {
        date: "2020-10-05T01:11:51.651Z",
        age: 3,
      },
      phone: "(663) 659-3566",
      cell: "(507) 490-9719",
      id: {
        name: "SSN",
        value: "613-48-5934",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Aurora",
        last: "Vargas",
      },
      location: {
        street: {
          number: 6477,
          name: "Calle Covadonga",
        },
        city: "Toledo",
        state: "Comunidad Valenciana",
        country: "Spain",
        postcode: 97878,
        coordinates: {
          latitude: "-27.6091",
          longitude: "-13.6451",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "aurora.vargas@example.com",
      login: {
        uuid: "2250825f-c86a-440a-bb61-ef7a032d9b88",
        username: "whitelion110",
        password: "rugger",
        salt: "yFmeBFOe",
        md5: "a6d884c8d6f60ec20c5f41ed7d672af0",
        sha1: "e16670c7e0fa7613f418718aa4bbf896343defa2",
        sha256:
          "7b3c017ec41fa28e20c75cb315c05f226e7352bdad52a2e1e16ad419f8bfa27b",
      },
      dob: {
        date: "1999-12-31T18:38:59.200Z",
        age: 24,
      },
      registered: {
        date: "2002-09-18T12:05:52.158Z",
        age: 21,
      },
      phone: "901-071-158",
      cell: "658-532-340",
      id: {
        name: "DNI",
        value: "84241001-R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/48.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Izete",
        last: "Lopes",
      },
      location: {
        street: {
          number: 1638,
          name: "Rua São José ",
        },
        city: "Balneário Camboriú",
        state: "Paraná",
        country: "Brazil",
        postcode: 64498,
        coordinates: {
          latitude: "1.9408",
          longitude: "-55.5183",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "izete.lopes@example.com",
      login: {
        uuid: "28efef20-a963-4c54-90ed-4dc75c70ec9a",
        username: "angrygorilla802",
        password: "kasper",
        salt: "SjUUJ5Re",
        md5: "265d0a556197bf4127d696e8ef5b1328",
        sha1: "bcee88ced46b80ba476534e82ab8a04b9c1a35aa",
        sha256:
          "0bcaa1f405babcf5a03d3051248554543c14eb9dcc725c2e3ef272d0c48f10ab",
      },
      dob: {
        date: "1994-10-08T14:25:43.342Z",
        age: 29,
      },
      registered: {
        date: "2013-01-06T03:46:06.659Z",
        age: 10,
      },
      phone: "(87) 7712-7752",
      cell: "(70) 6594-2269",
      id: {
        name: "CPF",
        value: "101.168.429-73",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
      },
      nat: "BR",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Marta",
        last: "Jeremić",
      },
      location: {
        street: {
          number: 4264,
          name: "Mučanjska",
        },
        city: "Boljevac",
        state: "Peć",
        country: "Serbia",
        postcode: 95831,
        coordinates: {
          latitude: "-22.9253",
          longitude: "34.6797",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "marta.jeremic@example.com",
      login: {
        uuid: "9f58aa60-c5f0-4fb2-ab15-6e8f575b1fa6",
        username: "whitewolf561",
        password: "texas",
        salt: "HKSfHFSZ",
        md5: "44beae175b719bb31aa1bba5ec155db5",
        sha1: "1377e626e2b7f4384fb7d6876a32d9da9743b166",
        sha256:
          "2b7ad03615940753d48f89ce1b98668243ad5575c52a4b7c8231e3c3c632b5f7",
      },
      dob: {
        date: "1995-08-07T08:03:36.515Z",
        age: 28,
      },
      registered: {
        date: "2009-07-21T12:16:07.882Z",
        age: 14,
      },
      phone: "017-7203-175",
      cell: "062-6557-774",
      id: {
        name: "SID",
        value: "727880305",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
      },
      nat: "RS",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Gabrielle",
        last: "Li",
      },
      location: {
        street: {
          number: 596,
          name: "Wellington St",
        },
        city: "Delta",
        state: "Nova Scotia",
        country: "Canada",
        postcode: "V8U 6D7",
        coordinates: {
          latitude: "26.5888",
          longitude: "-97.3203",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "gabrielle.li@example.com",
      login: {
        uuid: "d9f68317-8a1c-4e80-b080-11b328d8d953",
        username: "brownelephant620",
        password: "zoom",
        salt: "u1Xg6Eob",
        md5: "5767d0ab5303fdc098cbfe35e584cdaa",
        sha1: "d70d4bebe880475462a8e6f2799077af8a660bf9",
        sha256:
          "5777fee3cd68a8bc57d28c7fc8eae182b766f20caa8889d4ea769284d65fef25",
      },
      dob: {
        date: "1977-05-31T13:52:06.072Z",
        age: 46,
      },
      registered: {
        date: "2015-05-21T18:12:22.857Z",
        age: 8,
      },
      phone: "J20 Y99-8416",
      cell: "G50 F31-8770",
      id: {
        name: "SIN",
        value: "023605017",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      },
      nat: "CA",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Felipe",
        last: "Ortiz",
      },
      location: {
        street: {
          number: 9513,
          name: "Calle de La Luna",
        },
        city: "Guadalajara",
        state: "Ceuta",
        country: "Spain",
        postcode: 51574,
        coordinates: {
          latitude: "-27.5649",
          longitude: "-24.1491",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "felipe.ortiz@example.com",
      login: {
        uuid: "1d647100-3b1d-478e-92c1-79b2cc9eb180",
        username: "brownbear492",
        password: "renault",
        salt: "qZXmoJaF",
        md5: "a37a8c4c1d6d2a7da05ca89a126669b2",
        sha1: "765c21649b70a6abd37ec045228337365b7917d2",
        sha256:
          "63e3d18339cef5663eb4aa0025af90e729b137d299d4c09095fc87bd182b3f14",
      },
      dob: {
        date: "1986-01-09T03:37:57.992Z",
        age: 37,
      },
      registered: {
        date: "2002-05-23T00:42:46.111Z",
        age: 21,
      },
      phone: "922-280-339",
      cell: "674-580-633",
      id: {
        name: "DNI",
        value: "21602038-Y",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Amir",
        last: "Kamer",
      },
      location: {
        street: {
          number: 5317,
          name: "Jan Ter Gouwweg",
        },
        city: "Rozenburg Nh",
        state: "Gelderland",
        country: "Netherlands",
        postcode: "6439 II",
        coordinates: {
          latitude: "-18.7132",
          longitude: "100.8338",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "amir.kamer@example.com",
      login: {
        uuid: "e87ebbb2-4bb8-43b0-98f6-33af1022bd64",
        username: "bigswan702",
        password: "chichi",
        salt: "VmL2euCl",
        md5: "b5d44aee40ec9df04bf1e0d7d14cce8c",
        sha1: "193a80b81009cc8e6f8154ce8194c4fb87dae1bf",
        sha256:
          "9de552391ed36c8ee987c2a7ee2964754a41103035aa08c9486c5e5d851aa3fb",
      },
      dob: {
        date: "1998-05-06T03:37:55.061Z",
        age: 25,
      },
      registered: {
        date: "2004-09-18T15:48:50.630Z",
        age: 19,
      },
      phone: "(080) 1493239",
      cell: "(06) 42716593",
      id: {
        name: "BSN",
        value: "72179615",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      },
      nat: "NL",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Lonnie",
        last: "Wheeler",
      },
      location: {
        street: {
          number: 5817,
          name: "Brown Terrace",
        },
        city: "San Antonio",
        state: "New York",
        country: "United States",
        postcode: 23371,
        coordinates: {
          latitude: "89.8515",
          longitude: "100.6143",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "lonnie.wheeler@example.com",
      login: {
        uuid: "6d884316-927f-489b-988b-deee8e524bc4",
        username: "browngorilla368",
        password: "altima",
        salt: "88SpV2OQ",
        md5: "66909dd5e3f84e116fa159d31b74b792",
        sha1: "388019c3aabe3e69fe71bf0418bdc0366074d097",
        sha256:
          "e7bd5a6489b48519e60be6e463f6d3e6af599bf9ec47ff207658803d829897eb",
      },
      dob: {
        date: "1978-04-10T16:06:30.433Z",
        age: 45,
      },
      registered: {
        date: "2009-08-25T16:13:31.911Z",
        age: 14,
      },
      phone: "(385) 569-0526",
      cell: "(711) 868-1055",
      id: {
        name: "SSN",
        value: "376-06-1993",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/97.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
      },
      nat: "US",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Petro",
        last: "Baranovskiy",
      },
      location: {
        street: {
          number: 4314,
          name: "Granichna",
        },
        city: "Bashtanka",
        state: "Cherkaska",
        country: "Ukraine",
        postcode: 82619,
        coordinates: {
          latitude: "-87.4710",
          longitude: "-63.3589",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "petro.baranovskiy@example.com",
      login: {
        uuid: "3c83a98b-cc7b-43cd-9160-81e78850f476",
        username: "smallmouse431",
        password: "python",
        salt: "2mx6EoLC",
        md5: "2f3895d0ea8c171f26ca9f2cdd45e965",
        sha1: "6ce78cf927f89ed6712968711e5b405b07b64167",
        sha256:
          "d8c7369e0adca88abdc62049ecec5f9bc550de7eb0626298b800d83799d1e2f4",
      },
      dob: {
        date: "1980-11-03T16:17:38.073Z",
        age: 43,
      },
      registered: {
        date: "2006-03-21T09:14:33.728Z",
        age: 17,
      },
      phone: "(097) T53-4882",
      cell: "(096) J11-3509",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/63.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Alice",
        last: "Johnson",
      },
      location: {
        street: {
          number: 267,
          name: "Hugh Watt Drive",
        },
        city: "Taupo",
        state: "Manawatu-Wanganui",
        country: "New Zealand",
        postcode: 72554,
        coordinates: {
          latitude: "-31.3067",
          longitude: "122.8973",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "alice.johnson@example.com",
      login: {
        uuid: "c1e730f4-499a-4053-9fee-c72a481352cc",
        username: "tinymouse805",
        password: "snoop",
        salt: "PKz02Wyr",
        md5: "a666d3857c5e7eda9ad545a92dfd67a4",
        sha1: "8464562a1e22450ad4eff39ca70345bdc33a60f5",
        sha256:
          "853e42a011799dea6fa272d26287b977a700b097d99ee5f1c6771a8c536bd3d9",
      },
      dob: {
        date: "1984-05-28T23:23:13.060Z",
        age: 39,
      },
      registered: {
        date: "2015-01-14T20:28:44.317Z",
        age: 8,
      },
      phone: "(267)-235-3275",
      cell: "(734)-754-9475",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Andrea",
        last: "Harper",
      },
      location: {
        street: {
          number: 9118,
          name: "Grafton Street",
        },
        city: "Kinsealy-Drinan",
        state: "Wicklow",
        country: "Ireland",
        postcode: 82350,
        coordinates: {
          latitude: "50.5020",
          longitude: "-162.4441",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "andrea.harper@example.com",
      login: {
        uuid: "f4ffa024-f42c-4775-a495-e6359cb4b3d3",
        username: "silverbear151",
        password: "hores",
        salt: "pz6KMu7T",
        md5: "818d1ede87e6e85830ba46d4a10121b6",
        sha1: "ef875df3fc8b809cf0bcc52ac17b0bf38d138808",
        sha256:
          "5086a27b6fe35730a0f92b07ef29db0098bad87ece7626d7cb7f4c9dcdf8138d",
      },
      dob: {
        date: "1949-08-23T06:43:15.995Z",
        age: 74,
      },
      registered: {
        date: "2018-02-15T01:44:26.651Z",
        age: 5,
      },
      phone: "041-792-1312",
      cell: "081-153-2372",
      id: {
        name: "PPS",
        value: "6910476T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/54.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
      },
      nat: "IE",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Yuhimina",
        last: "Pezhanskiy",
      },
      location: {
        street: {
          number: 7670,
          name: "Provulok Suleymana Stalskogo",
        },
        city: "Kerch",
        state: "Kirovogradska",
        country: "Ukraine",
        postcode: 90351,
        coordinates: {
          latitude: "-42.7694",
          longitude: "157.6296",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "yuhimina.pezhanskiy@example.com",
      login: {
        uuid: "bc34d8b9-0096-4035-a181-2bddca1c425a",
        username: "heavytiger738",
        password: "chopin",
        salt: "1toM0xCP",
        md5: "a6b50dd41c7a8ce9b1abd6c064fb57eb",
        sha1: "b6f458f9c2991081e6bc246d260437aa9c15a036",
        sha256:
          "4d99d057d5d0f818e93ae5fa98e921968bcd8cc69d56aeed8eee834d7340651b",
      },
      dob: {
        date: "1957-02-22T03:08:17.879Z",
        age: 66,
      },
      registered: {
        date: "2012-02-15T07:27:30.820Z",
        age: 11,
      },
      phone: "(098) P04-4333",
      cell: "(067) Z52-0050",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Juni",
        last: "Ohnstad",
      },
      location: {
        street: {
          number: 7409,
          name: "Gustav Vigelands vei",
        },
        city: "Kirkenær",
        state: "Telemark",
        country: "Norway",
        postcode: "6650",
        coordinates: {
          latitude: "56.8852",
          longitude: "162.4664",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "juni.ohnstad@example.com",
      login: {
        uuid: "85774dc3-3908-4b40-ab02-443d055ec68d",
        username: "silverswan352",
        password: "philips",
        salt: "yyLQmfIx",
        md5: "14300bddbeed2b0b3dccacb842ae47dc",
        sha1: "8a2f7472d2d522f38718a01920270aaa0bea1c30",
        sha256:
          "8731241e22040a561da3415715d9350daa8530a0d8cf44aa6c6dd0ff2e9fe565",
      },
      dob: {
        date: "1965-12-20T22:30:55.748Z",
        age: 58,
      },
      registered: {
        date: "2010-10-13T04:28:54.241Z",
        age: 13,
      },
      phone: "85541790",
      cell: "93969137",
      id: {
        name: "FN",
        value: "20126531835",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Heinz",
        last: "Nicolas",
      },
      location: {
        street: {
          number: 2564,
          name: "Rue du Dauphiné",
        },
        city: "Sattel",
        state: "Jura",
        country: "Switzerland",
        postcode: 9706,
        coordinates: {
          latitude: "-89.1039",
          longitude: "47.3996",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "heinz.nicolas@example.com",
      login: {
        uuid: "54329041-6dfb-4505-98db-43c39d157231",
        username: "tinymouse548",
        password: "boater",
        salt: "H3tmfPCJ",
        md5: "cfb5fe52ad4608ff71685b9a545876c6",
        sha1: "5a11ffe69c1de5cd08f4f365d236a941a8794403",
        sha256:
          "0279135cb8e102335f5391b82d49874eac3e33c9c9d3ff140e5134ca282282e8",
      },
      dob: {
        date: "1948-11-06T21:03:32.726Z",
        age: 75,
      },
      registered: {
        date: "2013-04-21T01:22:05.351Z",
        age: 10,
      },
      phone: "079 849 45 88",
      cell: "079 899 41 84",
      id: {
        name: "AVS",
        value: "756.3685.8078.75",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Hanaé",
        last: "Martinez",
      },
      location: {
        street: {
          number: 1061,
          name: "Rue Gasparin",
        },
        city: "Roubaix",
        state: "Drôme",
        country: "France",
        postcode: 44622,
        coordinates: {
          latitude: "64.7804",
          longitude: "60.9185",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "hanae.martinez@example.com",
      login: {
        uuid: "f12e027f-635e-4db4-84b7-2a673c1a8e5c",
        username: "redrabbit672",
        password: "bluedog",
        salt: "mHoWbKPm",
        md5: "2cc078173482b7890e5aa09b9d3035ed",
        sha1: "819292dc3d28343b80f75369abff138048432810",
        sha256:
          "d4912921ecabd6216f8c1d2f7820e261a8ca973f5b88047585b23d9d173e42f3",
      },
      dob: {
        date: "1949-03-27T01:08:57.267Z",
        age: 74,
      },
      registered: {
        date: "2014-11-02T18:48:24.513Z",
        age: 9,
      },
      phone: "02-88-65-70-03",
      cell: "06-23-65-78-22",
      id: {
        name: "INSEE",
        value: "2490222761464 27",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
      },
      nat: "FR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Bernard",
        last: "Rump",
      },
      location: {
        street: {
          number: 4026,
          name: "Beethovenstraße",
        },
        city: "Halle (Saale)",
        state: "Hamburg",
        country: "Germany",
        postcode: 39689,
        coordinates: {
          latitude: "-45.8195",
          longitude: "-133.7151",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "bernard.rump@example.com",
      login: {
        uuid: "bea28a75-e55f-40af-a90c-92ffb3cdab13",
        username: "beautifulgorilla714",
        password: "mariner",
        salt: "xHfRKDdR",
        md5: "1f52e73ad4594ad38d8f978b75016357",
        sha1: "6febe15af816711dc3f176c2773a6ed6ea7f7b31",
        sha256:
          "73dd95ebe1b2ac37894a0d17add4bbd99a408d591dbe0ecd6690a885461bf0ad",
      },
      dob: {
        date: "1955-10-15T09:11:05.677Z",
        age: 68,
      },
      registered: {
        date: "2009-10-23T11:04:17.110Z",
        age: 14,
      },
      phone: "0635-0276416",
      cell: "0173-6531652",
      id: {
        name: "SVNR",
        value: "66 151055 R 493",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/76.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
      },
      nat: "DE",
    },
  ];

  public static getAllUsers():IUser[]{
    return this.users;
  }
}
