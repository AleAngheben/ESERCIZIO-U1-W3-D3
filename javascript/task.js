window.onload = () => {
  const main = document.getElementsByTagName("main")[0];
  const section = document.getElementById("mySection");
  const subBtn = document.getElementById("subButton");

  const addProducts = function () {
    const productInput = document.getElementById("product");

    const myList = document.getElementById("myList");
    const myLi = document.createElement("li");
    myLi.className = "liFromUser";
    myLi.innerText = productInput.value;

    productInput.value = "";
    myList.appendChild(myLi);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.onclick = function (e) {
      const clickedDeleteBtn = e.target;
      clickedDeleteBtn.parentNode.remove();
    };
    myLi.appendChild(deleteBtn);
    myLi.onclick = () => {
      console.log(myLi);
      myLi.style.textDecoration = "line-through";
    };
  };
  subBtn.addEventListener("click", addProducts);
};
