async function FetchAPI()  {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

FetchAPI()