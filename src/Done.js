class Done extends React.Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.todo);
    }

    render() {
        let todo = this.props.todo;
        if (todo.done) {
            return (
                <li>
                    <del>{todo.text}</del> <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        } else {
            return (
                <li>
                    {todo.text} <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        }
    }
}
