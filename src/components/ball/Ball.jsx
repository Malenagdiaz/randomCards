import { IoMdFootball } from "react-icons/io";

export const Ball = ({ footballPlayerName }) => {
  return (
    <>
      {footballPlayerName === "Messi" && <IoMdFootball />}
      {footballPlayerName === "Dibu" && <IoMdFootball />}
      {footballPlayerName === "Neymar" && <IoMdFootball />}
      {footballPlayerName === "Ronaldo" && <IoMdFootball />}
      {footballPlayerName === "Ramos" && <IoMdFootball />}
      {footballPlayerName === "Mbappe" && <IoMdFootball />}
    </>
  );
};
