import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const packageJson = JSON.parse(await readFile(path.join(__dirname, '../../package.json'), 'utf-8'));
const { devDependencies, dependencies } = packageJson;

export default {
  "ts-loader": "^9.4.1",
  "webpack": "^5.75.0",
  "webpack-cli": "^4.9.2",
  "@babel/preset-env": "^7.17.10",
  "@babel/preset-react": "^7.16.7",
  "@babel/preset-typescript": "^7.16.7",
  "@biomejs/biome": "^1.5.3",
  ...devDependencies,
  ...dependencies,
};
