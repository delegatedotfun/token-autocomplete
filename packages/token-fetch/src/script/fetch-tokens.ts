import fs from "fs";

export async function fetchVerifiedTokensFromJupiter(filePath: string) {
    const url = 'https://api.jup.ag/tokens/v1/tagged/verified';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
            const data = await response.json();
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            return data;
        }

        console.log('No tokens found');
        return null;
    } catch (error) {
        console.error('Error fetching tokens:', error);
        return null;
    }
}