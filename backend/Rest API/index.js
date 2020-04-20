let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let employees = [{'id':1,'name':'John','surname': 'smith','tel':'0816769629','position':'Banquet','date': '10/04/2020 14.00-24.00','status':'success'},
   {'id':2, 'name':'Jame','surname': 'Wulock','tel':'087433121','position':'Casual','date': '10/04/2020 14.00-24.00','status':'wating'}
];
let works = [{'id':1,'job':'Banquet','detail': '10/04/2020 12.00-21.00','number':'4'},
   {'id':2, 'job':'Staff Party','detail': '10/04/2020 14.00-24.00','number':'4'},
   {'id':3, 'job':'SET UP','detail': '14/04/2020 07.00-16.00','number':'10'}
];

//router.route('/employees').get((req, res) =>  res.json(employees) );
router.route('/employees')
   // get all employees
   .get( (req, res) =>  res.json(employees) ) 

   // insert a new employee
   .post( (req, res)=> {
       var employee = {};
       employee.id =  employees[employees.length-1].id+1;
       employee.name = req.body.name
       employee.surname = req.body.surname
       employee.tel = req.body.tel
       employee.position = req.body.position
       employee.date = req.body.date
       employee.status = req.body.status
       employees.push(employee);
       res.json( {message: 'employee created!'} )
   })
   router.route('/employees/:employee_id')
   .get ( (req,res) => {
        let id = req.params.employee_id
        let index = employees.findIndex( employee => (employee.id === +id) )
        res.json(employees[index])                   // get a employee
    })  
    .put ( (req,res) => {                               // Update a employee
        let id = req.params.employee_id
        let index = employees.findIndex( employee => (employee.id === +id) )
        employees[index].name = req.body.name;   
        employees[index].surname = req.body.surname;   
        employees[index].tel = req.body.tel;   
        employees[index].position = req.body.position;   
        employees[index].date = req.body.date;   
        employees[index].status = req.body.status;   
        res.json({ message: 'employee updated!' + req.params.employee_id});
    })
    .delete ( (req,res) => {                   // Delete a employee
        let id = req.params.employee_id
        let index = employees.findIndex( employee => employee.id === +id  )
        employees.splice(index,1) 
        res.json({ message: 'employee deleted: ' + req.params.employee_id});
    })
router.route('/works')
    // get all employees
    .get( (req, res) =>  res.json(works) ) 
    .post( (req, res)=> {
        var work = {};
        work.id =  works[works.length-1].id+1;
        work.job = req.body.job
        work.detail = req.body.detail
        work.number = req.body.number
        works.push(work);
        res.json( {message: 'work created!'} )
    })
    router.route('/works/:work_id')
    .get ( (req,res) => {
         let id = req.params.work_id
         let index = works.findIndex( work => (work.id === +id) )
         res.json(works[index])                   // get a works
     }) 
     .put ( (req,res) => {                               // Update a employee
        let id = req.params.work_id
        let index = works.findIndex( work => (work.id === +id) )
        works[index].job = req.body.job;   
        works[index].detail = req.body.detail;     
        works[index].number = req.body.number;      
        res.json({ message: 'work updated!' + req.params.work_id});
    })
    .delete ( (req,res) => {                   // Delete a employee
        let id = req.params.work_id
        let index = works.findIndex( work => work.id === +id  )
        works.splice(index,1) 
        res.json({ message: 'work deleted: ' + req.params.work_id});
    })

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen( process.env.PORT || 80 ,  () => console.log("Server is running") );