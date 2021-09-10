import { useState, useMemo } from "react";

const UseCaseSort = props => {
    const [redditsList, setRedditsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log('🖼 This is a render');

    const submitHandler = async e => {
        e.preventDefault();

        setIsLoading(true);
        const result = await fetch(`https://www.reddit.com/r/${e.target.input.value}.json`);
        const myData = await result.json();
        setIsLoading(false);

        setRedditsList(myData.data.children);
    };

    const expensiveCalculation = (redditsList) => {
        return redditsList.map(post => post.data.title).sort();
    };

    const listDisplay = useMemo(() => {
        console.log('🔄 Change detected! Recalculating...');
        const sortedTitlesList = expensiveCalculation(redditsList);
        return sortedTitlesList.map(title => <li key={Math.random()}>{title}</li>);
    }, [redditsList]);

    return (
        <>
            <hr />
            <h2>useMemo use case</h2>
            <h3>Expensive function call: get a list of Reddits and sort them alphabetically</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="input">Enter a subreddit</label>
                <input type="text" id="input" name="input" placeholder="reactjs" style={{ margin: '0 1rem' }} />
                <input type="submit" value="Get posts!" />
            </form>
            {isLoading && <p>⏳ Loading data...</p>}
            {redditsList.length > 0 && !isLoading ?
                <>
                    <p>List of ReactJS subreddit posts alphabetically sorted:</p>
                    <ol>
                        {listDisplay}
                    </ol>
                    <p> <i>Take a look at the console ;)</i></p>
                </>
                : ''
            }
        </>
    );
};

export default UseCaseSort;