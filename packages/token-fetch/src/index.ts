import { fetchVerifiedTokensFromJupiter } from './script/fetch-tokens';
import path from 'path';

const filePath = path.join(__dirname, "../../../data/tokens.json");
fetchVerifiedTokensFromJupiter(filePath);