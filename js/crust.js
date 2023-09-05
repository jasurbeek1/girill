const dataMenu = JSON.parse(localStorage.getItem(`korzinka`)) || [
    {
        id: `1`,
        imgUrl: "../assets/images/menu-1.png",
        name: "Greek Salad",
        price: 25.50,
        title:"Seasonal",
        description:"Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese."
    },
    {
        id: `2`,
        imgUrl: "../assets/images/menu-2.png",
        name: "Lasagne",
        price: 40.00,
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    },
    {
        id: `3`,
        imgUrl: "../assets/images/menu-3.png",
        name: "Butternut Pumpkin",
        price: 10.00,
        description:" Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
    },
    {
        id: `4`,
        imgUrl: "../assets/images/menu-4.png",
        name: "Tokusen Wagyu",
        title:"New",
        price: 39.00,
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    },
    {
        id: `5`,
        imgUrl: "../assets/images/menu-5.png",
        name: "Olivas Rellenas",
        price: 39.00,
        description:"Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper. "
    },
    {
        id:"6",
        imgUrl: "../assets/images/menu-6.png",
        name:"Opu Fish",
        price:"49.00",
        description:"Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
    }
]


localStorage.setItem(`korzinka`, JSON.stringify(dataMenu))


function korzinkaPage () {
    location.href = "korzinka.html"

    const wrapperCrust = document.querySelector(`#crust`)
    wrapperCrust.innerHTML = ""
    dataMenu.map(prod => {
        crustCard = `        
            <li>
                <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="${prod.imgUrl}" width="100" height="100" loading="lazy" alt="Greek Salad"
                    class="img-cover">
                </figure>

            <div>

                <div class="title-wrapper">
                  <h3 class="title-3">
                    <a href="#" class="card-title">${prod.name}</a>
                  </    h3>

                  <span class="badge label-1">${prod.title}</span>

                 <span class="span title-2">$25.50</span>
                </div>

                <p class="card-text label-1">
                    ${prod.description}
                </p>

          </div>
        </div>

      </li>
        `

        wrapperCrust.innerHTML += crustCard
    })
}