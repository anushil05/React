//Creating a react component
//React createClass takes one and only argument an options object
//Here we decide the behaviour of our component
//The only thing that is required of every react component is a render method
//All th render method excepts some jsx code that we can render to the browser
//We have to return only one root html element here div is the only root element
var Greater = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is deafult message for React Component',
        }
    },
    render: function () {
        //Now to access the props this.props object
        //it stores all of our props
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}! </h1>
                <p>{message + '!!'}</p>
            </div>
        );
    }
});

var firstName = 'Anushil';
var mess = 'This is the message from props from a var using JSX';

ReactDOM.render(
    // <Greater />,
    // props passed into the Greater component 
    // <Greater name="Anushil"/>,
    <Greater name={firstName} message={mess}/>,
    document.getElementById('app')
);