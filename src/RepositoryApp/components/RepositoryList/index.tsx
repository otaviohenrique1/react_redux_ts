import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";
import * as RepositoroesActions from "../../store/ducks/repositories/actions";
import RepositoryItem from "../RepositoryItem";

interface StateProps {
    // Propriedades do mapStateToProps
    repositories: Repository[];
}

interface DispatchProps {
    // Propriedades do mapDispatchToProps
    loadRequest(): void;
    // loadSSuccess(data: Repository): void;
    // loadFailure(): void;
}

interface OwnProps {
    // Quaquer outra propriedade
}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        const { repositories } = this.props;

        return (
            <ul>
                { repositories.map((repository) => {
                    return (
                        // <li style={{ listStyle: 'none' }} key={repository.id}>
                        //     {repository.name}
                        // </li>
                        <RepositoryItem
                            key={repository.id}
                            repository={repository}
                        />
                    );
                }) }
            </ul>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoroesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);