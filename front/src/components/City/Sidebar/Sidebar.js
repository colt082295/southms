import React, { PropTypes } from 'react';
import axios from 'axios';
import { Menu, Dropdown, Input, Label, Icon } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {

    const _this = this;
    console.log("TESTING", this.props.city);
    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get('http://www.southms.com/index.php/api/jobs.json?type=*&category=*&city='+this.props.city.camelCase+'&limit=3')
        .then(function(result) {
          console.log("Got data:", result.data);
          _this.setState({
            jobs: result.data.data,
          });
        })
  }
  handleItemClick() {

  }

  render() {
    return (
      <div className={'sidebar'}>
        <Menu vertical>
       <Menu.Item>
         <Input placeholder='Search...' />
       </Menu.Item>

       <Menu.Item>
         Jobs in {this.props.city.title}

         <Menu.Menu>
           {this.state.jobs.map(function (job, i) { // Map through the cities
             console.log("job", job);
             return (<Menu.Item name='search' key={i} href={'/job/'+job.id} >
               {job.position}
             </Menu.Item>)
             })}
         </Menu.Menu>
       </Menu.Item>

       <Menu.Item>
         Events in {this.props.city.title}

         <Menu.Menu>
           <Menu.Item name='search' onClick={this.handleItemClick}>
             Meeting with Colton
           </Menu.Item>
           <Menu.Item name='add' onClick={this.handleItemClick}>
             Another Event
           </Menu.Item>
           <Menu.Item name='about' onClick={this.handleItemClick}>
             Last Event
           </Menu.Item>
         </Menu.Menu>
       </Menu.Item>

       <Menu.Item>
         Restaurants in {this.props.city.title}

         <Menu.Menu>
           <Menu.Item name='search' onClick={this.handleItemClick}>
             Pizza Hut
           </Menu.Item>
           <Menu.Item name='add' onClick={this.handleItemClick}>
             Woody's Roadside
           </Menu.Item>
           <Menu.Item name='about' onClick={this.handleItemClick}>
             Aunt Jenny's Catfish Restaurant
           </Menu.Item>
         </Menu.Menu>
       </Menu.Item>

       <Dropdown text='More' pointing='right' className={'link item sidebar-dropdown'}>
      <Dropdown.Menu>
        <Dropdown.Item>Hotels</Dropdown.Item>
        <Dropdown.Item>Things to do</Dropdown.Item>
        <Dropdown.Item>Real Estate</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

     </Menu>
      <div className={s.ad}>Ad</div>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
