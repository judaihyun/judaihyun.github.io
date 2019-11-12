'use strict'


    let clickedItem;  

function init()
{
    let headers = document.getElementsByTagName('header')[0];
        headers.innerHTML = `[현재 문서 버전] v${CODE_VERSION}  <>  v${DOC_VERSION} [소스 버전]`;

    let rootUl = document.getElementById('root-ul');
    rootUl.addEventListener('click', (e)=>{
        showPage(pageList[e.target.dataset.url]);
        clickHandler(e.target);
    });
}

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
    let aIframe = document.getElementById('ifItem');
    aIframe.src = value;
};