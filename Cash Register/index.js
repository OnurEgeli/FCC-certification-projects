function checkCashRegister(price, cash, cid) {

    var units = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

// Önce verilen para birimlerinin adlarını ve değerlerini yazdık.


    var result = {status: null, change: []}; // istenilen sonuç..
    var change = cash - price;  
    var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
    }, {total: 0});

      // Eşit olduğu durum..
      if(register.total === change) {
        result.status = 'CLOSED';
        result.change = cid;
        return result;
      }
      // küçük olduğu durum..
      if(register.total < change) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
      }

      var change_arr = units.reduce(function(acc, curr) {
      var value = 0;
      while(register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
        change = Math.round(change * 100) / 100;
      }
      if(value > 0) {
        acc.push([ curr.name, value ]);
      }
        return acc;
      }, []);
    
      if(change_arr.length < 1 || change > 0) {
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
    }
      result.status = 'OPEN';
      result.change = change_arr;
      return result;
}