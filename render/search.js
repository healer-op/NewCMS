const params = new URLSearchParams(document.location.search);
var name = params.get("term");
fetch(`https://mapi.cyberhub.repl.co/search/${name}`)
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    var link1 = data.rls
    for(var j=0;j<data.rls.length;j++){
        link1[j] = btoa(link1[j]);
    }

    const html = data.rimgs.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data.rimgs[i]}" style="background-image:url('${data.rimgs[i]}')">>
                                        <div class="ep">18 / 18</div>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Anime</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data.rls[i]}">${data.rts[i]}</a></h5>
                                    </div>
                                </div>
                            </div>`;
    }).join('');
    document.querySelector("#searchc").insertAdjacentHTML("afterbegin", html);
})