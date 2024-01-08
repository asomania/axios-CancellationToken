const sendRequest = () => {
    axios
      .get("https://hub.dummyapis.com/delay?seconds=30")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };
