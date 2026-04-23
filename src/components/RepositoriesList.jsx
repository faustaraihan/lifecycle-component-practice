import React from 'react';
import PropTypes from 'prop-types';
import RepositoryItem from './RepositoryItem';

class RepositoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: null
    };
  }

  render() {
    if (this.state.repositories === null) {
      return <p>Loading ... </p>;
    }

    return (
      <div className="repositories-list">
        {this.state.repositories.map((repository) => {
          return (
            <RepositoryItem
              key={`${repository.owner}/${repository.name}`}
              name={repository.name}
              owner={repository.owner}
              description={repository.description}
              url={repository.url}
            />
          );
        })}
      </div>
    );
  }
}

RepositoriesList.propTypes = {
  language: PropTypes.string.isRequired
};

export default RepositoriesList;
