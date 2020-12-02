import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

function Result(props) {
    return (
        <div>
            <img className='mem-img' src={props.src} onLoad={props.load} alt=""/>
        </div>
    )
}

Result.propTypes = {
    src: PropTypes.string,
    load: PropTypes.func
}

export default Result