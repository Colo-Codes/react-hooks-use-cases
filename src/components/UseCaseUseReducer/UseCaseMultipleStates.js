import { useReducer } from 'react';
import './UseCaseMultipleStates.css';

const randomFruits = ['apple', 'orange', 'mango', 'pineapple', 'pear'];

const initialState = {
    fruits: ['apple'], // or, we can have []
};

const reducer = (prevState, action) => {
    let { actionType, actionData } = action; // actionData is payload for action

    let fruitsNew = [];
    let { fruits } = prevState;
    switch (actionType) {
        case 'AddFruit':
            fruitsNew = [...fruits, actionData];
            break;
        case 'RemoveLastFruit':
            fruitsNew = [...fruits.slice(0, fruits.length - 1)];
            break;
        case 'ClearFruitBasket':
            break;
        default:
            throw new Error('Unkown type');
    }

    return {
        ...prevState,
        fruits: fruitsNew,
    };
};

const rF = () =>
    // get a random friut
    randomFruits[
        Math.trunc((Math.random() * randomFruits.length) % randomFruits.length)
    ];

const UseCaseMultipleStates = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAdd = () => dispatch({ actionType: 'AddFruit', actionData: rF() });
    const onRemove = () => dispatch({ actionType: 'RemoveLastFruit' });
    const onClear = () => dispatch({ actionType: 'ClearFruitBasket' });

    return (
        <div>
            <h2>
                useReducer() use case - Manage multiple states: modify an array
            </h2>
            <hr />

            <h3>Shopping cart</h3>

            <h4>Items:</h4>
            <button onClick={onAdd}>+ Add random fruit to cart</button>
            <button onClick={onRemove}>- Remove last from cart</button>
            <button onClick={onClear}>x Clear array</button>

            <h5>Fruits:</h5>
            <ul class="fruit-basket">
                {state.fruits.length
                    ? state.fruits //
                          .map((item, i) => (
                              <li class="fruit" key={i}>
                                  {item}
                              </li>
                          ))
                    : '(empty)'}
            </ul>
            <hr />
        </div>
    );
};

export default UseCaseMultipleStates;
