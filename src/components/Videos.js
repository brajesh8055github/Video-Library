import React, { useState } from 'react'
import Vcontainer from './Vcontainer'
import video from '../video/video6.mp4'
let data = [
    {
        desc: "Catch Cute turtle..",
        title: "The wheels on the bus song|",
        video: require('../video/video4.mp4'),
    },
    {
        desc: "Sushh",
        title: "It is a long established fact that a reader",
        video: require('../video/video2.mp4'),
    },
    {
        desc: "Music Studio",
        title: "There are many variations of passages of Lorem",
        video: require('../video/video5.mp4'),
    },
    {
        desc: "T-Series",
        title: "Ve Kamleya |",
        video: require('../video/video2.mp4'),
    },
    {
        desc: "Sony LIV",
        title: "Master 11 vs Khiladi 11 |",
        video: require('../video/video4.mp4'),
    },
    {
        desc: "ML Records",
        title: "Paisa Hai Toh |",
        video: require('../video/video6.mp4'),
    },
    {
        desc: "Diecby",
        title: "Class (From Showtime)",
        video: require('../video/video4.mp4'),
    },
    {
        desc: "Music Studio",
        title: "There are many variations of passages of Lorem",
        video: require('../video/video5.mp4'),
    },
    {
        desc: "T-Series",
        title: "Ve Kamleya |",
        video: require('../video/video6.mp4'),
    },
]

const Videos = () => {


    const [noOfElement, setNoOfElement] = useState(3)
    const loadMore = () => {
        setNoOfElement(noOfElement + 2)
    }

    const slice = data.slice(0, noOfElement)
    console.log(noOfElement)


    return (
        <div>
            <>
                <div className='hero'>
                    <video src={video} controls muted  >
                    </video>
                </div>
                <h2 style={{ textAlign: "center", padding: "10px 0" }}>Popular <span>Videos</span></h2>
                <div className='content'>
                    {
                        slice.map((x) => {
                            return (
                                <Vcontainer desc={x.desc} title={x.title} file_type={x.file_type} video={x.video} img={x.img} link={x.link} />
                            )
                        })
                    }
                </div>
                <div style={{ textAlign: "center", margin: "10px" }}>
                    {noOfElement === data.length ? " " : <button className='btn-y' onClick={() => loadMore()}>Load more</button>}
                </div>
            </>
        </div>
    )
}

export default Videos