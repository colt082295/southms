import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import axios from 'axios';
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
    data: [],
    offset: 0,
    pageCount: this.props.pagination.total_pages,
   }

  handlePageClick = (data) => {
    var _this = this;
    _this.props.onLoadChange({loading: true});
    let selected = data.selected+1;
    console.log("Page click:", selected, data);

    this.serverRequest =
      axios
      // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&category=" + this.props.data.category + "&pg=" + selected)
        .then(function(result) {
          console.log(result.data.meta.pagination.total_pages);
          _this.setState({pageCount: result.data.meta.pagination.total_pages});
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({loading: false});

        })
  };

  render() {
    var _this = this;
    /*
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
    */
    let paginate = '';
    if(this.props.pagination.total_pages > 1) {
      paginate = <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<a href="">...</a>}
                     breakClassName={"break-me"}
                     pageCount={this.state.pageCount}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />

    }

    return (
      <div className={s.paginationWrapper}>
        {paginate}
        {/*
        <Menu pagination className={s.pagination} >
        { multiple ?  pages : '' }
        </Menu>
        */}

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
