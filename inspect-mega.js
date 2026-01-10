// Native fetch is available in Node 18+
// My environment might support top level await or native fetch. I'll assume node 18+ for native fetch or just use standard promise.

const API_URL = 'https://pokeapi.co/api/v2';

async function checkMega(id) {
    console.log(`Fetching species data for #${id}...`);
    try {
        const speciesRes = await fetch(`${API_URL}/pokemon-species/${id}/`);
        const speciesData = await speciesRes.json();

        console.log(`\nName: ${speciesData.name}`);
        console.log('Varieties:');

        for (const v of speciesData.varieties) {
            console.log(`- Is Default: ${v.is_default}`);
            console.log(`  Name: ${v.pokemon.name}`);
            console.log(`  URL: ${v.pokemon.url}`);

            if (!v.is_default) {
                // Let's peek at the mega pokemon data
                const megaRes = await fetch(v.pokemon.url);
                const megaData = await megaRes.json();
                console.log(`    -> Types: ${megaData.types.map(t => t.type.name).join(', ')}`);
                console.log(`    -> Sprite: ${megaData.sprites.other['official-artwork'].front_default ? 'Yes' : 'No'}`);
            }
        }
    } catch (e) {
        console.error(e);
    }
}

// Charizard ID is 6
checkMega(6);
