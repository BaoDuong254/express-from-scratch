const App = require('./src/app')
const app = new App()

app.get('/', (req, res) => {
    res.end('Hello World')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
