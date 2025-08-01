import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Player1", "Player3", "Player5", "Player7", "Player9", "Player11"];
  const evenTeam = ["Player2", "Player4", "Player6", "Player8", "Player10"];

  // Destructuring
  const [odd1, ...oddRest] = oddTeam;
  const [even1, ...evenRest] = evenTeam;

  // Merge arrays
  const T20players = ["Virat", "Rohit"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        {oddRest.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        {evenRest.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
