import React from 'react'

export const TransactionList = () => {
  return (
    <>
    <h3>History</h3>
    <ul id='List' className='list'>
        <li className='minus'>
            cash <span>-$400</span><button className='delete-btn'>x</button>
            </li>
    </ul>
    </>
  )
}
