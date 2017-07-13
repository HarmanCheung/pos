'use strict';

var good = [{
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50,
        count: 0
      },
      {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 0
      },
      {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00,
        count: 0
      }
    ];
var promotion =[
      {
        type: 'BUY_THREE_GET_ONE_FREE',
        barcodes: [
          'ITEM000000',
          'ITEM000001'
    
        ]
      }
   ]
var tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

//#1

function loadItem(tags) {
    var item = good;
    

    for(var i = 0;i < tags.length;i++) {
        for(var j =0;j < item.length;j++) {
            if(tags[i].slice(0,8) == item[j].barcode) {
                if(tags[i].length > 10) {
                    item[j].count += parseFloat(tags[i].slice(10));
}
                item[j].count++;
}
}
}
    return item;

//  40min

//#2

function loadPromotion() {
    var promotionMessage = promotion;
    return promotionMessage;
}

//  4min

//#3

function judgePromotion(item) {
      var x;
      var itemAfterPromotion = item;
      for(var i = 0;i < promotionMessage.length;i++) {
        for(var j = 0;j < itemAfterPromotion.length;j++) {
            for(x in promotionMessage[i].barcode) {
                if(promotionMessage[i].barcode[x] == itemAfterPromotion[j].barcode) {
                    itemAfterPromotion[j].promotionType = promotionMessage[i].type;
}
            itemAfterPromotion[j].promotionType = 0;
}
}
}
      return itemAfterPromotion;
}

// 20min

//#4

function calculatePercount(itemAfterPromotion) {
    var percount = new Array();
    for(var i in itemAfterPromotion) {
    
        if(itemAfterPromotion[i].promotionType = 0) {
            percount.push(itemAfterPromotion[i].count * itemAfterPromotion.price);
}
        if(itemAfterPromotion[i].promotionType == 'BUY_THREE_GET_ONE_FREE') {
            itemAfterPromotion[i].count -= parseInt(itemAfterPromotion[i].count / 3);
            percount.push(itemAfterPromotion[i].count * itemAfterPromotion.price);
}        
}
    return percount;
}

//28min

//#5

function calculateAllCount(percount) {
    var allCount;
    for(var i in percount) {
        allCount += percount[i];
}
    return allCount;
}

//3min

//#6

function calculateSaveMoney(allCount) {
    var saveMoney;
    var originalAllCount;
    for(var i in itemAfterPromotion) {
        originalAllCount += itemAfterPromotion[i].count * itemAfterPromotion[i].price;
}
    saveMoney = originalAllcount - allCount;
    return saveMoney;
}

//6min 37s

//#7

function printReceipt(tags) {
    
    console.log('***<没钱赚商店>收据***');
    for(var i in item) {
        console.log('名称：' + ${item[i].name} + '，数量：' + ${item[i].count} + ${item[i].unit} + '(元)，小计：' + ${percount[i]} + '(元)');
}
    console.log('----------------------');
    console.log('总计：' + ${allcount} + '(元)');
    console.log('节省：' + ${saveMoney} + '(元)');
    console.log('**********************');   
}
//printReceipt(tags);
// 10min
    
        
        
    



