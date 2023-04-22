import PlatformData from "../data/PlatformData";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// As Platform list does not change we can render as static content
const usePlatforms = () => ({
  data: PlatformData,
  error: null,
  isLoading: false,
});

export default usePlatforms;
