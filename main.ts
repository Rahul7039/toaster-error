// The Funniest Toaster Error Message — make.fun entry.
// Writes one line, the funniest error message a kitchen toaster would show its
// owner, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "PLEASE DO NOT PUT A FORK IN ME AGAIN. I HAVE A FAMILY.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
