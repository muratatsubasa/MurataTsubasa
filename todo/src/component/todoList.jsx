import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const url = 'http://localhost:3000/lists/';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
    this.addRow = this.addRow.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.fetchLists = this.fetchLists.bind(this);
  }

  componentDidMount() {
    this.fetchLists();
  }

  changeStyle(id) {
    const targetUrl = url + id;
    fetch(targetUrl, { method: 'GET' })
      .then((res) => {
        return res.json();
      }).then((result) => {
        const okay = result.ok;
        const title = result.title;
        const id = result.id;
        const newObj = {
          "title": title,
          "ok": okay === true ? false : true,
          "id": id
        }

        fetch(targetUrl, {
          body: JSON.stringify(newObj), method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(this.fetchLists);
      })
  }

  deleteRow(id) {
    const targetUrl = url + id;
    fetch(targetUrl, { method: 'DELETE' }).then(this.fetchLists);
  }

  fetchLists() {
    fetch(url).then((res) => {
      return res.json();
    }).then((lists) => {
      this.setState({ lists });
    });
  }

  addRow(title, ok) {
    const json = { title, ok };
    fetch(url, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this.fetchLists);
  }

  render() {
    return (
      <Row>
        <Col>
          <ul>
            <AddList addRow={this.addRow} />
            {this.state.lists.map((list, index) => {
              const { id, title, ok } = list;
              return <Todo key={index} id={id} title={title} ok={ok} deleteRow={this.deleteRow} changeStyle={this.changeStyle} />;
            })}
          </ul>
        </Col>
      </Row>
    );
  }
}

class Todo extends React.Component {
  render() {
    const style = {
      row: { border: '1px solid #aaa', display: 'block', padding: '10px' },
      image: { width: '1.5rem' },
      text: { marginTop: '10px', alignItems: 'center' },
      default: { color: 'black' },
      line: { color: 'gray', textDecoration: 'line-through' },
      trash: { text: 'right' },
      flex: { display: 'flex' }
    };
    return (
      <li style={style.row}>
        <Row style={style.flex}>
          <Col xs='2'><Button onClick={() => { this.props.changeStyle(this.props.id); }} color='link' className='btn btn-link'><img src={this.props.ok ? './img/circle_check.svg' : './img/circle.svg'} style={style.image} /></Button></Col>
          <Col xs='8' style={style.text} ><p style={this.props.ok ? style.line : style.default}>{this.props.title}</p></Col>
          <Col xs='2'><Button onClick={() => { this.props.deleteRow(this.props.id); }} color='link' className='btn btn-link pull-right'><img src='./img/trash.svg' style={style.image} /></Button></Col>
        </Row>
      </li>
    );
  }
}

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ok: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      ok: false,
      [name]: value
    });
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (!this.state.title) {
        return;
      }
      const { title, ok } = this.state;
      this.props.addRow(title, ok);
      this.setState({ title: '', ok: '' });
    }
  }

  render() {
    return (
      <div>
        <form onKeyDown={this.handleSubmit}>
          <input name="title" className="form-control" placeholder="ToDoを追加" type="text" onChange={this.handleInputChange} value={this.state.title} />
        </form>
      </div>
    );
  }

}