// for (let i = 0; i < 10; i++) {
//   console.log("Pinjem dulu seratus")
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log("Pinjem dulu seratus"+ arr[i])
// }

// const arr = [1, 2, 3, 4, 5]

// for (const key of arr) {
//   console.log(key)
// }

type profile = {
  name: string,
  gender: string,
  status: string
}

const obj: profile = {
  name: "Jhon doe",
  gender: "man",
  status: "single"
}

for (const key in obj) {
  console.log(key)
}