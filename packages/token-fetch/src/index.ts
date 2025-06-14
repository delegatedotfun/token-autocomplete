import { fetchVerifiedTokensFromJupiter } from './script/fetch-tokens';
import path from 'path';

const filePath = path.join(__dirname, "../../../apps/web/public/tokens.json");
fetchVerifiedTokensFromJupiter(filePath);