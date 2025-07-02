  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = React.createElement(
        'h1',
        { className: 'greeting',
            id: 'greeting-id'
         },
        'Hello world from ReactJS!'
    );
    root.render(element);