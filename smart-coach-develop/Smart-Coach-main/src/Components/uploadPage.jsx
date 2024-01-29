import { Modal } from "@mantine/core";
import { DropzoneButton } from "./Dropdown";

export default function Demo({ open, close }) {
  return (
    <>
      <Modal
        opened={open}
        withCloseButton
        onClose={close}
        size="xl"
        radius="md"
        centered
      >
        <DropzoneButton></DropzoneButton>
      </Modal>
    </>
  );
}
