var parent = document.getElementById("parent");
for (let i = 0; i < 5; i++) {
    var child = document.createElement("div")
    child.className = "child";
    parent.appendChild(child);
    console.log(i)
}
