// import required essentials
const express = require('express');
const fs = require('fs');

// create new router
const expensesRoutes = express.Router();


//read expenses data
var data = JSON.parse(fs.readFileSync('./data/expenses.json', 'UTF-8'));


//get the list of all expenses
expensesRoutes.get('/viewexpenses', (req, res) => {
    //fs.readFile('./data/expenses.json', 'UTF-8', (err, data) => {
    //  if (err) {
     //   console.log("File read failed:", err);
     //   return;
    //  }
     try{
        res.json(data);
      }
      catch (err) {
        console.log("Error parsing JSON string:", err);
      }
  });
      
    //to-do: figure out how to remove the id from each expense
    //for (var i=0; i<expensesData.expenses.length; i++){
     // var expense = [expensesData.expenses[i]];
     // res.write(JSON.stringify(expense));
  //}
//});
  
  
//get a specific expense
//http://localhost:3000/accounts/3
expensesRoutes.get('/viewexpenses/:expenseId', (req, res) => {
  var expenseId = +req.params.id;
  var expense = data.find( (expense) => expense.id === expenseId);

  if (!expense) {
    res.status(500).send('Expense not found.')
  } else {
    res.json(expense);
  }
});

  
//add a new expense
expensesRoutes.post('/addexpense', (req, res) => {
    
  const newExpense = req.body;

  data.push(newExpense);

  res.json(data);
});


//edit an expense 
expensesRoutes.put('/viewexpense/:expenseId', (req, res) => {
    
  const expenseId = Number(req.params.id);
  const body = req.body;
  const expense = data.find((expense) => expense.id === expenseId);

  const index = data.indexOf(expense);

  if (!expense) {
    res.status(500).send('Expense not found.');
  } else {
    const updatedExpense = { ...expense, ...body };

    data[index] = updatedExpense;

    res.send(updatedExpense);
  }
});

//delete an expense
router.delete('/viewexpenses/:expenseId', (req, res) => {
  const expenseId = Number(req.params.id);
  const newData = data.filter((expense) => expense.id != expenseId);

  if (!newData) {
    res.status(500).send('Expense not found.');
  } else {
    data = newData;
    res.send(data);
  }
});

// Exporting router
module.exports = expensesRoutes;