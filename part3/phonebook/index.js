const express = require('express')
const morgan = require('morgan')
const app = express()

const requestLogger = morgan((tokens, req, res) => {
  const log = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
  return req.method === 'POST'
    ? `${log} ${JSON.stringify(req.body)}`
    : log
})

app.use(express.json())
app.use(requestLogger)

let persons = [
  {
    name: "Arto Hellas",
    number: "9567 1239",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "8174 9813",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "9184 9151",
    id: 3 
  },
  {
    name: "Mary Poppendieck",
    number: "8524 9458",
    id: 4 
  }
]

app.get('/', (req, res) => { 
  res.send('<h1>Phonebook</h1>')
})

app.get('/info', (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p>
     <p>${new Date}</p>`
  )
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => {
    return person.id === id
  })

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const generateId = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  const id = getRandomInt(0, 100000)
  return id
}

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number of person is missing'
    })
  }
  
  const existing = persons.find(p => p.name === body.name)
  if (existing) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }
  
  persons = persons.concat(person)

  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})


