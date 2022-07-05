import style from "./App.module.css"
import List from "./list/List";

function App() {


    return (
        <div className={style.app}>
            <div className={style.list}>
                <List/>
            </div>
        </div>
    );
}

export default App;
