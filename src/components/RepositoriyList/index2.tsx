import React, { Component } from 'react';

interface Repository {
    id: number;
    name: string;
}

interface Props {
    repostitories: Repository[];
}

interface State {
    newRepository?: string;
}

export default class RepositoryList extends Component<Props, State> {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        newRepository: '',
    }

    componentDidMount() {}

    render() {
        const { repostitories } = this.props;
        // const { newRepository } = this.state;
        
        return (
            <ul>
                {
                    repostitories.map((repository) => {
                        return (
                            <li>{repository.name}</li>
                        );
                    })
                }
            </ul>
        );
    }
}