const productHandler = (event) => {
  event.preventDefault();

  const name = event.target.productName.value;
  const obj = {
    productName: name,
  };

  axios.post("http://localhost:4000/api/products", obj).then((result) => {
    console.log(`value returned from post request ${result.data.value}`);
  });
};
