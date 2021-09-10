import React from 'react'
import { motion } from 'framer-motion'


const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2,
        },
    },
}

const Track = ({ pathProgress, css }) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={`laguna-seca-path${css ? ` ${css}` : ''}`} x="0px" y="0px" viewBox="0 0 990.9 983.8">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: pathProgress }}
                d="M382.5,960.1c11.9,2.4,23.9,2.5,36.1,2.3c60.6-0.7,122.3-0.3,182.2-6.5c19.9-2,39.2-8.7,57.5-17c54.4-24.9,105.1-51.2,157.8-79.5
                    c6.3-3.4,13.9-9.6,17.3-15.5c3.6-6.2,5.9-15.2,4.7-22.3c-1.5-9-4.2-18.4-10-25.8c-5.5-7.1-13.9-14.8-22-17.6c-8.7-3-22.3-2-30.2,2.6
                    c-17.5,10.2-28.8,29.3-46.1,41.9c-21.1,15.5-44.1,29.6-68.1,39.9c-29.6,12.7-61.5,19.9-92.7,26.1c-10.3,2-22.7-0.7-32-5
                    c-8.7-4-19.2-16.7-21.7-26.1c-20.2-75-30.8-146.4-46.1-223.8c-2.5-12.7,0.2-27.1,4.7-38.7c3.3-8.7,10.7-17.1,18.8-22.3
                    c50.2-32.3,98.1-59.8,151.7-86.2c19.2-9.5,50.4-17.6,71.6-21.4c74.6-13.4,142.1-22.4,217.7-34.9c14.6-2.4,28.4-14.6,37.8-25.2
                    c6.2-7,9.2-17.7,10.3-27.3c0.9-8.8,2-26.6-5.6-39.3C908.3,225.4,841.5,131,766.7,23.2c-3.9-5.6-16-11.8-22.9-12.3
                    c-27.9-2.2-56.3-2.3-84.5-2.3c-14.1,0-35.8,0.2-49,4.7c-52.1,17.8-95.6,41-147,62.2c-30,12.4-61.3,22.2-90.3,36.4
                    c-22.2,10.8-41.8,28.8-64.8,36.7c-29.8,10.2-59.3,9.1-89.5,15c-5.5,1.1-14.1,6.5-14.1,16.7c0,9.2,6.8,18.3,7,28.2
                    c0.2,9.3-5,24.5-12.9,30.5c-17.8,13.6-33.2,22.3-53.4,32c-19,9.1-40.1,12.1-58.7,21.7c-16.2,8.4-31.2,21.1-41.9,35.2
                    c-11.2,14.8-20,33-21.1,51.6c-0.7,12.5,5.1,30.3,12.9,40.5c43,56.3,91,103.7,137,159c8.4,10,17.2,23.4,17.6,35.2
                    c0.4,11.2-8,24-15.3,34C123.8,720.1,68.5,783,16.1,853.6c-9.1,12.3-9.8,23.2-3.2,30.8c5.8,6.7,29.2,5.4,43.7,8.5
                    C172.3,917.7,264.2,936.7,382.5,960.1L382.5,960.1z"
            />
        </svg>
    )
}

const TrackPage = () => {
    const [pathProgress, setPathProgress] = React.useState(0);

    const onChangePathProgress = (e) => {
        setPathProgress(e.target.value)
    }

    console.log(pathProgress);
    return (
        <div className="track-background">
            <div className="track-container">
                <div className="track-content">
                    <div className="track-content__ghost">
                        <Track pathProgress={1} css="laguna-seca-path--ghost" />
                    </div>
                    <Track pathProgress={pathProgress / 100} />
                </div>
                <input className="path-control" type="range" id="path" name="path" value={pathProgress} onChange={onChangePathProgress} min="0" max="100" />
            </div>
        </div>
    )
}

export default TrackPage
