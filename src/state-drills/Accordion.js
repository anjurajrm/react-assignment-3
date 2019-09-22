import React from "react";

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

  constructor() {
    super();
    this.state = {
      sectionIndex: null
    };
  }
  handleClick(activeId) {
    this.setState({ sectionIndex: activeId });
  }
  renderButtons(section, id) {
    return (
      <li key={id}>
        <button onClick={event => this.handleClick(id)}>{section.title}</button>
        {this.state.sectionIndex === id && <p>{section.content}</p>}
      </li>
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.sections.map((section, id) =>
            this.renderButtons(section, id)
          )}
        </ul>
      </div>
    );
  }
}
export default Accordion;
