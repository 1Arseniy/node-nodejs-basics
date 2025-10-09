import fs from "fs/promises";
import { existsSync } from "fs";

const create = async () => {
  try {
    const exists = existsSync("src/fs/files/fresh.txt");
    if (exists) {
      console.log("FS operation failed");
    }
    await fs.writeFile(
      "src/fs/files/fresh.txt",
      "I am fresh and young",
      "utf8"
    );
  } catch {
    console.log(err);
  }
};

await create();
