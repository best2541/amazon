import express from 'express';

const app = express();

app.get('/', (req, res => {
    res.send("NODEJS");
}));
app.listen(5000, () => {
    console.log('Server is running port:5000');
});