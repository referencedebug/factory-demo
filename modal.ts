import { ModalTypes } from './typing';
/**
 * 有一些公共的方法、属性、静态工具
 * Modal 父类
 * 
 * 美中状态内部属性加工，或者是每种状态的功能扩展；
 * Success Warning Error Modal 不同的雷 -> Modal
 * 
 * 有个工厂通过传入的状态自动实例化相应的类；
 * Modal Factory ->
 * 
 * 对每种状态加工
*/

class Modal {
    title: string;
    status: ModalTypes;
    dom: HTMLElement;
    constructor(dom, status){
        this.dom = dom;
        this.status = status;
    }
    get className(){
        let classStr = 'modal';
        switch (this.status) {
            case ModalTypes.SUCCESS:
                classStr += ' success';
                break;
            case ModalTypes.WARNING:
                classStr += ' warning';
                break;
            case ModalTypes.ERROR:
                classStr += ' error';
                break;
            default:
                break;
        }
        return classStr;
    }

}

class SuccessModal extends Modal {
    title: string;
    constructor(dom ,title){
        super(dom, ModalTypes.SUCCESS);
        this.title = `success: ` + title;
    }
    change(){
        this.dom.getElementsByTagName('header')[0].innerText = this.title;
        this.dom.className = this.className;
    }
}
class WarningModal extends Modal {
    title: string;
    constructor(dom, title){
        super(dom, ModalTypes.SUCCESS);
        this.title = `warning: ` + title;
    }
    change(){
        this.dom.getElementsByTagName('header')[0].innerText = this.title;
        this.dom.className = this.className;
    }
}
class ErrorModal extends Modal {
    constructor(dom, title){
        super(dom, ModalTypes.ERROR);
        this.title =  `error: ` + title;
    }
    change(){
        this.dom.getElementsByTagName('header')[0].innerText = this.title;
        this.dom.className = this.className;
    }
}

class ModalFactory {
    create(dom, title, status): SuccessModal | ErrorModal | ErrorModal{
        let modal = null;
        switch(status){
            case ModalTypes.SUCCESS:
                modal = new SuccessModal(dom ,title);
                break;
            case ModalTypes.WARNING:
                modal = new WarningModal(dom, title);
                break;
            case ModalTypes.ERROR:
                modal =  new ErrorModal(dom, title);
                break;
            default:
                break;
        }
        return modal;
    }
}

export default ModalFactory;