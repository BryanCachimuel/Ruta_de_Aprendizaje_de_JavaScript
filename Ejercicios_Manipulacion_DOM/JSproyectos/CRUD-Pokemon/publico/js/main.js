"use strict";

/* Variobles globales */
let params = null;
let colsEdit = null;

const colEditHtml = `
    <td>
        <div class="btn-group">
            <button id="bEdit" class="btn btn-edit" onClick="rowEdit(this);"><i class="fas fa-edit"></i></button>
            <button id="bElim" class="btn btn-delete" onClick="rowElim(this);"><i class="fas fa-trash"></i></button>
            <button id="bAcep" class="btn btn-accept" onClick="rowAcept(this);"><i class="fas fa-check"></i></button>
            <button id="bCanc" class="btn btn-cancel" onClick="rowCancel(this);"><i class="fas fa-times"></i></button>
        </div>
    </td>
`;

/* Llamada de la API */
const fetchPokemonData = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        return response.ok ? await response.json() : console.warn("Pokemon no encontrado: ", pokemonName);
    } catch (error) {
        console.error("Error al buscar Pokemon: ", error);
        return null;
    }
} 
