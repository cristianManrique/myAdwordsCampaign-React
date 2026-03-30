import React from "react";
import { useNavigate } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();
  let boxInput = React.createRef();

  const goToApp = (event) => {
    event.preventDefault();
    const pseudo = boxInput.current.value;
    navigate(`/box/${pseudo}`);
  };

  return (
    <div className="connexionBox">
      <form className="connexion" onSubmit={goToApp}>
        <h3>Adwords Campaign</h3>
        <input
          type="text"
          placeholder="nom utilisateur"
          pattern="[A-Za-z]+"
          required
          ref={boxInput}
        />
        <button type="submit">GO</button>
      </form>
    </div>
  );
}

export default Connexion;
