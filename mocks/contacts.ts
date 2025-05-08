const mockData=  [
  {
    "phoneNumber": "579-620-1008 x091",
    "firstName": "Daron",
    "lastName": "Beier",
    "id": "681b3a4c1f6fb92e663aed96"
  },
  {
    "phoneNumber": "648-821-9569 x43505",
    "firstName": "Arjun",
    "lastName": "Huels",
    "id": "681b3a4c1f6fb92e663aed97"
  },
  {
    "phoneNumber": "(976) 309-4472 x6703",
    "firstName": "Taryn",
    "lastName": "Haley",
    "id": "681b3a4c1f6fb92e663aed98"
  },
  {
    "phoneNumber": "(570) 564-0845 x804",
    "firstName": "Rylan",
    "lastName": "Bechtelar",
    "id": "681b3a4c1f6fb92e663aed99"
  },
  {
    "phoneNumber": "425-254-1355 x157",
    "firstName": "Stephen",
    "lastName": "Cartwright",
    "id": "681b3a4c1f6fb92e663aed9a"
  },
  {
    "phoneNumber": "978.746.4956 x3781",
    "firstName": "Cristopher",
    "lastName": "Ziemann",
    "id": "681b3a4c1f6fb92e663aed9b"
  },
  {
    "phoneNumber": "1-656-623-5488 x1439",
    "firstName": "Olin",
    "lastName": "Blick",
    "id": "681b3a4c1f6fb92e663aed9c"
  },
  {
    "phoneNumber": "371-305-3096",
    "firstName": "Kacie",
    "lastName": "Hayes",
    "id": "681b3a4c1f6fb92e663aed9d"
  },
  {
    "phoneNumber": "(829) 477-6018 x898",
    "firstName": "Delphine",
    "lastName": "Rogahn-Padberg",
    "id": "681b3a4c1f6fb92e663aed9e"
  },
  {
    "phoneNumber": "(895) 672-0924 x846",
    "firstName": "Kenna",
    "lastName": "Walker-Daugherty",
    "id": "681b3a4c1f6fb92e663aed9f"
  },
  {
    "phoneNumber": "1-291-532-9334 x38567",
    "firstName": "Berneice",
    "lastName": "Grady",
    "id": "681b3a4c1f6fb92e663aeda0"
  },
  {
    "phoneNumber": "901-449-7827",
    "firstName": "Obie",
    "lastName": "Bogisich",
    "id": "681b3a4c1f6fb92e663aeda1"
  },
  {
    "phoneNumber": "711-763-9237 x9251",
    "firstName": "Muhammad",
    "lastName": "Gleichner",
    "id": "681b3a4c1f6fb92e663aeda2"
  },
  {
    "phoneNumber": "618-730-2783",
    "firstName": "Odell",
    "lastName": "Franey",
    "id": "681b3a4c1f6fb92e663aeda3"
  },
  {
    "phoneNumber": "(807) 443-4324 x20722",
    "firstName": "Catalina",
    "lastName": "Lehner",
    "id": "681b3a4c1f6fb92e663aeda4"
  },
  {
    "phoneNumber": "695-684-6252 x9657",
    "firstName": "Simeon",
    "lastName": "Reinger",
    "id": "681b3a4c1f6fb92e663aeda5"
  },
  {
    "phoneNumber": "(376) 654-2040 x1038",
    "firstName": "Cortney",
    "lastName": "Kohler",
    "id": "681b3a4c1f6fb92e663aeda6"
  },
  {
    "phoneNumber": "1-824-302-5967 x66837",
    "firstName": "Cassie",
    "lastName": "Toy",
    "id": "681b3a4c1f6fb92e663aeda7"
  },
  {
    "phoneNumber": "647.266.9157 x2785",
    "firstName": "Mitchel",
    "lastName": "Adams",
    "id": "681b3a4c1f6fb92e663aeda8"
  },
  {
    "phoneNumber": "(682) 797-6464 x2228",
    "firstName": "Laney",
    "lastName": "Bartell",
    "id": "681b3a4c1f6fb92e663aeda9"
  }
];


const getPaginatedData = <T>(data: T[], limit: number, offset: number) => {
  return {
    data: data.slice(offset, offset + limit),
    totalCount: data.length,
  };
};

export const getContacts = async (limit: number, offset: number) => {
  const result = getPaginatedData(mockData, limit, offset);
  await new Promise(resolve => setTimeout(resolve, 200));

  return {
    ...result,
    extra: {
      currentUserContact: mockData[3]
    }
  };
};
