import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Result.css'

function Result(props) {
    const [src, setSrc] = useState(props.src)
    const [file, setFile] = useState(null)
    function dragStartHandler(e) {
        e.preventDefault()
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
    }

    function onDropHandler(e) {
        e.preventDefault()

        let files = [...e.dataTransfer.files]
        setFile(files[0])
        files.forEach(file => {
            file.type.includes('image') ? previewFile(file) : null
        })
    }

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            setSrc(reader.result)
        }
    }
    return (

        <div className='result'>

            <div className={src == null ? 'drop-area' : 'drop-area active'}
                 onDragStart={e => dragStartHandler(e)}
                 onDragLeave={e => dragLeaveHandler(e)}
                 onDragOver={e => dragStartHandler(e)}
                 onDrop={e => onDropHandler(e)}
            />
            <img className='mem-img' src={src} onLoad={file !== null ? props.load(file) : props.load} alt=""/>
        </div>
    )
}

Result.propTypes = {
    src: PropTypes.string,
    load: PropTypes.func
}

export default Result