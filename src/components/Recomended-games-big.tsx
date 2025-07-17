import React, { type JSX } from "react";
import type IRecomendedGamesBig from "../interfaces/recomended-games-big";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import "../styles/recomended-games.component.css";

const RecomendedGames: React.FC<IRecomendedGamesBig> = ({
  gameName,
  gameCategory,
  downloads,
  releaseDate,
  byWhom,
  gameImage,
}): JSX.Element => {
  return (
    <div
      className={`w-[960px] h-[600px] flex justify-end items-center flex-col gap-4 recomended-game text-white`}
      style={{
        backgroundImage: `url(${gameImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="rounded bg-[#f4796c] w-fit text-sm py-1 px-2.5 ">
        {gameCategory.toUpperCase()}
      </p>

      <p className="text-3xl font-bold game-name max-w-[540px] flex  ">
        {gameName}
      </p>

      <ul className="flex items-center gap-4 mb-3 text-sm font-semibold game-info">
        <li className="flex items-center gap-1">
          <HiOutlineUserCircle />
          <p>BY {byWhom.toUpperCase()}</p>
        </li>

        <li className="flex items-center gap-1">
          <CiCalendar />

          <p>
            {releaseDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </li>

        <li className="flex items-center gap-1">
          <IoMdDownload />
          <p>{downloads}</p>
        </li>
      </ul>
    </div>
  );
};

export default RecomendedGames;
