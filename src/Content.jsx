import axios from "axios";
import { useState, useEffect } from "react";
import { PlayersIndex } from "./PlayersIndex";

export function Content() {
  const [players, setPlayers] = useState([]);

  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");          
    axios.get("http://localhost:3000/players.json").then((response) => {
      console.log(response.data);
      setPlayers(response.data);
    });
  };

  useEffect(handleIndexPlayers, []);

    return (
      <div>
        <PlayersIndex players={players} />
      </div>
    );
  }


