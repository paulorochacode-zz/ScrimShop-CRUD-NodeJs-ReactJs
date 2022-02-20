const Sequelize = require('sequelize')

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

Games.export;
sequelize.export;