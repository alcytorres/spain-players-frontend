export function PlayersIndex(props) {
  return (
    <div>
      <h1>All players</h1>
      {props.players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <p>team: {player.team}</p>
          <p>Position: {player.position}</p>
          <p>Dob: {player.dob}</p>
          <button onClick={() => props.onShowPlayer(player)}>More info</button>
        </div>
      ))}
    </div>
  );
}
