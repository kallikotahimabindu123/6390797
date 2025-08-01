import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Player1", score: 65 },
    { name: "Player2", score: 80 },
    { name: "Player3", score: 45 },
    { name: "Player4", score: 95 },
    { name: "Player5", score: 30 },
    { name: "Player6", score: 77 },
    { name: "Player7", score: 88 },
    { name: "Player8", score: 50 },
    { name: "Player9", score: 99 },
    { name: "Player10", score: 25 },
    { name: "Player11", score: 70 }
  ];

  // Filter players with score < 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
