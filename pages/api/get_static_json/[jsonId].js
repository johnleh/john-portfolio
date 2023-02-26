import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const { jsonId } = req.query

    const jsonPath = path.join(process.cwd(), 'public/json/' + jsonId + ".json");

    const fileContents = await fs.readFile(jsonPath, 'utf8');
    //TODO: Handle if Json not found
    return res.status(200).json(fileContents);
}