import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games", // End Point
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, // Request Param
    [selectedGenre?.id, selectedPlatform?.id] // Dependency Items
  );

export default useGames;
