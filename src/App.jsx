import './App.css';
import useInput from "./hooks/useInput";
import useFetch from "./hooks/useFetch";
import useTheme from "./hooks/useTheme";

function App() {
    const name = useInput('Hello world', true)
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
    const { theme, toggleTheme } = useTheme()

    if (error) {
        console.log("error", error)
        return null;
    }

    return (
        <div className={`app ${theme}`}>
            <h1>Custom Hooks </h1>
            <p><a target="_blank" href="https://github.com/Lyumih/demo-custom-react-hooks">github repo</a></p>
            <div>
                <button className="button" onClick={toggleTheme}>Переключить тему</button>
            </div>
            <div>
                <form>
                    <label>
                        <input className="input" placeholder="Введите имя" {...name}/>
                        {name.error && <div style={{color: 'red'}}>{name.error}</div> }
                    </label>
                </form>
            </div>
            <div>
                <h3>Пользователи</h3>
                {loading && <div>Загружаются ...</div>}
                <ul>
                    {data?.map(user => (
                        <li className="list-item" key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
