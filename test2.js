import express from 'express';
import { engine } from 'express-handlebars';

const app =express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templetes');

const students = [
    {
        id:1,
        name:"Esraa",
        city:"y",
    },
    {
        id:2,
        name:"Basma",
        city:"K",
    },
    {
        id:3,
        name:"Alaa",
        city:"Z",
    },
    {
        id:4,
        name:"AYA",
        city:"W",
    }
];

const student =(request,response)=>{
    let output="<ul>"

for(let i=0;i<students.length;i++){
    const student=students[i];
    output+="<li><a href ='/student/"+student.id+" '>"+student.name+"</li>";

}
    output+="</ul>"
  response.send(output)
};

app.get("/student",student)

app.get("/student/:id",(request,response)=>{
  const id = request.params.id;
  const student = students.find((item)=> {
    return item.id == id;

  })
  response.render('student',{layout : false})
  
});

app.listen(5000);


