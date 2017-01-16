import React, { PropTypes } from 'react';
import { Menu, Input, Label, Form, Checkbox } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobsSidebar.css';

class JobsSidebar extends React.Component {
  render() {
    return (
      <div className={s.sidebar}>
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Category</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {this.props.jobs.data[0].allCategories.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
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
                  {this.props.jobs.data[0].allJobTypes.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
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
