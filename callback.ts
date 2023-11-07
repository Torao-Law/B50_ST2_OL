// function checkVip(user: string, callback: (isVip: boolean) => void) : string {
//   return `Haii,, Mr.${user},  kamu member ${callback(true)}`
// }

// function vipConditional(vip: boolean) : string {
//   if(vip) return "VIP"
  
//   return "reguler"

// }

// console.log(checkVip("Ferdi", vipConditional))


// callback with interface / type
interface vip {
  (isVip: boolean) : string
}

function checkVip(user: string, callback: vip) : string {
  return `Haii,, Mr.${user},  kamu member ${callback(true)}`
}

function vipConditional(vip: boolean) : string {
  if(vip) return "VIP"
  
  return "reguler"

}

console.log(checkVip("Ferdi", vipConditional))