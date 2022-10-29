// import required essentials
const express = require('express');
// create new router
const router = express.Router();
const expenses = require('./data/expenses');

//get the list of all expenses
router.get('/expenses', (req, res) => {

res.send(expenses);

})
  
  
//get a specific expense
router.get('/expenses/:expenseId', (req, res) => {
    
})
  
  
//update an expense
router.patch('/expenses/:expenseId', (req, res) => {
    res.send('hello world')
})
  
  
//delete an exepense
router.delete('/expenses/:expenseId', (req, res) => {
    
})