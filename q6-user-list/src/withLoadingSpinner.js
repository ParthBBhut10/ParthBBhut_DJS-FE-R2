import React, { Component } from 'react';

const withLoadingSpinner = (WrappedComponent) => {

    return class extends Component {

        constructor(props) {

            super(props);

            this.state = {

                isLoading: true,

                users: [],

            };

        }

        componentDidMount() {

            fetch('https://jsonplaceholder.typicode.com/users')

                .then((response) => response.json())

                .then((data) => {

                    this.setState({

                        isLoading: false,

                        users: data,

                    });

                })

                .catch((error) => {

                    console.error('Error fetching data:', error);

                    this.setState({ isLoading: false });

                });

        }

        render() {

            const { isLoading, users } = this.state;

            return (

                <div>

                    {isLoading ? (

                        <div>Loading...</div>

                    ) : (

                        <WrappedComponent users={users} {...this.props} />

                    )}

                </div>

            );

        }

    };

};

export default withLoadingSpinner;

