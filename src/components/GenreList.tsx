import {
  Avatar,
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/crop-image-url";
import GenresListItemSkeleton from "./GenresListItemSkeleton";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeleton.map((skeleton) => <GenresListItemSkeleton key={skeleton} />)}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Wrap>
                <WrapItem>
                  <Avatar
                    objectFit="cover"
                    borderColor={"red"}
                    name={genre.name}
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                </WrapItem>
              </Wrap>
              {/* <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              /> */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
