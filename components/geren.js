import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import Foot from './geren/foot';
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  Glyphicon,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';


class Collection extends Component {



  render() {

      return (
        <div>
          <Foot />
        </div>
      )

  }


}


ReactDOM.render(
  <Collection />,
  document.getElementById('collection')
)
