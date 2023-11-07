// foreach = looping, map = looping, filter = menyaring sesuai kondisi, reduce = mengurangi, sort = mengurutkan, find = cari, some and every = minimal ada satu <=> harus semua, indexof and includes = mencari keberadaan sebuah element array <=> memeriksa element dalam array, concat, push and pop = menambahkan , shift and unshift = menambahkan terakhir = pertama


// foreach: iterasi sebuah array
// const data = [3, 5, 1, 7, 6]
// data.forEach((num) => {
//   console.log(num)
// })
// const data = [3, 5, 1, 7, 6]
// data.forEach((num) => {
//   if(num % 2 === 0) {
//     console.log(num)
//   }
// })


// map: membuat array baru
// const data = [3, 5, 1, 7, 6]
// data.map((value, index) => {
//   console.log(value);  
// })

// const data = [3, 5, 1, 7, 6]
// const double = data.map((value) => {
//   return value * 2 
// })

// console.log(data)
// console.log(double)


// filter: buat array yang sesuai kondisi
// const data = [3, 5, 2, 7, 6]
// const result = data.filter((num) => num % 2 == 1)
// console.log(result)

// reduce: kalkulasi 
// const data = [3, 5, 2, 7, 6]
// const less = data.reduce((prev, current) => prev - current, 0)
// const sum = data.reduce((prev, current) => prev + current, 20)
// const sum = data.reduce((prev, current) => prev + current)

// console.log(sum)


// sort: mengurutkan
// var numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];

// var sortedArray: number[] = numericArray.sort((n1, n2) => n1 - n2);
// console.log(sortedArray);


// find: mengembalikan sebuah data pertama yang memenuhi kondisi
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// const found = numericArray.find(num => num > 2)

// console.log(found)


// some & every
// const numericArray: number[] = [2, 6, 9, 1, 9, 9];
// const hasEven: boolean = numericArray.some((data) => data == 1)
// const every: boolean = numericArray.every((data) => data == 9)

// console.log(every);


// push & unshift
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// numericArray.push(3)

// console.log(numericArray)
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// numericArray.unshift(3)

// console.log(numericArray)


// pop & shift
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// numericArray.pop()

// console.log(numericArray)
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// numericArray.shift()

// console.log(numericArray)


// indexof and includes
// const numericArray: number[] = [2, 11, 3, 4, 1, 5, 8];
// const data = numericArray.indexOf(8)
// const data = numericArray.includes(9)
// console.log(data)