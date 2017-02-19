import React, { PropTypes } from 'react';
import Render from '../../components/ThingToDo/Render';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ThingToDo.css';

class ThingToDo extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Render thing={this.props.thing} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ThingToDo);
