import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.access("src/fs/files");
    await fs.cp("src/fs/files", "src/fs/files_copy", {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    console.log("FS operation failed");
  }
};

await copy();
