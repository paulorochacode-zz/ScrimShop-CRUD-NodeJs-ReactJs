const express = require("express");
const app = express();
const cors = require("cors");
const Sequelize = require('sequelize');

//db configuration
const sequelize = new Sequelize('crudgames', 'root' , '' , {
      //machine
      host: "localhost",
      //type
      dialect: 'mysql'
})

//verify if connction is succefull{{
sequelize.authenticate().then(function(){
      console.log("Conected!")
}).catch(function(error){
      console.log("Fail at try to connect:" +error)
})

const Games = sequelize.define('games',{
      name: {
            type: Sequelize.STRING
      },
      cost:{
            type: Sequelize.STRING
      },
      category:{
            type: Sequelize.STRING
      },
})
Games.sync({force: true})

//request + query
app.get("/", (req, res) => {
      Games.create({
            name: "Far Cry 5",
            cost: "R$120,00",
            category: "Action, Adventure, MMO, RPG, FPS",
      })
           
})


app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
     /*const { name } = req.body;
     const { cost } = req.cost;
     const { category } = req.category;
     console.log(name);*/
})

app.listen(3001, () => {
      console.log("rodando servidor");
});