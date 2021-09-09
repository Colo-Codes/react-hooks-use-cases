import { useState, useEffect } from "react";

const FetchBacon = props => {
    const [updatedBacon, setUpdatedBacon] = useState([]);
    const [childIsLoading, setChildIsLoading] = useState(false);

    // Destructure the props object
    const { onParagraphNumber, onGetBacon, onIsLoading } = props;

    useEffect(() => {
        const getBacon = async (paragraphNumber) => {
            setChildIsLoading(true);
            const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphNumber}&start-with-lorem=1`);
            const data = await response.json();
            setChildIsLoading(false);
            setUpdatedBacon(data);
        };
        getBacon(onParagraphNumber);
    }, [onParagraphNumber]); // Props 

    useEffect(() => {
        onGetBacon(updatedBacon); // Lifting the state up
    }, [updatedBacon, onGetBacon]); // Props and local state

    useEffect(() => {
        onIsLoading(childIsLoading); // Lifting the state up
    }, [childIsLoading, onIsLoading]); // Props and local state

    return (
        <p>Number of paragraphs: {onParagraphNumber}</p>
    );

};

const UseCaseUpdateFetch = () => {
    const [paragraphNumber, setParagraphNumber] = useState(1);
    const [bacon, setBacon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setParagraphNumber(e.target.paragraphs.value);
    };

    // This function will receive the 'loading' lifted state from the child component
    const getIsLoadingHandler = (childIsLoading) => {
        setIsLoading(childIsLoading);
    };

    // This function will receive the 'paragraphs' lifted state from the child component
    const getBaconHandler = (fetchedBacon) => {
        setBacon(fetchedBacon);
    };

    const baconParagraphText = bacon.map(p => <p key={Math.random()}>{p}</p>);

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on props change: updating fetched API data to get Bacon ipsum paragraphs</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="paragraphs" style={{ display: "block", marginBottom: "1rem" }}>How many paragraphs of "Bacon ipsum" do you want?</label>
                <select id="paragraphs" name="paragraphs">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="submit" value="Show me the bacon!" style={{ marginLeft: "1rem" }} /> {isLoading && <span>Getting paragraphs... 🐷</span>}
            </form>
            <FetchBacon onParagraphNumber={paragraphNumber} onGetBacon={getBaconHandler} onIsLoading={getIsLoadingHandler} />
            {baconParagraphText}
        </>
    );
};

export default UseCaseUpdateFetch;