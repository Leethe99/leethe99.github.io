let inv = document.getElementById("inv")

let invItemsInfo = [{
    id:"it1",
    name: "Manzana",
    price: 12,
    img:"img/img1.jpg" },
    {
    id:"it2",
    name: "fresa",
    price: 7,
    img:"img/img2.jpg"},
    {
    id:"it3",
    name: "Granada",
    price: 20,
    img:"img/img3.jpg"},
    {
    id:"it4",
    name: "Kiwi",
    price: 25,
    img:"img/img4.jpg"}];

let totalCheckout = [];

let genarateItems = ()=>{
    return (inv.innerHTML =invItemsInfo.map((i)=>{
      return `
            <div id = product-id-${i.id} class="item">
            <img src=${i.img} width="220px" alt="">
            <div class="details">
                <div class="qDetails">
                <h3>${i.name}</h3>
                <h2 id =q${i.id} class="quantity">100</h2>
                </div>
                <div class="priceAndQuantity">
                <p>$ ${i.price}</p>
                <div class="buttons">
                    <i onclick="decrease(${i.id})" class="bi bi-dash-lg"></i>
                    <div id = ${i.id} class="quantity">0</div>
                    <i onclick="increase(${i.id})" class="bi bi-plus-lg"></i>
                </div>
                </div>
            </div>
            </div>
        `;
    }).join(""));
};

genarateItems();

let increase = (id)=>{
    let selectedItem = id;
    let search = totalCheckout.find((i)=>i.id === selectedItem.id);
    if(search === undefined){
        totalCheckout.push({
            id: selectedItem.id,
            item: 1,
            
        })
    }
    else{
        search.item += 1;
    }
    update(selectedItem.id);
};
let decrease = (id)=>{
    let selectedItem = id;
    let search = totalCheckout.find((i)=>i.id === selectedItem.id);
    if(search.item === 0){
        return
    }
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
};
let update = (id)=>{
    let search = totalCheckout.find((i)=>i.id === id);
    let totalQuantity = 100 - search.item
    document.getElementById(id).innerHTML = search.item;
    document.getElementById("q"+id).innerHTML =totalQuantity;
    calculate()
};

let calculate =()=>{
    let navbarIcon = document.getElementById("cartAmount")
    navbarIcon.innerHTML = totalCheckout.map((i)=> i.item).reduce((i,j)=>i+j,0) 
};