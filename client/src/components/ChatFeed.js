import React from 'react'

export default function ChatFeed({ userInfo }) {
    return (
        <div className='chatFeedContainer'>
            <div className='chatHeader'><h3>{userInfo.username}</h3></div>
            <div className='chatBody'>Chat Body</div>
            <div className='chatFooter'>
                <div className='chatFooterAbove'></div>
                <div className='chatFooterBelow'>
                    <input type='text' placeholder='Nhập tin nhắn...' />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
