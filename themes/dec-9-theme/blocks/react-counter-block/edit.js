import { useState } from '@wordpress/element';

export default function Edit() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-block-editor">
            <div className="counter-wrapper">
                <h3 className="counter-title">React Counter Block</h3>
                <div className="counter-display">
                    <span className="counter-value">{count}</span>
                </div>
                <div className="counter-controls">
                    <button
                        className="counter-button decrement"
                        onClick={() => setCount(count - 1)}
                    >
                        - Decrease
                    </button>
                    <button
                        className="counter-button reset"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                    <button
                        className="counter-button increment"
                        onClick={() => setCount(count + 1)}
                    >
                        + Increase
                    </button>
                </div>
            </div>
        </div>
    );
}
