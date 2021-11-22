const params = new URLSearchParams(document.location.search);
var name = params.get("view");
// console.log(name);
fetch(`https://mapi.cyberhub.repl.co/info/${name}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    document.getElementById("title").innerHTML = data.titles[0];
    var link = data.epls
    for(var i=0;i<data.epls.length;i++){
        link[i]= btoa(link[i]);
    }
    // console.log(link)
    const html = data.epls.map((img, i) =>{
        return `<a onclick="render('${data.epls[i]}');">Ep ${i+1-data.epls.length}</a>`;
    }).join('');
    document.querySelector("#epl").insertAdjacentHTML("afterbegin", html);
    render(data.epls[data.epls.length-1]);
            
})
function render(x){
    var x = x;
    fetch(`https://mapi.cyberhub.repl.co/video/${x}`)
        .then(response =>{
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();})
        .then(data => {
            // console.log(data);
            document.getElementById("player").src = data.links[0];
            
    })
}