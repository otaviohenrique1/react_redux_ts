import React, { useState } from 'react';

const ReactHooksTsApp: React.FC = () => {
    const [user, setUser] = useState();

    async function loadData() {
        const response = await fetch('https://api.github.com/users/diego3g');
        const data = await response.json();
        setUser(data);
    }

    return (
        <div>
            <h1>Ola mundo</h1>
            <h1>React Hooks TS</h1>
        </div>
    );
}

export default ReactHooksTsApp;