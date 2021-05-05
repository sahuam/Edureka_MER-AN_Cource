var consumeEach = (arrayToConsume, consumeFunction) => {
  for (i = 0; i < arrayToConsume.length; i++) {
    consumeFunction(arrayToConsume[i]);
  }
};

var print = (item) => {
    console.log(item)
}

var arrayList = [1,2,3,4,5,6];

consumeEach(arrayList, print)