import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const dockItems = [
    {
        id: 'base-pairs',
        content: 'base-pairs',
        color: 'green',
    },
    {
        id: 'histones',
        content: 'histones',
        color: 'red',
    },
    {
        id: 'dna',
        content: 'dna',
        color: 'orange',
    },
    {
        id: 'gel',
        content: 'gel',
        color: 'goldenrod',
    },
    {
        id: 'chromosome',
        content: 'chromosome',
        color: 'darkseagreen',
    },
    {
        id: 'cell',
        content: 'cell',
        color: 'purple',
    },
    {
        id: 'virus',
        content: 'virus',
        color: 'chocolate',
    },
    {
        id: 'mitochondrion',
        content: 'mitochondria',
        color: 'cornflowerblue',
    },
    {
        id: 'golgi',
        content: 'golgi',
        color: 'forestgreen',
    },
    {
        id: 'browser',
        content: 'browser',
        color: 'deeppink',
    },
]

const ITEM_WIDTH = 100
const ITEM_HEIGHT = 150

const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
};

const generateInitialScales = (items) => (
    Array(items.length).fill(1)
)

const Dock = () => {
    const [scales, setScales] = React.useState(() => generateInitialScales(dockItems))

    const itemClick = (itemIndex) => {
        console.log(itemIndex)
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
                            key={item.id}
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
                            <Image src={`/trays/${item.content}.svg`} layout="fill" alt="" />
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

export default Dock
