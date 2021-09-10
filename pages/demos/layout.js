import React from 'react'
import _ from 'underscore'
import { AnimatePresence, motion, useAnimation, useSpring } from 'framer-motion'

const list = [
    {
        name: 'DNA Binding',
        count: 7769,
    },
    {
        name: 'Transcription',
        count: 2648,
    },
    {
        name: 'DNA accessibility',
        count: 1589,
    },
    {
        name: 'DNA methylation',
        count: 556,
    },
    {
        name: 'RNA binding',
        count: 359,
    },
    {
        name: '3D chromatin structure',
        count: 176,
    },
    {
        name: 'Replication timing',
        count: 163,
    },
    {
        name: 'Genotyping',
        count: 127,
    },
    {
        name: 'DNA sequencing',
        count: 29,
    },
    {
        name: 'Single cell',
        count: 25,
    },
    {
        name: 'Proteomics',
        count: 14,
    },
]

const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
};

export const ListSorter = () => {
    const [sortingKey, setSortingKey] = React.useState('name')
    const [blur, setBlur] = React.useState(20)

    const handleChangeSorting = () => {
        setSortingKey(sortingKey === 'name' ? 'count' : 'name')
    }

    const onChangeBlur = (e) => {
        setBlur(e.target.value)
    }

    return (
        <div className="list-background">
            <div className="list-background-decoration" />
            <motion.div
                className="list-display"
                animate={{ backdropFilter: `blur(${blur}px)` }}
            >
                <motion.button
                    className="change-sorting"
                    onClick={handleChangeSorting}
                    whileHover={{ scale: 1.2, boxShadow: '0px 0px 10px rgba(255, 255, 255, 1.0)' }}
                >
                    {sortingKey === 'name' ? 'Sort by Count' : 'Sort by Name'}
                </motion.button>

                <div className="list-display__content">
                    {_(list).sortBy(sortingKey).map(item => {
                        return (
                            <motion.div
                                key={item.name}
                                transition={spring}
                                className="list-item"
                            >
                                <div className="list-item__name">{item.name}</div>
                                <div className="list-item__count">{item.count}</div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="blur-control">
                    <input className="blur-control" type="range" id="blur" name="blur" value={blur} onChange={onChangeBlur} min="0" max="20" />
                </div>
            </motion.div>
        </div >
    )
}

export default ListSorter
