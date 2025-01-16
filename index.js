import express from 'express'

const app = express();

app.get('/' , (req,res)=>{
    res.send('Hello');
})
app.get('/book' , (req,res)=>{
   return res.status(200).json({ message: 'Book successful' });
})
app.listen(3000,()=>{
    console.log(`app listening on port 3000`);
});