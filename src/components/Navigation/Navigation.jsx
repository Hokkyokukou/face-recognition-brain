const Navigation = ({ onRouteChange, isSignedIn }) => {
    //pure function

    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signout')}
                    className="f3 link dim black underline pa3 pointer"
                >
                    Sign out
                </p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signin')}
                    className="f3 link dim black underline pa3 pointer"
                >
                    Sign In
                </p>
                <p
                    onClick={() => onRouteChange('register')}
                    className="f3 link dim black underline pa3 pointer"
                >
                    Register
                </p>
            </nav>
        );
    }
};

export default Navigation;
