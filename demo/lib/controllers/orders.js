const { Router } = require('express');
const Order = require('../models/Order');
const OrderService = require('../services/OrderService');


module.exports = Router()
  .post('/', async (req, res, next) => {
    // OrderService
    //   .create(req.body)
    //   .then(order => res.send(order))
    //   .catch(next);
    try {
      const order = await OrderService.create(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    Order
    .find()
    .then(orders => res.send(orders))
    .catch(next)
  })
  
  .get('/:id', async (req, res, next) => {
      Order
      .findById(req.params.id)
      .then(orders => res.send(orders))
      .catch(next)
  })
  
  
  .put('/:id', async (req, res, next) => {

  })
  
  
  .delete('/:id', async (req, res, next) => {
    
  });
