import React from 'react'


const dockItems = [
    {
        content: "0",
        color: "green",
    },
    {
        content: "1",
        color: "red",
    },
    {
        content: "2",
        color: "orange",
    },
    {
        content: "3",
        color: "black",
    },
    {
        content: "4",
        color: "darkseagreen",
    },
    {
        content: "5",
        color: "purple",
    },
    {
        content: "6",
        color: "chocolate",
    },
    {
        content: "7",
        color: "cornflowerblue",
    },
    {
        content: "8",
        color: "forestgreen",
    },
    {
        content: "9",
        color: "deeppink",
    },
]

const ITEM_WIDTH = 100
const ITEM_HEIGHT = 150

const DockItem = ({ item, itemClick, scale }) => {
    return (
        <button
            type="button"
            className="dock-item"
            style={{
                backgroundColor: item.color,
                width: ITEM_WIDTH * scale,
                height: ITEM_HEIGHT * scale,
            }}
            onClick={() => itemClick(item.content)}
        >
            {item.content}
        </button>
    )
}

const generateInitialScales = (items) => {
    const scales = {}
    items.forEach(item => {
        scales[item.content] = 1
    })
    return scales
}

const Dock = () => {
    const [scales, setScales] = React.useState(generateInitialScales(dockItems))

    const itemClick = (itemContent) => {
        const newScales = generateInitialScales(dockItems)
        newScales[itemContent] = 1.5
        setScales(newScales)
    }

    return (
        <div className="dock-background">
            <div className="dock-container">
                {dockItems.map(item => (
                    <DockItem key={item.content} item={item} itemClick={itemClick} scale={scales[item.content]} />
                ))}
            </div>
        </div>
    )
}

export default Dock
