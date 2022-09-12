import React from 'react'
import ReactPlayer from 'react-player';

export default function Videos(props) {


    return (
        <>
            <ReactPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" controls />
        </>
    )
}
