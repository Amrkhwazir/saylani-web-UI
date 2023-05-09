let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let reviewBox = document.querySelector('.reviewBox');




let count = 0;
next.addEventListener('click', () => {
    count++;
    number.innerHTML = ++num;
    if(count > slideImg.length - 1){
        count = 0;
    }
    display();
        
    })
    

    prev.addEventListener('click', () => {
        count--;
       display();
    });
    
    function display(){
        reviewBox.forEach((slide, index) => {
            slide.style.transform = `translateX(-${count * 600}px)`;

        })
    }