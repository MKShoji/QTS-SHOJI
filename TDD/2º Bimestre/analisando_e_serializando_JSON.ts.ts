const text = `{
    "hello": "Esse é meu patrão hehe",
    "numbers": [7, 7, 7]
  }`;
  const data = JSON.parse(text);
  console.log(data.hello);
  console.log(data.numbers.length);
  const obj = {
    o: "Chad",
    numbers: [6, 6, 6],
  };
  const json = JSON.stringify(obj);
  console.log(json);

  const json2 = JSON.stringify(obj, null, 2);
  console.log(json2);