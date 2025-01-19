// Clean the vowels 
function deleteV(chain){
    let vowels = "aeiouAEIOU";  // Lista de vocales a eliminar
    return chain.split("")       // Convertir la cadena en un array de caracteres
                .filter((char) => !vowels.includes(char)) // Filtrar las vocales
                .join("");      // Unir los caracteres filtrados sin delimitador
}

module.exports = {
    deleteV
};
