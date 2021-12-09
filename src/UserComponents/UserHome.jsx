import React from 'react'
import UserLeftBLock from './UserLeftBLock'
import UserRightBlock from './UserRightBlock'
import "./userBlock.css"

const UserHome = () => {
    return (
        <section id="UserBlock">
            <article>
                <UserLeftBLock />
                <UserRightBlock/>
            </article>
            
        </section>
    )
}

export default UserHome
