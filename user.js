var user = {
  name: "yang",
  location: "provo",
  occupations: ["student", "programmer", "napper"],
  hobbies: [
    {
      name: "Basketball",
      type: "sports"
    },
    {
      name: "Running",
      type: "sports"
    },
    {
      name: "heartstone",
      type: "video game"
    }
  ],
  family: [
    {
      name: "guldan",
      relation: "brother",
      gender: "male"
    },
    {
      name: "jarvan iv",
      relation: "brother",
      gender: "male"
    },{
      name: "ashe",
      relation: "sister",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: 'pie pizza',
      type: 'american',
      rating: 7
    },
    {
      name: 'cheescake factory',
      type: 'fushion',
      rating: 8
    },
    {
      name: 'donald trump',
      type: 'american',
      rating: 4
    }
  ]
};
module.exports = user;
