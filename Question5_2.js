import React from 'react';

import { createRoot } from 'react-dom/client';

class Input extends React.PureComponent {

    render() {

        const { forwardedRef, ...otherProps } = this.props;

        return <input {...otherProps} ref={forwardedRef} />;

    }

}

const TextInput = React.forwardRef((props, ref) => {

    return <Input {...props} forwardedRef={ref} />;

});

class FocusableInput extends React.Component {

    constructor(props) {

        super(props);

        this.ref = React.createRef();

    }

    componentDidMount() {

        if (this.props.focused) {

            this.ref.current.focus();

        }

    }

    componentDidUpdate(prevProps) {

        if (prevProps.focused === false && this.props.focused === true && document.activeElement !== this.ref.current) {

            this.ref.current.focus();

        }

    }

    render() {

        return <TextInput ref={this.ref} />;

    }

}

FocusableInput.defaultProps = {

    focused: false

};

const App = (props) => <FocusableInput focused={props.focused} />;

const rootElement = document.getElementById('root');

if (rootElement) {

    const root = createRoot(rootElement);

    root.render(<App />);

}