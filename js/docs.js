'use strict'


    let clickedItem;  

function init()
{
    let headers = document.getElementsByTagName('header')[0];
        if(CODE_VERSION!==DOC_VERSION) headers.style.color = 'red';
        headers.innerHTML = `[현재 문서 버전] v${DOC_VERSION}  <>  v${CODE_VERSION} [소스 버전]`;

    let rootUl = document.getElementById('root-ul');
    clickedItem = document.querySelector('.menu-active');
    rootUl.addEventListener('click', (e)=>{
        if(e.target.nodeName !== 'LI') return; 
        showPage(pageList[e.target.dataset.url]);
        clickHandler(e.target);
    },{capture:true});
};

function clickHandler(target)
{
    if(clickedItem)
    {
        clickedItem.classList.remove('menu-active');
    }
    target.classList.add('menu-active');
    clickedItem = target;
}

function showPage(value)
{
    console.log(value);
    let aIframe = document.getElementById('ifItem');
    aIframe.src = value;
};