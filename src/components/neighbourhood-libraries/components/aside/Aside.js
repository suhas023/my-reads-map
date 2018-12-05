import React, { Component } from 'react';
import './Aside.css';
import Icon from '@material-ui/core/Icon';


class Aside extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showList: true,
      query: ''
    }
  }

  updateQuery = (e) => {
    let query = e.target.value.trimLeft().toLowerCase();
    this.setState({ query })
    this.props.onFilterLibraries(query);
  }

  toggleShowList = () => {
    this.setState((prevState) => {
      return { showList: !prevState.showList }
    });
  }

  handleItemClick = (libraries) => {
    if (window.innerWidth < 600)
      this.toggleShowList();
    this.props.onSelectLibrary(libraries.id);
  }

  render() {
    let asideHeight = this.state.showList ? "full-height" : "min-height";
    let containerState = this.state.showList ? "show" : "hide";
    return (
      <aside className={asideHeight}>
        <div className={containerState + " container"}>
          <input
            aria-label="filter libraries"
            role="search"
            autoFocus
            placeholder="Filter"
            value={this.state.query}
            onChange={this.updateQuery}
          />
          <ul role="listbox" aria-label="libraries" aria-activedescendant="0" tabIndex="0">
            {
              this.props.libraries.map((library, index) =>
                <li key={library.id}>
                  <span
                    id={index}
                    role='listitem'
                    tabIndex="0"
                    className={library.id === this.props.selectedID ? "highlight" : "none"}
                    onClick={() => this.handleItemClick(library)}
                    onKeyPress={() => this.handleItemClick(library)}
                  >
                    {library.name}
                  </span>
                </li>
              )
            }
          </ul>
        </div>
        <button className="toggle" onClick={this.toggleShowList} aria-label="menu">
          {
            this.state.showList ? <Icon className="icon">arrow_drop_down</Icon>
              : <Icon className="icon">arrow_drop_up</Icon>
          }

        </button>
      </aside>
    );
  }
}

export default Aside;