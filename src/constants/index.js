import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const keymapPath = join(__dirname, 'keymap.json');


const jsonKey = fs.readFileSync(keymapPath, 'utf8');
const keyMap = JSON.parse(jsonKey);

const keys = Object.keys(keyMap);

export {keyMap, keys};