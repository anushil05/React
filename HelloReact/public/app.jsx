//Nested Component 1 -- Presentational Component
//--Prsentational Component don't maintain states they are dummy components
var GreaterMessage  = React.createClass ({
    render : function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hi {name}!!!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

//Nested Component 2 -- Input Component
var GreaterForm = React.createClass ({
    onFormSubmit : function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length>0) {
            this.refs.name.value = "";
            updates.name = name;
        }

        if (message.length>0) {
            this.refs.message.value="";
            updates.message = message;
        }

        this.props.onNewUpdates(updates);
    },
    render : function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter Name"></input>
                </div>
                <div>
                    <input type="text" ref="message" placeholder="Enter Message"></input>
                </div>
                <div>
                    <button>Submit!</button>
                </div>
            </form>
        );
    }
});
//Creating a react component
//React createClass takes one and only argument an options object
//Here we decide the behaviour of our component
//The only thing that is required of every react component is a render method
//All th render method excepts some jsx code that we can render to the browser
//We have to return only one root html element here div is the only root element

//Main Component -- Container Component
//Our Conatiner Component do maintain state and render children
var Greater = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is deafult message for React Component',
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewUpdates: function (updates) { 
        this.setState(updates);
    },
    render: function () {
        //Now to access the props this.props object
        //it stores all of our props
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreaterMessage name={name} message={message}/>
                <GreaterForm onNewUpdates={this.handleNewUpdates}/>
            </div>
        );
    }
});

var firstName = 'Anushil';
var message = 'This is the message from props from a var using JSX';

ReactDOM.render(
    <Greater />,
    // props passed into the Greater component 
    // <Greater name="Anushil"/>,
    // <Greater name={firstName} message={message}/>,
    document.getElementById('app')
);