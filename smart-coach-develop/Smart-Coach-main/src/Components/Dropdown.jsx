import { useRef } from "react";
import { Text, Group, Button, createStyles, rem } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import uploadIcon from "../Assets/upload-minimalistic-svgrepo-com.svg";
import mal from "../Assets/cancel-svgrepo-com.svg";

//import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}));

export function DropzoneButton() {
  const { classes } = useStyles();
  const openRef = useRef(5);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              {/*  <IconDownload
                size={rem(50)}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              /> */}
            </Dropzone.Accept>
            <Dropzone.Reject>
              <img
                src={mal}
                alt=""
                style={{ width: 100 }}
                resizeMode="contain"
              />
              {/*  <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} /> */}
            </Dropzone.Reject>
            <Dropzone.Idle>
              <img
                src={uploadIcon}
                alt=""
                style={{ width: 100 }}
                resizeMode="contain"
              />

              {/* <IconCloudUpload
                size={rem(50)}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              /> */}
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Agrear video</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Arrastra un archivo o da click en el botton para agragar un video
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
