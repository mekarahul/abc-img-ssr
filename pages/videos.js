import React, { Suspense } from 'react'
import VideoPlayer from '../components/video-player'
export default function Videos(props) {


    return (
        <>
            <div className='videos'>
                <div className="grid">
                    <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
                </div>
            </div>

        </>
    )
}
