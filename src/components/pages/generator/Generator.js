import React, {useEffect, useRef, useState} from 'react'
import './Generator.css'
// import Preloader from '../../preloader/Preloader';
import Result from '../../result/Result';
import Preloader from '../../preloader/Preloader';

function Generator() {
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    const [urlData, setUrlData] = useState({src: '', textTop: '', textBottom: ''})

    useEffect(() => {
        setLoading(true)
        fetch(urlFormation(urlData))
            .then(response => {
                console.log(response)
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
        setUrlData(
            {
                src: src.current.value,
                textTop: textTop.current.value,
                textBottom: textBottom.current.value,

            }
        )
    }

    function onResultLoad() {
        setLoading(false)
    }

    return (
        <div className='generator'>
            <div className="generator__wrapper">
                {loading ? <Preloader/> : <Result load={onResultLoad} src={urlFormation(urlData)}/>}
                <form className='generator__form' onSubmit={(e) => submitForm(e)}>
                    <input name='src' ref={src} className='generator__input' type="text"
                           placeholder='Введите url изображения'/>
                    <input name='textTop' ref={textTop} className='generator__input' type="text"
                           placeholder='Введите вверхний текст'/>
                    <input name='textBottom' ref={textBottom} className='generator__input' type="text"
                           placeholder='Введите нижний текст'/>
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