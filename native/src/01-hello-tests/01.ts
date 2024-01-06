// export const value01_01 = "01_01"
//если не хочемо прописувати export, треба поставити false в tsconfig.json > "isolatedModules": true
export function sum(a:number, b:number) {
    return a+b;
}
export function mult(a:number, b:number) {
    return a*b;
}

