import { Card } from "../../components/card/Card";
import image1 from "../../assets/messi.jpg";
import image2 from "../../assets/dibu.jpg";
import image3 from "../../assets/neymar.jpg";
import image4 from "../../assets/ronaldo.jpg";
import image5 from "../../assets/ramos.jpg";
import image6 from "../../assets/mbappe.jpg";

import "./cardContainer.css";

export const CardContainer = ({ footballPlayerName }) => {
  return (
    <div className="card__principal__container">
      {footballPlayerName === "Messi" && (
        <Card
          cardImage={image1}
          cardFooter="Sos el GOAT, campeón del mundo y mejor jugador del mundo"
          footballPlayerName={footballPlayerName}
        />
      )}
      {footballPlayerName === "Dibu" && (
        <Card
          cardHeader="Mira que te como hermano"
          cardImage={image2}
          footballPlayerName={footballPlayerName}
        />
      )}
      {footballPlayerName === "Neymar" && (
        <Card
          cardHeader="eu parado no bailao"
          cardImage={image3}
          cardFooter="Sos el bailarín del equipo como Neymar Jr"
          footballPlayerName={footballPlayerName}
        />
      )}
      {footballPlayerName === "Ronaldo" && (
        <Card
          cardHeader="SIUUUUUUUU"
          cardImage={image4}
          footballPlayerName={footballPlayerName}
        />
      )}
      {footballPlayerName === "Ramos" && (
        <Card
          cardImage={image5}
          cardFooter="Sos el peor defensor como SERGIO RAMOS"
          footballPlayerName={footballPlayerName}
        />
      )}
      {footballPlayerName === "Mbappe" && (
        <Card
          cardImage={image6}
          cardFooter="Sos el perdedor como Mbappe"
          footballPlayerName={footballPlayerName}
        />
      )}
    </div>
  );
};
