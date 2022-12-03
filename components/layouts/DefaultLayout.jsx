import NavBar from './../navigation/NavBar'
function DefaultLayout({children, ...props}) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}

export default DefaultLayout;