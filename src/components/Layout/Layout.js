import { Header } from "../Header";
import { Category } from "../Category";

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <main>{children}</main>
            {/* <Category /> */}
        </>
    )
}

export default Layout;