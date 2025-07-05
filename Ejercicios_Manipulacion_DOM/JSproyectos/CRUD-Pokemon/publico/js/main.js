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

/* Agregar una nueva fila a la tabla */
const addRowToTable = async (pokemonName) => {
    const pokemonData = await fetchPokemonData(pokemonName);
    if(!pokemonData) {
        alert("Pokemon no encontrado. Verifica el nombre e intenta de nuevo");
        return;
    }

    const tableBody = document.querySelector("#table-list tbody");
    const { sprites, name, types } = pokemonData;

    tableBody.insertAdjacentHTML("beforeend", `
       <tr>
            <td><img src="${sprites.front_default}" alt="${name}"></td>
            <td>${name}</td>
            <td>${types.map(t => t.type.name).join(",")}</td>
            ${colEditHtml}
        </tr>
    `);
}

/* Inicializar la tabla con algunos de los pokemones */
const initializeTable = () => ["pikachu","charmander","bulbasaur","squirtle"].forEach(addRowToTable);

/* Cambiar el estado de una fila a modo de edición */
const setEditMode = (button) => {
    const buttons = button.closest("div.btn-group").querySelectorAll("button");
    buttons.forEach(btn => btn.style.display = btn.id === "bAcep" || btn.id === "bCanc" ? "inline-block" : "none");
    button.closest("tr").setAttribute("id", "editing");
}

/* Verificar si la columna es editable */
const isEditable = (index) => !colsEdit || colsEdit.includes(index);

/* Edición de una fila en una tabla */
const rowEdit = (button) => {
    setEditMode(button);
    button.closest("tr").querySelectorAll('td:not([name="buttons"])').forEach(td => {
        if(isEditable(td.cellIndex)) {
            td.setAttribute("contenteditable", "true");
            td.classList.add("cell-editing");
            td.setAttribute("data-old", td.textContent);
        }
    });
}

const rowAcep = async (button) => {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
    const nameCell = cells[1];
    const typeCell = cells[2];

    const pokemonName = nameCell.textContent().trim().toLowerCase();
    if(!pokemonName) {
        alert("El nombre del Pokemon no puede estar vacío. Por favor ingresa un nombre");
        nameCell.textContent = nameCell.getAttribute("data-old");
        return;
    }
    
    const pokemonData = await fetchPokemonData(pokemonName);
    if(pokemonData) {
        cells[0].innerHTML = `<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}"></img>`;
        typeCell.textContent = pokemonData.types.map(t => t.type.name).join(", ");
    }else {
        alert("Nombre de Pokemon incorrecto. Por favor, verifica el nombre e intenta de nuevo");
        typeCell.textContent = typeCell.getAttribute("data-old");
    }

    row.querySelectorAll("td.cell-editing").forEach(td => {
        td.removeAttribute("contenteditable");
        td.classList.remove("cell-editing");
    });
    
    setNormalMode(button);
    params.onEdit();
}

/* Agregar un nuevo pokemon */
const rowAddNew = async (tabId) => {
    const pokemonName = prompt("Ingresa el nombre del pokemon:")

    if(pokemonName && pokemonName.trim() !== "") {
        await addRowToTable(pokemonName);
        params.onAdd();
    }else {
        alert("Por favor, ingresa un nombre válido de pokemon");
    }
}

/* Función principal para configurar la tabla como editable */
const setEditable = (options) => {
    const defaults = {
        columnsEd: null,
        addButton: null,
        onEdit: () => {},
        onBeforeDelete: () => {},
        onDelete: () => {},
        onAdd: () => {}
    };

    params = { ...defaults, ...options };
    colsEdit = params.columnsEd?.split(",").map(Number) || null;

    document.querySelectorAll("#table-list tbody tr").forEach(row => {
        if(!row.querySelector('td[name="buttons"]')) {
            row.insertAdjacentHTML("beforeend", colEditHtml);
        }
    });

    params.addButton?.addEventListener("click", () => rowAddNew("table-list"));
};

/* Inicializar */
document.addEventListener("DOMContentLoaded", () => {
    initializeTable();
    setEditable({
        columnsEd: "1,2",
        addButton: document.getElementById("add"),
        onEdit: () => {},
        onBeforeDelete: () => {},
        onDelete: () => {},
        onAdd: () => {}
    });
});
