import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenresListItemSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenresListItemSkeleton;
