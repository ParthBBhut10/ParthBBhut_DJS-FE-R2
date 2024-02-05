componentDidUpdate(prevProps){
    if (prevProps.focused != this.props.focused && this.focused) {
        this.ref.current.focus();
    }
}

componentDidMount(){
    if (this.props.focused) {
        this.ref.current.focus();
    }
}