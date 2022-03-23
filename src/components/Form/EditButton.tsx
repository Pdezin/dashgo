import { Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export function EditButton() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  if (isWideVersion) {
    return (
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="purple"
        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
      >
        Editar
      </Button>
    );
  }

  return (
    <Button as="a" size="sm" fontSize="sm" variant="unstyled">
      <Icon as={RiPencilLine} fontSize="16" />
    </Button>
  );
}
