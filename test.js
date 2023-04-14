import express from 'express';
const app =express();

const student =(request,response)=>{
  response.send(<h1>Esraaa Ahmed </h1>)
};
app.get("/student",student)
app.listen(5000);