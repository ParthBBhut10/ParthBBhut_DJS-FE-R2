componentDidUpdate(prevProps){
    this.ref.current.focus();
}

componentDidMount(){
    if (this.props.focused) {
        this.ref.current.focus();
    }
}