export function PlayersShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlayer(props.player.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Player information</h1>
      <p>Name: {props.player.name}</p>
      <p>Team: {props.player.team}</p>
      <p>Position: {props.player.position}</p>
      <p>Dob: {props.player.dob}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.player.name} name="name" type="text" />
        </div>
        <div>
          Team: <input defaultValue={props.player.team} name="team" type="text" />
        </div>
        <div>
          Position: <input defaultValue={props.player.position} name="position" type="text" />
        </div>
        <div>
          Dob: <input defaultValue={props.player.dob} name="dob" type="text" />
        </div>
        <button type="submit">Update player</button>
      </form>
    </div>
  );
}
