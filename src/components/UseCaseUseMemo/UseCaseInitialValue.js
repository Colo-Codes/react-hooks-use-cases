import { useMemo, useState } from "react";

const UseCaseInitialValue = props => {
    const [redditsList, setRedditsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log('🖼 This is a render');

    useMemo(async () => {
        console.log('🔄 Running calculation...');

        setIsLoading(true);
        const result = await fetch(`https://www.reddit.com/r/reactjs.json`);
        const myData = await result.json();
        setIsLoading(false);

        const topSorted = myData.data.children.filter(post => post.data.ups > 10).sort((a, b) => (a.data.ups < b.data.ups) ? 1 : -1).map(post => {
            return <li key={post.data.id}>🗳 Votes: {post.data.ups - post.data.downs} - 📝 <a href={`https://www.reddit.com/${post.data.permalink}`} target="_blank" rel="noreferrer">{post.data.title}</a></li>;
        });
        setRedditsList(topSorted);
    }, []); // Run at startup

    return (
        <>
            <hr />
            <h2>useMemo use case</h2>
            <h3>Expensive function call: create a complex initial value counting how many posts have more than 10 votes in a subreddit</h3>
            <p>Using "reactjs" as a subreddit. These are the posts with over 10 votes, sorted by vote counts in descending order:</p>
            {isLoading ? <p>⏳ Loading...</p> : redditsList}
            <p><i>Take a look at the console ;)</i></p>
        </>
    );
};

export default UseCaseInitialValue;