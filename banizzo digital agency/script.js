let price_number = document.querySelectorAll(".price-number");
let price_season = document.querySelectorAll(".price-season");
let month_btn = document.getElementsByClassName("month")[0];
let year_btn = document.getElementsByClassName("year")[0];

let bar_btn = document.querySelector(".bars-btn");
let cross_btn = document.getElementsByClassName("cross-btn")[0];
let ul_list_items = document.getElementById("responsive-navbar-list");


bar_btn.addEventListener("click", () => {
      console.log("hell");
      ul_list_items.style.width = "50%";
      ul_list_items.style.padding = "20px";
})
cross_btn.addEventListener("click", () => {
      console.log("work");
      ul_list_items.style.width = "0";
      ul_list_items.style.padding = "0px";
})


year_btn.addEventListener("click", () => {
      year_btn.classList.add("common-pricing-btn");
      month_btn.classList.remove("common-pricing-btn");
      price_number.forEach((element, index) => {
            price_number[0].innerHTML = "199";
            price_number[1].innerHTML = "299";
            price_number[2].innerHTML = "499";
      })
})


month_btn.addEventListener("click", () => {
      month_btn.classList.add("common-pricing-btn");
      year_btn.classList.remove("common-pricing-btn");
      price_number.forEach((element, index) => {
            price_number[0].innerHTML = "99";
            price_number[1].innerHTML = "199";
            price_number[2].innerHTML = "299";
      })
})
