export type Alimento = "carne" | "linguica" | "frango" | "paoAlho";

//Definindo a quantidade de cada alimento (em gramas)
export const quantidadePessoas: Record<Alimento, number> = {
    carne: 400,
    linguica: 300,
    frango: 300,
    paoAlho: 150,
};

//Definindo o alias de cada alimento
export const nomesAlimentos: Record<string, string> = {
    carne: "Carne",
    linguica: "Linguiça",
    frango: "Frango",
    paoAlho: "Pão de alho",
};