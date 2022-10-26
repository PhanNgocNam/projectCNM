import defaultAvartar from '../assets/robot.gif'

export default function SideBar({ users, getUserInfoFromSidebar }) {

    return (
        <div className='sideBarContainer'>
            <ul>
                {users.map((user) => {
                    return (
                        <li onClick={() => getUserInfoFromSidebar(user)} key={user._id}>
                            <img src={defaultAvartar} alt='i dont know'/>
                            <div className='chatInfo'>
                                <h4>{user.username}</h4>
                                <p>{user.email}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
