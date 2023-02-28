const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(cors())

app.get('/', async(req, res) => {

  //Utlmo passo foi tratar com try/catch
  try{
  // const response = await axios('https://jsonplaceholder.typicode.com/users') ou
  // response é a resposta do axios MAS eu tiro o data de dentro do response, sem precisar
  // tratar com pegar o dado e transformar em json
  const { data } = await axios('https://jsonplaceholder.typicode.com/users')
  console.log(data)

  // return res.json([
  //   {name: 'Marcio'},
  //   {name: 'Evandro'}
  // ])

  return res.json(data)
}catch(error){
  console.log(error)
}
})

app.listen('4567')