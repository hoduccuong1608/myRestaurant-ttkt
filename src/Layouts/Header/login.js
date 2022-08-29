

export default function ToLogin(props) {
    return (
        <button className="origin-top-right absolute right-0 w-16 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1"
        onClick={props.clickSign}>
            Login
        </button>
    )
}