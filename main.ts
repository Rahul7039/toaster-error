// The Funniest Toaster Error Message — make.fun entry.
// Writes one line, the funniest error message a kitchen toaster would show its
// owner, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The error message is assembled from its two beats — the plea and the
// reason — so each part reads (and can be tweaked) on its own.
const PLEA = "PLEASE DO NOT PUT A FORK IN ME AGAIN.";
const REASON = "I HAVE A FAMILY.";

function buildLine(): string {
  return [PLEA, REASON].join(" ");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", buildLine() + "\n", "utf8");
