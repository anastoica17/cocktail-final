import {Outlet} from 'react-router-dom';
import NavigationBar from "./NavigationBar";

function Root() {
    return <>
        <NavigationBar></NavigationBar>
        <Outlet/>
    </>
}

export default Root;