// const halo = () : string => "hhehehehe"
// console.log(halo())


// overloading function
function add(a: string, b: string) : string
function add(a: number, b: number) : number

function add(a: any, b: any) : any {
  return a + b
}

console.log(add(5, 12))
console.log(add("Jhon", "Doe"))