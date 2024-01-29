import {
  Avatar,
  Paper,
  Group,
  ActionIcon,
  Flex,
  Text,
  UnstyledButton,
  Space,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import trashw from "./../../Assets/trash_white.svg";

// Defining the Cuenta component
function Cuenta() {
  const { hovered, ref } = useHover();
  return (
    <UnstyledButton
      style={{
        maxWidth: "25.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        ref={ref}
        p="sm"
        radius="0"
        withBorder="1"
        style={{
          opacity: hovered ? 0.9 : 1,
          borderColor: "#ffcb04",
          backgroundColor: "#2e3092",
          borderWidth: "4px",
          color: "#ffcb04",
        }}
      >
        <Group position="left" m={5}>
          <Avatar radius="xl" variant="filled" />
          <Flex direction="column" gap="sm">
            <Text mb={-5} fz="1.5rem">
              Cuenta1@smartcoach.top
            </Text>
            <Text mt={-20} fz="1.1rem" style={{ opacity: 0.9 }}>
              Flag
            </Text>
          </Flex>
          <Space w="sm" />
          <ActionIcon color="pink" size="xl" radius="xl" variant="filled">
            <img
              src={trashw}
              alt="Eliminar"
              style={{ width: "2rem", padding: ".1rem" }}
            />
          </ActionIcon>
        </Group>
      </Paper>
    </UnstyledButton>
  );
}

export default Cuenta;
