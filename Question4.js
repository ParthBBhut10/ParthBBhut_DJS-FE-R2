class Message extends ReadableByteStreamController.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 1
        };
    }
    clickHander = e => {
        e.preventDefault();
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        return this.state.visible ? (
            <React.Fragment>
                <a href="#" onClick={this.clickHander}>Want to buy a new car?</a>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <a href="#" onClick={this.clickHander}>Want to buy a new car?</a>
                <p>Call +11 22 33 44 now!</p>
            </React.Fragment>
        )
    }
}

document.body.innerHTML = "<div id='root'></div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);