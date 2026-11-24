import { mkdirSync, writeFileSync } from "node:fs";

// A short, furious rant about one small everyday annoyance: the office
// printer. Specific machine, specific failure, no throat-clearing — the
// anger has to feel shared, not performed, and the punch has to come fast.
const RANT =
  "The office printer has one job and it has chosen violence. It eats page one, flashes a light no manual has ever explained, and then — like a machine that has never once been wrong — prints a test page. I did not ask for a test page. I asked for my boarding pass, and my flight leaves in twenty minutes while I negotiate with a toaster that went to printer school.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
