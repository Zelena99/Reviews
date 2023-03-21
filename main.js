function arrow() {
    let arrowScroll = document.querySelector('#scroll-top');
    if (this.scrollY >= 100) {
        arrowScroll.classList.add('show-scroll');
    } else {
        arrowScroll.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll',arrow)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data =>{
    let filter= data.filter(el => el.id <= 60);
    console.log(filter);
    let columnCards= document.querySelector('#columnCards');
    filter.forEach(el => {
        let div= document.createElement('div');
        div.classList.add('col-12', 'col-md-3', 'mb-3','d-flex', 'justify-content-center');
        div.innerHTML = `
        <div class="card animada  bg__cards" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.body}</p>
            </div>
        </div>
        `
    
        columnCards.appendChild(div);
    });

    let animated = document.querySelectorAll('.animada');
    function showCards(){
        let scrollCardsTop = document.documentElement.scrollTop;
        for (let i = 0; i < animated.length; i++) {
            let height = animated[i].offsetTop;
            if (height - 700 < scrollCardsTop) { 
                animated[i].style.opacity = '1';

            
            }
        }
    }
    
    window.addEventListener('scroll',showCards);
})