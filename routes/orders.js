const express = require('express');
const { getOrders, addOrder,getAllOrders,updateOrderStatus} = require('../controllers/OrdersEdit');
const Orders = express.Router();

Orders.get("/orders",getOrders)
Orders.get("/allorders",getAllOrders)
Orders.post("/addorder",addOrder)
Orders.put("/admin/status/:id",updateOrderStatus)

module.exports=Orders;