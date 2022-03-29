import { useState } from "react";
import { Stack, Badge } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const TaskBadges = ({ tags }) => {
  const colors = ["red", "green", "yellow", "blue", "purple"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentColor = colors[currentIndex];

  return (
    <>
      {tags && (
        <Stack direction="row" overflowX="auto" mb={5}>
          {tags.map((tag) => {
            return (
              <Badge
                key={uuidv4()}
                colorScheme={currentColor}
                rounded="full"
                px={3}
                fontWeight="thin"
              >
                {tag}
              </Badge>
            );
          })}
        </Stack>
      )}
    </>
  );
};

export default TaskBadges;
