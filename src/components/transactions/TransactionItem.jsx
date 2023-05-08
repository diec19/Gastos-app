import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

const TransactionItem = ({ p }) => {
    const { deleteTrasaction } = useGlobalState();
    return (
        <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex
        justify-between items-center
        '>
            <p className='text-sm'>{p.description}</p>
            <div>
                <span>${p.amount}</span>
                <button onClick={() => deleteTrasaction(p.id)}
                >x</button>
            </div>
        </li>
    )
}

export default TransactionItem