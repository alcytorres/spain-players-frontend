import axios from "axios";
import { useState, useEffect } from "react";
import { PlayersIndex } from "./PlayersIndex";
import { PlayersNew } from "./PlayersNew";
import { PlayersShow } from "./PlayersShow";
import { Modal } from "./Modal";

export function Content() {
  const [players, setPlayers] = useState([]);
  const [isPlayersShowVisible, setIsPlayersShowVisible] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState({});


  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");          
    axios.get("http://localhost:3000/players.json").then((response) => {
      console.log(response.data);
      setPlayers(response.data);
    });
  };

  const handleCreatePlayer = (params, successCallback) => {
    console.log("handleCreatePlayer", params);
    axios.post("http://localhost:3000/players.json", params).then((response) => {
      setPlayers([...players, response.data]);
      successCallback();
    });
  };

  const handleShowPlayer = (player) => {
    console.log("handleShowPlayer", player);
    setIsPlayersShowVisible(true);
    setCurrentPlayer(player);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlayersShowVisible(false);
  };

  useEffect(handleIndexPlayers, []);

    return (
      <div>
        <PlayersNew onCreatePlayer={handleCreatePlayer} />
        <PlayersIndex players={players} onShowPlayer={handleShowPlayer} />
        <Modal show={isPlayersShowVisible} onClose={handleClose}>
          <PlayersShow player={currentPlayer} />
          </Modal>
      </div>
    );
  }


