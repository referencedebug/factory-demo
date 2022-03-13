
import ModelFactory from './modal';

import { ModalTypes } from './typing.js';
;(() => {
    const modalDom = document.getElementsByClassName('modal')[0];

    const oBtnGroup = document.getElementsByClassName('btn-group')[0];

    const factory = new ModelFactory();

    const init = () => {
        bindEvents();

    };
    function bindEvents() {
        oBtnGroup.addEventListener('click', handleBtnClick, false);
    }
    function handleBtnClick (e) {
        const tar = e.target;
        const tagName = tar.tagName.toLowerCase();
        
        if(tagName === 'button'){
            const status = tar.dataset.status;
            changeStatus(status);
        }

    }
    function changeStatus(status: ModalTypes){
        const oModal = factory.create(modalDom, 'hello, world', status);
        oModal.change();
        
    }
    init();
})();