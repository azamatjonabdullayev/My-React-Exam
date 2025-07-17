import type { HTMLAttributes } from "react";

export default interface IRecomendedGamesBig
  extends HTMLAttributes<HTMLDivElement> {
  gameCategory: string;
  gameName: string;
  byWhom: string;
  releaseDate: Date;
  downloads: number;
  gameImage: string;
}
