import { Modal, Button } from "@mantine/core"; // Mantine components

// Defining the addFTP component
export default function addFTP({ open, close }) {
  return (
    <>
      <Modal size="xl" opened={open} onClose={close} title="Authentication">
        <Button>aads</Button>
      </Modal>
    </>
  );
}
