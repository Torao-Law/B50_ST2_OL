// const isVip: boolean = false
// const checkVip: Promise<string> = new Promise((resolve, reject) => {
//   if(isVip) resolve("Member is VIP")
  
//   reject("Member isnt VIP")
// }) 

// checkVip.then((res: string) => console.log("yes " + res)).catch((res: string) => console.log("no " + res))

type member = {
  id: number,
  name: string,
  is_vip: boolean
}

type product = {
  id: number,
  name: string,
  price: number
}

const member: Promise<member> = new Promise(resolve => {
  resolve({
    id: 1,
    name: "Jhon Doe",
    is_vip: true
  })
})

const product: Promise<product> = new Promise(resolve => {
  resolve({
    id: 1,
    name: "Thinkpadlader",
    price: 10000000000000
  })
})

Promise.all([member, product]).then((res: any) => console.log(res))