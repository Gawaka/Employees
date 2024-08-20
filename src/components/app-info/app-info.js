import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників компанії 'N'</h1>
            {employees === 0 ? (
                <h2>Ви всіх звільнили :(</h2>
            ) : (
                <>
                    <h2>Загальне число співробітників: {employees}</h2>
                    <h2>Премію отримають: {increased}</h2>
                </>
            )}
        </div>
    );
}

export default AppInfo;
