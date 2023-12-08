/*let list = [
    { name: 'a', value: 5 },
    { name: 'b', value: 3 },
    { name: 'z', value: 1 },
    { name: 'y', value: 1 },
    { name: 'x', value: 1 }
  ]
let list2 =  [
    { name: 'a', value: 1 },
    { name: 'b', value: 1 },
    { name: 'c', value: 1 },
    { name: 'd', value: 1 },
    { name: 'e', value: 1 },
    { name: 'f', value: 1 },
    { name: 'g', value: 1 },
    { name: 'h', value: 1 }
  ]
let list3 =  [
    { name: 'n', value: 1 },
    { name: 'o', value: 3 },
    { name: 't', value: 1 },
    { name: 'a', value: 2 },
    { name: 'r', value: 2 },
    { name: 'e', value: 1 },
    { name: 'l', value: 1 },
    { name: 'm', value: 1 }
  ]
let list4 =  [
    { name: 't', value: 2 },
    { name: 'o', value: 3 },
    { name: 'a', value: 2 },
    { name: 'l', value: 3 },
    { name: 'y', value: 1 },
    { name: 'r', value: 2 },
    { name: 'e', value: 1 },
    { name: 'm', value: 1 }
  ]*/



function order(a,b) {

return a.name.charCodeAt()-b.name.charCodeAt()

}

/*function orderR(a,b) {

return b.value-a.value

}*/


export default order

/*list.sort(order)
list.sort(orderR)

console.log(list)

list2.sort(order)
list2.sort(orderR)

console.log(list2)

list3.sort(order)
list3.sort(orderR)

console.log(list3)

list4.sort(order)
list4.sort(order)

console.log(list4)*/
