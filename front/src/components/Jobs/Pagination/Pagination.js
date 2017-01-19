import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import ReactPaginate from 'react-paginate';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pagination.css';

class Pagination extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  state = {
    activeItem: '1',
    moreThanOne: false,
   }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    var pages = [];
    var multiple;

    if(this.props.pagination.total_pages > 1) {
      multiple = true;
      for (var i = 0; i < this.props.pagination.total_pages; i++) {
        var index = i+1;
        var string = index.toString();
        pages.push(<Menu.Item name={string} active={activeItem === string} onClick={this.handleItemClick} key={i} />)
      }
    }



    return (
      <div className={s.paginationWrapper}>
        <Menu pagination className={s.pagination} >
        { multiple ?  pages : '' }
        </Menu>

          {/*
          <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />
          <Menu.Item name='2' active={activeItem === '2'} onClick={this.handleItemClick} />
          <Menu.Item name='3' active={activeItem === '3'} onClick={this.handleItemClick} />
          <Menu.Item name='4' active={activeItem === '4'} onClick={this.handleItemClick} />
          <Menu.Item disabled>...</Menu.Item>
          <Menu.Item name='10' active={activeItem === '10'} onClick={this.handleItemClick} />
          <Menu.Item name='11' active={activeItem === '11'} onClick={this.handleItemClick} />
          <Menu.Item name='12' active={activeItem === '12'} onClick={this.handleItemClick} />
          */}
      </div>
    );
  }
}

export default withStyles(s)(Pagination);
