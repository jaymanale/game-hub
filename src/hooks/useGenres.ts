import GenresData from "../data/GenresData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

// As genres list does not change we can render as static content
const useGenres = () => ({ data: GenresData, error: null, isLoading: false });

export default useGenres;
