import { Ball } from "../ball/Ball";
import "./buttonBall.css";

export const ButtonBall = ({ footballPlayerName, handleShootFootball }) => {
  return (
    <button className="btn-ball" onClick={handleShootFootball}>
      <Ball footballPlayerName={footballPlayerName} />
      Conócelo!!
    </button>
  );
};
