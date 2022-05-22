import MainLayouts from "../layouts/MainLayouts";

const Home = () => {
    return (
        <div>
            <h1>home Page</h1>
        </div>
    );
}

export default Home;

Home.getLayout = function getLayout(page){
    return (
        <MainLayouts>
            {page}
        </MainLayouts>
    )
}