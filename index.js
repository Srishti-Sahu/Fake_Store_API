import axios from "axios";

const productsDiv = document.querySelector("#productsDiv");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    for (let i = 0; i < response.data.length; i++) {
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const h4 = document.createElement("h4");
      const img = document.createElement("img");
      h2.innerText = response.data[i].title;
      h4.innerText = `$ ${response.data[i].price}`;
      img.setAttribute("src", response.data[i].image);
      div.appendChild(h2);
      div.appendChild(h4);
      div.appendChild(img);
      div.setAttribute("class", "product");
      productsDiv.appendChild(div);
    }
  } catch (e) {
    console.log(e);
  }
});
