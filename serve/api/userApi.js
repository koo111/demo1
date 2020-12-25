//userApi.js
var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}
router.post('/search', (req,res) => {
  var sql = 'select * from img'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/lunbo', (req,res) => {
  var sql = 'select * from lunbo'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/lunbo1', (req,res) => {
  var sql = 'select * from lunbo1'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/tiejia', (req,res) => {
  var sql = 'select * from tiejia'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/tuijian', (req,res) => {
  var sql = 'select * from tuijian'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/goods', (req,res) => {
  var sql = 'select * from goods'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
}),
router.post('/goodsdetail', (req,res) => {
  var sql = 'select * from goodsdetail'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})
router.post('/addshoppingcar', (req,res) => {
  var sql = 'insert into shoppingcar values(?,?,?,?,?)'
  var params=req.body.data
  conn.query(sql,[params.url,params.title,params.price,params.dianpu,params.count], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res,result)
    }
  })
})
router.post('/selectcar', (req,res) => {
  var sql = 'select * from shoppingcar'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})
router.post('/register', (req,res) => {
  var sql = 'insert into login values(?,?,?,?)'
  var params=req.body.data
  conn.query(sql,[params.name,params.mail,params.password,params.repassword], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res,result)
    }
  })
})
router.post('/login', (req,res) => {
  var sql = 'select * from login'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res,result)
    }
  })
})
router.post('/delete', (req,res) => {
  var sql = 'delete from shoppingcar where url = ? '
  var params=req.body.data
  conn.query(sql,[params.url], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res,result)
    }
  })
})
module.exports = router