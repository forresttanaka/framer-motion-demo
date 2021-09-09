import React from 'react'
import { motion } from 'framer-motion'

const dockItems = [
    {
        content: '0',
        color: 'green',
    },
    {
        content: '1',
        color: 'red',
    },
    {
        content: '2',
        color: 'orange',
    },
    {
        content: '3',
        color: 'goldenrod',
    },
    {
        content: '4',
        color: 'darkseagreen',
    },
    {
        content: '5',
        color: 'purple',
    },
    {
        content: '6',
        color: 'chocolate',
    },
    {
        content: '7',
        color: 'cornflowerblue',
    },
    {
        content: '8',
        color: 'forestgreen',
    },
    {
        content: '9',
        color: 'deeppink',
    },
]

const ITEM_WIDTH = 100
const ITEM_HEIGHT = 150

const spring = {
    type: 'tween',
    damping: 10,
    stiffness: 100,
    duration: 0.3,
};

const generateInitialScales = (items) => (
    Array(items.length).fill(1)
)

const Dock = () => {
    const [scales, setScales] = React.useState(() => generateInitialScales(dockItems))

    const itemClick = (itemIndex) => {
        const newScales = generateInitialScales(dockItems)
        if (itemIndex > 0) {
            newScales[itemIndex - 1] = 1.3
        }
        newScales[itemIndex] = 1.8
        if (itemIndex < dockItems.length - 1) {
            newScales[itemIndex + 1] = 1.3
        }
        setScales(newScales)
    }

    return (
        <div className="dock-background">
            <div className="dock-container">
                {dockItems.map((item, i) => {
                    const scale = scales[i]
                    return (
                        <motion.button
                            key={item.content}
                            transition={spring}
                            type="button"
                            className="dock-item"
                            animate={{
                                width: ITEM_WIDTH * scale,
                                height: ITEM_HEIGHT * scale,
                            }}
                            style={{
                                backgroundColor: item.color,
                            }}
                            onClick={() => itemClick(i)}
                        >
                            {item.content}
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default Dock
