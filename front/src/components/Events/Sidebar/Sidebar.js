import React, { PropTypes } from 'react';
import { Menu, Input, Label, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

class Sidebar extends React.Component {

  constructor() {
        super();
        var _this = this;
        this.state = {
          categories: [],
        };
    }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div className={s.sidebar}>
        <Menu vertical>

          <Menu.Item>
            <Menu.Header>Location</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {this.props.eventInfo.allLocations.map(function (event, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: event }}
                        key={i}
                      />


                    )


                  })}
                </Form>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
