let POPUP_LMS

export const redirigirLMS = async () => {

    let urlLMS = "https://www.example.com/";

    const opciones = 'width=1000,height=1000';

    const popUP = window.open(urlLMS, null, opciones);

    POPUP_LMS = popUP

    if (POPUP_LMS === undefined || POPUP_LMS === null || POPUP_LMS === '') {
        return null
    }

    POPUP_LMS.onload = () => {
        popUP.onbeforeunload = () => {
          popUP.postMessage('POPUP_CLOSED', '*')
        }
    }

    return popUP
}