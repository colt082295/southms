import React, { PropTypes } from 'react';
import { Button, Modal, Header, Image, Form, Input, TextArea } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './JobLoaded.css';

class JobLoaded extends React.Component {
  /*
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  */

  fileUpload() {
    console.log("Upload clicked.");
    document.getElementById("file-upload").click();
  }

  fileChange(e) {
    console.log("File changed.");
    var name = '';

    for (var i=0; i<e.target.files.length; i++) {
      name += e.target.files[i].name + ', ';
    }
    // remove trailing ","
    name = name.replace(/,\s*$/, '');

    document.getElementById("file-text").value = name;
  }

  render() {
    const data = this.props.job;

    return (
      <div className={s.root}>
        <div className={s.container}>
                <div className={s.job}>
                  <div className={s.jobPosition}>
                    <h3>{data.position}</h3>
                  </div>
                  <div className={s.description} dangerouslySetInnerHTML={{ __html: data.description }}>
                  </div>

                    <Modal dimmer={"blurring"} closeIcon='close' trigger={<Button className={s.apply} positive fluid>Apply</Button>}>
                      <Modal.Header>Applying to {data.position}</Modal.Header>
                      <Modal.Content image>
                        <Modal.Description>
                          <Form>
                            <Form.Group widths='equal'>
                              <Form.Field control={Input} label='First name' placeholder='First name' />
                              <Form.Field control={Input} label='Last name' placeholder='Last name' />
                              <Form.Field control={Input} label='Email' placeholder='Email@email.com' />
                            </Form.Group>
                            <Form.Field>
                            <label htmlFor="file-upload">Upload Resume</label>
                            <div className="ui fluid file input action">
                                <input type="text" id="file-text" readOnly onClick={this.fileUpload} />
                                <input className={s.fileInput} type="file" id="file-upload" name="files1" autoComplete="off" onChange={this.fileChange} />
                                <div className="ui button" onClick={this.fileUpload}>
                                    Select...
                                </div>
                            </div>
                            </Form.Field>
                            <Form.Field control={TextArea} label='Anything Else?' placeholder='Write anything else you need to...' />
                            <Form.Field control={Button} fluid >Submit</Form.Field>
                          </Form>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(JobLoaded);
