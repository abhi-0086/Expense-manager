import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {/*all our content goes here*/}
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
