const accordionList = document.querySelector('.accordion__body');

accordionList.onclick = function(event) {
    let target = event.target;

    let liElem = target.closest('.accordion__item-title');
    
    if(!liElem) return;
    
    target.classList.toggle('accordion__item-open');

    let subList = accordionList.querySelectorAll('.accordion__sublist');

    /**
     * До того как добавить класс открытия 
     * подменю удаляем эти классы у всех элементов.
     */
    for(let i=0; i<subList.length; i++) {
        subList[i].classList.remove('accordion__sublist--open');
    }
    
    // Добавляет класс открытия подменю.
    target.nextElementSibling.classList.toggle('accordion__sublist--open');
}