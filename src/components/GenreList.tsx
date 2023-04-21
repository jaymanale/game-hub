import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/crop-image-url";
import GenresListItemSkeleton from "./GenresListItemSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 15];

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeleton.map((skeleton) => <GenresListItemSkeleton key={skeleton} />)}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
