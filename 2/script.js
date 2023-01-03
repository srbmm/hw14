const Boxes = document.getElementById("boxes");
const Pages = document.getElementById("pages");
let Page = window.location.search.slice(1);
Page = Page.split("=");
console.log(Page)
if (Page[0] === "page"){
    $.ajax({
        url: `https://reqres.in/api/users?page=${Page[1]}`,
        type: 'GET',
        success: function(res) {
            render(res);
        }
    });
}else{
    $.ajax({
        url: `https://reqres.in/api/users?page=1`,
        type: 'GET',
        success: function(res) {
            render(res);
        }
    });
}

function render(allData) {
    const data = allData.data;
    Boxes.innerHTML = "";
    data.forEach(item => {
        const box = document.createElement("div");
        box.innerHTML = `<div class="img"><img src="${item.avatar}"></div>
    <div class="name-desc">
        <p class="name">${item.first_name}</p>
        <p class="family">${item.last_name}</p>
        <p class="email">${item.email}</p>
    </div>`;
        box.classList.add("box");
        Boxes.appendChild(box);
    });
    Pages.innerHTML = "";
    for(let i = 1; i <= allData.total_pages; i++) {
        const Link = document.createElement('a');
        if (i === allData.page){
            Link.classList.add("active");
        }
        Link.href = `index.html?page=${i}`;
        Link.textContent = `${i}`;
        Pages.appendChild(Link);
    }
}