import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    // return <h1>Error Page</h1>
    const error = useRouteError();
    console.log(error);
    
    return(
        <>
        <h1>Oops! An error is occurred.</h1>
        {error && <p>{error.data}</p> }

        <NavLink to = "/">
        <button>Go Home</button>
        </NavLink>
        </>
    )
};