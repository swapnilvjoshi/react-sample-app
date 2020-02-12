import express from 'express'
import Config from './Config'

const app = express()
const port = Config.PORT;


app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {answer: 10})
})

app.listen(port, () => console.info(`Server running. Listening on port ${port}!`))