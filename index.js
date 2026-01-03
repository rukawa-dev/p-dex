const typeColors = {
  normal: 'bg-gray-200 text-gray-800',
  fire: 'bg-red-200 text-red-900',
  water: 'bg-blue-200 text-blue-900',
  grass: 'bg-green-200 text-green-900',
  electric: 'bg-yellow-200 text-yellow-900',
  ice: 'bg-cyan-200 text-cyan-900',
  fighting: 'bg-red-800 text-white',
  poison: 'bg-purple-200 text-purple-900',
  ground: 'bg-yellow-600 text-white',
  flying: 'bg-indigo-200 text-indigo-900',
  psychic: 'bg-pink-200 text-pink-900',
  bug: 'bg-lime-200 text-lime-900',
  rock: 'bg-yellow-800 text-white',
  ghost: 'bg-purple-800 text-white',
  dragon: 'bg-indigo-800 text-white',
  dark: 'bg-gray-800 text-white',
  steel: 'bg-gray-400 text-gray-900',
  fairy: 'bg-pink-300 text-pink-900',
};

const typeNamesKo = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  grass: '풀',
  electric: '전기',
  ice: '얼음',
  fighting: '격투',
  poison: '독',
  ground: '땅',
  flying: '비행',
  psychic: '에스퍼',
  bug: '벌레',
  rock: '바위',
  ghost: '고스트',
  dragon: '드래곤',
  dark: '악',
  steel: '강철',
  fairy: '페어리',
};

const evolutionCategoryColors = {
    LV: 'text-blue-600',
    ITEM: 'text-green-600',
    TRADE: 'text-purple-600',
    ETC: 'text-orange-600',
    NONE: 'text-gray-500'
};

function renderTable() {
  const tableBody = document.getElementById('pokemon-list');
  
  if (typeof pokemonData === 'undefined') {
    console.error('pokemonData is not defined. Make sure dex-data.js is loaded.');
    return;
  }

  pokemonData.forEach(pokemon => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-gray-50 transition-colors duration-200';
    
    const typesHtml = pokemon.types.map(type => {
        const colorClass = typeColors[type] || 'bg-gray-200 text-gray-800';
        const typeName = typeNamesKo[type] || type;
        return `<span class="relative inline-block px-3 py-1 font-semibold leading-tight ${colorClass} rounded-full mr-1 text-xs">
                  <span class="relative z-10">${typeName}</span>
                </span>`;
    }).join('');

    const evolutionColorClass = evolutionCategoryColors[pokemon.evolution.category] || 'text-gray-500';
    const wikiUrl = `https://pokemon.fandom.com/ko/wiki/${pokemon.name}_(포켓몬)`;

    row.innerHTML = `
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p class="text-gray-900 whitespace-no-wrap font-mono">#${String(pokemon.id).padStart(3, '0')}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center font-bold text-gray-700">
        <div class="flex items-center justify-center">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="w-10 h-10 mr-2">
            <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline">
              ${pokemon.name}
            </a>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
        ${typesHtml}
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center ${evolutionColorClass} font-semibold">
        ${pokemon.evolution.text}
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

renderTable();