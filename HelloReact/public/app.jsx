//Creating a react component
//React createClass takes one and only argument an options object
//Here we decide the behaviour of our component
//The only thing that is required of every react component is a render method
//All th render method excepts some jsx code that we can render to the browser
//We have to return only one root html element here div is the only root element
var Greater =  React.createClass({
    render : function () {
        return (
            <div>
                <h1>Hello React! </h1>
                <p>This is from, Greater Component</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greater/>, 
    document.getElementById('app')
);