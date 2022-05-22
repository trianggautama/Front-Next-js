import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import MainLayouts from "../layouts/MainLayouts";

const Home = () => {
    return (
        <div>
            <h1>home Page</h1>
            <Label className="font-bold">Email</Label>
            <Input />
            <Button className="mt-4">Login</Button>
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