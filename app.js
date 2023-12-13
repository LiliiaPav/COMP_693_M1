import express from 'express'

const app=express();

const router = express.Router()
app.use(express.static('public'))

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

app.use(router)
const PORT = 5500;
app.listen(PORT, ()=>console.log('Listening port 5500'))