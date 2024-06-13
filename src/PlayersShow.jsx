export function PlayersShow(props) {
  return (
    <div>
      <h1>Player information</h1>
      <p>Name: {props.player.name}</p>
      <p>Team: {props.player.team}</p>
      <p>Position: {props.player.position}</p>
      <p>Dob: {props.player.dob}</p>
    </div>
  );
}
