import { useState } from "react";
import AsistenciaLab from "./components/AsistenciaLab";
import checkOk from "./images/check-circle-regular-120.png";
import checkWrong from "./images/x-circle-regular-120.png";
import Popup from "./components/Popup";

function App() {
  const [popup, setPopup] = useState();

  return (
    <div className="container-principal">
      <AsistenciaLab onPupop={setPopup} />
      {/* {popup ? (
        <Popup>
          <h2>Datos ingresados correctamente!</h2>
          <img className="popup-image" src={checkOk} alt="check OK" />
        </Popup>
      ) : (
        <Popup>
          <h2>¡Oops! algo salió mal</h2>
          <img className="popup-image" src={checkWrong} alt="check wrong" />
          <button className="popup-button">Reintentar</button>
        </Popup>
      )} */}
    </div>
  );
}

export default App;
