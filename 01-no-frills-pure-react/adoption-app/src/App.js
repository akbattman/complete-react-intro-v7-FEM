const Pet = ()=> {
  return React.createElement('div', {},[
      React.createElement('h1', {}, 'Iris'),
      React.createElement('h2', {}, 'Tortoise'),
      React.createElement('h2', {}, 'Greek')
  ]);
};

const App = ()=> {
  return React.createElement('div', {}, [
      React.createElement('h1', {}, 'Adopt Me'),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
