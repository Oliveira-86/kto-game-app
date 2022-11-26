export const getAllTeams = async (req, res) => {
  const result = [
    {
      id: 't1',
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
      goals: {
        for: {
          total: {
            home: 40,
            away: 26,
            total: 66,
          },
        },
      },
    },
    {
      id: 't2',
      name: "Liverpool",
      logo: "https://media.api-sports.io/football/teams/40.png",
      goals: {
        for: {
          total: {
            home: 45,
            away: 21,
            total: 66,
          },
        },
      },
    },
    {
      id: 't3',
      name: "Manchester City",
      logo: "https://media.api-sports.io/football/teams/50.png",
      goals: {
        for: {
          total: {
            home: 50,
            away: 19,
            total: 69,
          },
        },
      },
    },
    {
      id: 't4',
      name: "Arsenal",
      logo: "https://media.api-sports.io/football/teams/42.png",
      goals: {
        for: {
          total: {
            home: 45,
            away: 27,
            total: 72,
          },
        },
      },
    },
  ];

  try {
    res.json({ result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
