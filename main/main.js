'use strict';
var Order = [{barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, count: 0}, {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, count: 0}, {barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00, count: 0}];
var inputs = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000001',
      'ITEM000001',
      'ITEM000004'
    ];
var order = makeOrder(inputs);
var percountprice = PerCountPrice(order);
var allcountprice = AllCountPrice(percountprice);
printReceipt(inputs,order,percountprice,allcountprice);
//#1

function makeOrder(inputs) {
    
      for(var i = 0;i < inputs.length;i++) {
        for(var j = 0;j < Order.length;j++) {
            if(inputs[i] == Order[j].barcode) {
                Order[j].count++;
}
}
}
    return Order;
}

//  7min 55s

//#2    

function PerCountPrice(order) {
    var PerCountPrice = new Array();
    for(var i = 0;i < order.length;i++) {
        PerCountPrice.push(order[i].count * order[i].price);
}
    return PerCountPrice;
}

//  3min 57s

//#3

function AllCountPrice(percountprice) {
    var AllCountPrice = 0;
    for(var i = 0;i < percountprice.length;i++) {
        AllCountPrice += parseInt(percountprice[i]);
}
    return AllCountPrice;
}

//  4min 5s

//#4

function printReceipt(inputs,order,percountprice,allcountprice) {
  console.log("***<有钱赚商店>收据***\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n名称：%s,数量：%s%s，单价：%f（元），小计：%f（元）\n----------------------\n总计：%s（元）\n**********************`",order[0].name,order[0].count,order[0].unit,order[0].price,percountprice[0],order[1].name,order[1].count,order[1].unit,order[1].price,percountprice[1],order[2].name,order[2].count,order[2].unit,order[2].price,percountprice[2],allcountprice);
  
return 0;
}
//printReceipt(inputs,order,percountprice,allcountprice);
