import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }
    });

    if (isError) {
        return <h1>Something went wrong</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>This is the Home page </h1>
            <h2>Random Cat Fact</h2>
            <p>{catData?.fact}</p>
            <button onClick={() => refetch()}>Refetch</button>
        </div>
    );
};