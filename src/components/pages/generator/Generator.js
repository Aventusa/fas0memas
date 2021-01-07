import React, {useEffect, useRef, useState} from 'react'
import './Generator.css'
import Result from '../../result/Result';
import Preloader from '../../preloader/Preloader';

function Generator() {
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    const [fileData, setFileData] = useState(null)
    const [urlData, setUrlData] = useState({src: '', textTop: '', textBottom: ''})
    useEffect(() => {
        setLoading(true)
        fetch(urlFormation(urlData))
            .then(response => {
                response ? setLoading(false) : null
            })
            .catch(error => console.log(error))
    }, [urlData])

    // refs
    const src = useRef(),
        textTop = useRef(),
        textBottom = useRef()

    function urlFormation(data) {
        return `https://api.memegen.link/images/custom/${data.textTop}/${data.textBottom}.png?background=${data.src}`
    }

    function submitForm(e) {
        e.preventDefault()

        if (fileData !== null) {
            let formData = new FormData()
            formData.append('file', fileData)
            fetch(`${window.location.href}/create.php`, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    console.log('RESPONSE =>>', response)
                    setUrlData(
                        {
                            src: window.location.href + `img/${fileData.name}`,
                            textTop: textTop.current.value,
                            textBottom: textBottom.current.value,
                        }
                    )
                })
                .catch(error => console.log('Ошибка! ---', error))
            return
        }

        setUrlData(
            {
                src: src.current.value,
                textTop: textTop.current.value,
                textBottom: textBottom.current.value,
            }
        )
    }

    function onResultLoad(file) {
        setFileData(file)
        setLoading(false)
    }


    return (
        <div className='generator'>
            <div className="generator__wrapper">
                {
                    loading
                        ? <Preloader/>
                        : <Result
                            load={onResultLoad}
                            src={urlData.src !== '' ? urlFormation(urlData) : null}
                        />
                }

                <form className='generator__form' onSubmit={(e) => submitForm(e)}>
                    <div className="input__wrapper">
                        <input name='src' ref={src} className='generator__input' type="text"
                               placeholder='Введите url изображения'/>
                    </div>
                    <div className="input__wrapper">
                        <input name='textTop' ref={textTop} className='generator__input' type="text"
                               placeholder='Введите вверхний текст'/>
                    </div>
                    <div className="input__wrapper">
                        <input name='textBottom' ref={textBottom} className='generator__input' type="text"
                               placeholder='Введите нижний текст'/>
                    </div>
                    <button
                        type='submit'
                        className='generator__btn'
                    >
                        Generate
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Generator