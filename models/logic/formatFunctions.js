

export const Peso = (peso) =>
{
    if (peso[0] === "0")
    {
        return peso.slice(1, 3) + " Kgs";
    }
    else
    {
        return peso + " Kgs";
        }
}
export const tamanho = (t) =>
{
    return t.slice(0, 1) + "." + t.slice(1, 3) + "m";
}
