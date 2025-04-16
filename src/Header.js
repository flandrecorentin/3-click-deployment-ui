import { useState } from 'react';

function Header() {
    const [value, setValue] = useState(12);

    return (
        <>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => setValue(value + 1)}>
                Increment value
            </button>
            <p>Hello, the value is {value}</p>
        </>
    );
}

export default Header;