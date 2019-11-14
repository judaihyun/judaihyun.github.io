'use strict'


    let clickedItem;  
    let timerId;

function versionIndicator(elem)
{
    if(CODE_VERSION===DOC_VERSION) clearInterval(timerId);
    let temp = elem.style.backgroundColor;
    elem.style.backgroundColor = temp == "white" ? "red" : "white";
} 

function init()
{
        let indicator = document.getElementById('versionIndicator');
        indicator.style.backgroundColor = 'white';
        if(CODE_VERSION!==DOC_VERSION) 
            timerId = setInterval(versionIndicator.bind(this,indicator), 1000);
        indicator.innerHTML = `[현재 문서 버전] v${DOC_VERSION}  <>  v${CODE_VERSION} [소스 버전]`;

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