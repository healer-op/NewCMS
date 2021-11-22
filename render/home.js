fetch('https://mapi.cyberhub.repl.co/top')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    var link = data.links
    var img = data.imgs
    for(var j=0;j<data.titles.length;j++){
        link[j] = btoa(link[j]);
    }
    const html = data.titles.map((img, i) =>{
        return `
        <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${data.imgs[i]}" style="background-image: url('${data.imgs[i]}');">
                                        <div class="ep">18 / 18</div>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Top</li>
                                            <li>Anime</li>
                                        </ul>
                                        <h5><a href="watch.html?view=${data.links[i]}">${data.titles[i]}</a></h5>
                                    </div>
                                </div>
                            </div>`;
    }).join('');
    document.querySelector("#toprow").insertAdjacentHTML("afterbegin", html);
})

//////////////////////////////////////////////////////////////// Latest

fetch('https://mapi.cyberhub.repl.co')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    var link = data.links
    var img = data.imgs
    for(var j=0;j<data.titles.length;j++){
        link[j] = btoa(link[j]);
    }
    var max = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,27,18,19,20];
    const html = max.map((img, i) =>{
        return `
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="${data.imgs[i]}" style="background-image: url('${data.imgs[i]}');">
                                    <div class="ep">18 / 18</div>
                                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                </div>
                                <div class="product__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Anime</li>
                                    </ul>
                                    <h5><a href="watch.html?view=${data.links[i]}">${data.titles[i]}</a></h5>
                                </div>
                            </div>
                        </div>`;
    }).join('');
    document.querySelector("#latestrow").insertAdjacentHTML("afterbegin", html);
})