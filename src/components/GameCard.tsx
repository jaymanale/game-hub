import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/crop-image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card variant={"filled"} boxShadow="md">
      <Image
        borderRadius="lg"
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
