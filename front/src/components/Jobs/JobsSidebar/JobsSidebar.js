import React, { PropTypes } from 'react';
import { Menu, Input, Label, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobsSidebar.css';

class JobsSidebar extends React.Component {

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
            <Menu.Header>Category - {this.props.location.city}</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {console.log(this.props)}
                  {this.props.jobInfo.allCategories.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
                        key={i}
                      />


                    )


                  })}
                </Form>
              </Menu.Item>

            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Job Type</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {this.props.jobInfo.allTypes.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
                        key={i}
                      />


                    )


                  })}
                </Form>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Location</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {this.props.jobInfo.allLocations.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
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

export default withStyles(s)(JobsSidebar);
