let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let employees = [{'id':1,'name':'John','surname': 'smith','tel':'0816769629','position':'bq'},
   {'id':2, 'name':'Jame','surname': 'Wulock','tel':'087433121','position':'bq'}
];

//router.route('/employees').get((req, res) =>  res.json(employees) );
router.route('/employees')
   // get all employees
   .get( (req, res) =>  res.json(employees) ) 

   // insert a new bear
   .post( (req, res)=> {
       var employee = {};
       employee.id =  employees[employees.length-1].id+1;
       employee.name = req.body.name
       employee.surname = req.body.surname
       employee.tel = req.body.tel
       employee.position = req.body.position
       employees.push(employee);
       res.json( {message: 'employee created!'} )
   })
   router.route('/employees/:employee_id')
   .get ( (req,res) => {
        let id = req.params.employee_id
        let index = employees.findIndex( employee => (employee.id === +id) )
        res.json(employees[index])                   // get a bear
    })  
    .put ( (req,res) => {                               // Update a bear
        let id = req.params.employee_id
        let index = employees.findIndex( employee => (employee.id === +id) )
        employees[index].name = req.body.name;   
        employees[index].surname = req.body.surname;   
        employees[index].tel = req.body.tel;   
        employees[index].position = req.body.position;   
        res.json({ message: 'employee updated!' + req.params.employee_id});
    })
    .delete ( (req,res) => {                   // Delete a bear
        // delete     bears[req.params.bear_id]
        let id = req.params.employee_id
        let index = employees.findIndex( employee => employee.id === +id  )
        employees.splice(index,1) 
        res.json({ message: 'employee deleted: ' + req.params.employee_id});
    })
 

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen( process.env.PORT || 80 ,  () => console.log("Server is running") );