import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import logo from '../../libs/logo.svg'


const AnimationChooser = ({ selection, onChange }) => {
    return (
        <div className="animation-chooser">
            <div className="animation-chooser__selector">
                <label>
                    <input type="radio" value="spin" checked={selection === 'spin'} onChange={onChange} />
                    Spin
                </label>
            </div>
            <div className="animation-chooser__selector">
                <label>
                    <input type="radio" value="scale" checked={selection === 'scale'} onChange={onChange} />
                    Scale
                </label>
            </div>
        </div>
    )
}


const LogoSpin = () => {
    const [animationSelection, setAnimationSelection] = React.useState('spin')
    const [rotationDegrees, setRotationDegrees] = React.useState(0)
    const [scale, setScale] = React.useState(1)

    const onWheel = (e) => {
        if (animationSelection === 'spin') {
            setRotationDegrees(rotationDegrees + e.deltaY)
        } else {
            const newScale = scale + e.deltaY / 100
            setScale(Math.max(Math.min(newScale, 2), 0))
        }
    }

    React.useEffect(() => {
        const cancelWheel = (e) => e.preventDefault()
        document.body.addEventListener('wheel', cancelWheel, { passive: false })
        return () => {
            document.body.removeEventListener('wheel', cancelWheel);
        }
    }, [])

    return (
        <div className="logo" onWheel={onWheel}>
            <motion.div
                className="logo-spinner"
                animate={{
                    rotate: rotationDegrees,
                    scale: scale,
                }}
                transition={{
                    stiffness: 520,
                    damping: 5,
                    type: 'spring',
                }}
            >
                <Image src={logo} alt="Stanford logo" width="500" height="500" />
            </motion.div>
            <AnimationChooser selection={animationSelection} onChange={(e) => setAnimationSelection(e.target.value)} />
        </div>
    )
}

export default LogoSpin;
