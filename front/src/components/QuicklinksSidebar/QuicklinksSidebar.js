import React, { PropTypes } from 'react';
import axios from 'axios';
import { Menu, Dropdown, Input, Label, Icon } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuicklinksSidebar.css';

class QuicklinksSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      citySlug: this.props.citySlug ? this.props.citySlug : 'default',
    }
  }

  componentDidMount() {

    const _this = this;
    this.serverRequest =
      axios
        .get('http://www.southms.com/index.php/api/quick-links.json?city='+this.state.citySlug)
        .then(function(result) {
          console.log("Got data:", result.data.data[0].menu);
          _this.setState({
            menu: result.data.data[0].menu,
          });
        })
  }
  handleItemClick() {

  }

  render() {

    return (
      <div className={s.sidebar}>
        <Menu vertical>

          {this.state.menu.map(function (item, i) {
            console.log("Menu item:", item);
            return (<Menu.Item key={i} >{ item.linkable == '1' ?  <a href={item.link}>{item.name}</a> : item.name}
            { item.subSection  == '1' ? <Menu.Menu>{item.subSectionContent.map(function (sub, i2) {
               return (<Menu.Item name={sub.subSectionHeading} key={i2} href={sub.subSectionlink} ></Menu.Item>) })}
             </Menu.Menu> : ''}</Menu.Item>)


          })}



     </Menu>
   </div>
    );
}}

export default withStyles(s)(QuicklinksSidebar);
