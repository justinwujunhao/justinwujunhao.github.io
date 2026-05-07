import fs from "node:fs/promises";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const notesPath = path.resolve("data", "notes.json");
const notesScriptPath = path.resolve("data", "notes.js");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return {
    date: `${year}.${month}.${day}`,
    datetime: `${year}-${month}-${day}`,
  };
};

const readNotes = async () => {
  try {
    return JSON.parse(await fs.readFile(notesPath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
};

const [titleArg, summaryArg] = process.argv.slice(2);
let title = titleArg;
let summary = summaryArg;

if (!title || !summary) {
  const rl = readline.createInterface({ input, output });
  title ||= await rl.question("标题: ");
  summary ||= await rl.question("摘要: ");
  rl.close();
}

if (!title?.trim() || !summary?.trim()) {
  console.error("标题和摘要不能为空。");
  process.exit(1);
}

const notes = await readNotes();
const { date, datetime } = formatDate(new Date());

notes.unshift({
  date,
  datetime,
  title: title.trim(),
  summary: summary.trim(),
});

await fs.mkdir(path.dirname(notesPath), { recursive: true });
await fs.writeFile(notesPath, `${JSON.stringify(notes, null, 2)}\n`, "utf8");
await fs.writeFile(
  notesScriptPath,
  `window.siteNotes = ${JSON.stringify(notes, null, 2)};\n`,
  "utf8",
);

console.log(`已添加想法：${title.trim()}`);
