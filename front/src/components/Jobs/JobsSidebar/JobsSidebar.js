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
    // this.serverRequest.abort();
  }

  jobTypeChanged(event, data) {
    const _this = this;
    console.log("Job Type changed", event.target, data);
    _this.props.onLoadChange({loading: true});
    /*
    this.setState({
      type: data.value,
    });
    */
    var val = this.props.data.type;
    if(data.checked) {
      val.push(data.value);
    } else {
      // I'm sure there's a better way
        for(var i = val.length - 1; i >= 0; i--) {
            if(val[i] === data.value) {
               val.splice(i, 1);
            }
        }
        console.log("Array now:", val);
    }
    this.props.updateJobType(val);
    val = val.join();
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  jobCateogryChanged(event, data) {
    const _this = this;
    console.log("Job Category changed", event.target, data.value);
    _this.props.onLoadChange({loading: true});
    /*
    this.setState({
      category: data.value,
    });
    */
    var val = this.props.data.category;
    if(data.checked) {
      val.push(data.value);
    } else {
      // I'm sure there's a better way
        for(var i = val.length - 1; i >= 0; i--) {
            if(val[i] === data.value) {
               val.splice(i, 1);
            }
        }
        console.log("Array now:", val);
    }
    this.props.updateJobCategory(val);
    val = val.join();
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&category=" + val)
        .then(function(result) {
          _this.props.changeJobs(result.data)
          _this.props.onLoadChange({loading: false});
        })
  }

  render() {
    const _this = this;
    return (
      <div className={s.sidebar}>
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Category</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form>
                  {this.props.jobInfo.allCategories.map(function (job, i) {

                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job }}
                        key={i}
                        onChange={_this.jobCateogryChanged.bind(_this)}
                        value={job}
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
                    job = JSON.parse(job);
                    return (

                      <Form.Field
                        control={Checkbox}
                        label={{ children: job.text }}
                        key={i}
                        onChange={_this.jobTypeChanged.bind(_this)}
                        value={job.value}
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

          <Menu.Item>
            <Menu.Header>Salary</Menu.Header>

            <Menu.Menu>
              <Menu.Item >
                <Form className={s.salaryInput}>


                  <Form.Group>
                    <Form.Input label='Min $' name='min-salary' placeholder='0' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input label='Max $' name='max-salary' placeholder='' />
                  </Form.Group>



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
