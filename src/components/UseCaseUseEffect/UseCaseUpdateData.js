import { useState, useEffect } from "react";

const BaconParagraphs = props => {
    const [baconParagraphText, setBaconParagraphText] = useState([]);

    useEffect(() => {
        setBaconParagraphText(props.chopBacon.map(piece => <p key={Math.random()}>{piece}</p>));
    }, [props.chopBacon]); // Props

    return (
        <>
            <p>Number of paragraphs: {baconParagraphText.length}</p>
            {baconParagraphText}
        </>
    );
};

const UseCaseUpdateFetch = () => {
    const [bacon, setBacon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async e => {
        e.preventDefault();

        setIsLoading(true);
        const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`);
        const data = await response.json();
        setIsLoading(false);
        setBacon(data);
    };

    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on props change: update paragraph list on fetched API data update</h3>
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
            <BaconParagraphs chopBacon={bacon} />
        </>
    );
};

export default UseCaseUpdateFetch;