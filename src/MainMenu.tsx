import React, { useState } from "react";

export const MainMenu = () => {
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  return (
    <div>
      <h1>GERTY RISK</h1>

      <hr />

      <input type="text" />
      <button>Add Player</button>
    </div>
  );
};
