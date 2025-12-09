import { useState } from '@wordpress/element';

export default function Edit() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Counter Block (Editor)</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}
