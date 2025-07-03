import react, { useSyncExternalStore } from 'react';
import ReactDOM from 'react-dom/client';

//JS variable
const number = 5;
const elem = <span>React element</span>;

const HeadingComponent = () => {
    return (
        <div className="container">
           {/* Using curly braces to embed JavaScript expressions in JSX */}
           <h2>{number}</h2> 
           <TitleComponent />
        <h1 className="heading">Hello from React functional component! 📝</h1>
        </div>
    );
};
const TitleComponent = () => {
    return (
        <div>
            {elem}
<h2 className="title">This is a title component! 🚀</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <HeadingComponent />
    );
