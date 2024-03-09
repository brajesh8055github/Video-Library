import React from 'react'


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
        video: require('../video/video4.mp4'),
    },
    {
        desc: "Sony LIV",
        title: "Master 11 vs Khiladi 11 |",
        video: require('../video/video2.mp4'),
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

const AllVideos = () => {
    return (
        <div>
            <div className='container2'>
                <h1 style={{ textAlign: 'center', padding: "10px 0" }}>All <span>Videos</span></h1>
                <div className='content'>
                    {
                        data.map((x) => {
                            return (
                                <div className='content2'>
                                    <video src={x.video} controls muted >
                                    </video>
                                    <h6 className='m-0'>{x.title}</h6>
                                    <small style={{ color: "grey" }}>{x.desc}</small>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllVideos