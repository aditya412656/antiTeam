import React, {useState} from 'react';

const ModalDownload = ({
                           icon,
                           titleModal,
                           textModal,
                           linkDW,
                           password,
                           downloadQ
                       }) => {
    let [isCopy, setIsCopy] = useState(false);
    let [hrefLink, setHrefLink] = useState(false);

    return (
        <>
            <div className="modal-title-grid">
                {icon}
                <div className="">
                    <h3 className="modal-title">
                        {titleModal}
                    </h3>
                    <p className="modal-title-min">
                        {downloadQ}k загрузок
                    </p>
                </div>
            </div>
            <p className='text-modal'>
                {textModal}
            </p>
            <div className="archive-code">
                <div className="archive-code__number">{password[0]}</div>
                <div className="archive-code__number">{password[1]}</div>
                <div className="archive-code__number">{password[2]}</div>
                <div className="archive-code__number">{password[3]}</div>
                <button className="archive-code-copy" onClick={() => {
                   setTimeout(() => {
                       window.navigator.clipboard.writeText(password);
                       setIsCopy(true)
                   }, 700)
                }}>
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 8.5V0.5H6.5M2.5 2.5V9.5H7.5V2.5H2.5Z" stroke="black" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    {isCopy ? <span className="archive-code-copy--green">Код скопирован &#9989;</span> : ''}
                </button>
                <span className='archive-code-desc'>
                    Пароль к архиву
                </span>
            </div>
                <button className="modal-dw-link" onClick={(event) => {
                        event.preventDefault()
                        setHrefLink(true)
                        setTimeout(() => {
                            document.querySelector('.hidden-href-link').click()
                        }, 1000)
                }}>
                    Скачать
                </button>
            {hrefLink ? <a className="hidden-href-link" href={linkDW} download>
            </a> : ''}
        </>
    );
}

export default ModalDownload;