function zipList(list1, list2) {
  const final = [];
  let x = 0;
  for (let i = 0; i < list1.length; i++) {
    final[x] = list1[i];
    x++;
    final[x] = list2[i];
    x++;
  }
  return final;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}
