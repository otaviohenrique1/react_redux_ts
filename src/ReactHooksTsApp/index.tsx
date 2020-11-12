import React, { useState, useEffect, useMemo, useCallback, useRef, useImperativeHandle, useReducer} from 'react';

interface User {
    name: string;
    login: string;
    avatar_url: string;
}

const ReactHooksTsApp: React.FC = () => {
    // ----------------useState exemplo----------------
    // const [user, setUser] = useState<User>({name: '', login: '', avatar_url: ''});
    const [users, setUsers] = useState<[User]>(); // Pode receber varios User

    // async function loadData() {
    //     const response = await fetch('https://api.github.com/users/diego3g');
    //     const data = await response.json();
    //     setUser(data);
    // }

    // ----------------useEffect exemplo----------------
    useEffect(() => {},[]);

    // ----------------useMemo exemplo----------------
    const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

    // ----------------useCallback exemplo----------------
    const greeting = useCallback(() => alert(`Hello ${names}`), [names]);

    // ----------------useRef exemplo----------------
    const inputRef = useRef<HTMLInputElement>(null);
    
    // inputRef.current?.focus();
    // ? -> opcional, pode ou nao estar nulo

    function focusOnInput() {
        inputRef.current!.focus();
        // ! -> nao pode estar nulo
    }

    return (
        <div>
            {/* <h1>Ola mundo</h1>
            <h1>React Hooks TS</h1> */}
            <form action="">
                <input type="text" ref={inputRef}/>
            </form>
        </div>
    );
}

export default ReactHooksTsApp;