const url = 'http://localhost:3000/items/';
const cartUrl = new URL('http://localhost:3000/cart/');
const buyUrl = new URL('http://localhost:3000/buy/');

import React from 'react';
import { Row, Col, Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class ClockList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      buy: [],
      result: [],
      newObj: {
        casual: false,
        business: false,
        priceMin: null,
        priceMax: null,
      },
      modal: false,
      cartModal: false
    };
    this.fetchLists = this.fetchLists.bind(this);
    this.fetchcarts = this.fetchCarts.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showCart = this.showCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.buyItem = this.buyItem.bind(this);
    this.deleteCartItems = this.deleteCartItems.bind(this);
  }

  componentDidMount() {
    this.fetchLists();
    this.fetchCarts();
  }

  fetchLists() {
    const targetUrl = new URL(url);
    const params = targetUrl.searchParams;
    const { casual, business, priceMin, priceMax } = this.state.newObj;

    if (casual === true) {
      params.append('scene', 'casual');
    }
    if (business === true) {
      params.append('scene', 'business');
    }
    if (priceMin !== null) {
      params.append('price_gte', priceMin)
    }
    if (priceMax !== null) {
      params.append('price_lte', priceMax)
    }

    fetch(targetUrl, { method: 'GET' }).then((res) => {
      return res.json();
    }).then((items) => {
      this.setState({ items });
    });
  }

  fetchCarts() {
    fetch(cartUrl, { method: 'GET' }).then((res) => {
      return res.json();
    }).then((cart) => {
      this.setState({ cart });
    });
  }

  stateChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    let newObj = Object.assign({}, this.state.newObj);
    if (value === 'casual') {
      newObj.casual =
        event.target.checked
    }
    if (value === 'business') {
      newObj.business =
        event.target.checked
    }
    if (name === 'priceMin') {
      newObj.priceMin = value
    }
    if (name === 'priceMax') {
      newObj.priceMax = value
    }

    this.setState({ newObj }, this.fetchLists)
  }

  showModal(id) {
    const targetUrl = url + id;
    fetch(targetUrl, { method: 'GET' })
      .then((res) => {
        return res.json();
      }).then((result) => {
        this.setState({ result, modal: true }, this.fetchLists)
      })
  }

  closeModal() {
    fetch(url, { method: 'GET' })
      .then((res) => {
        return res.json();
      }).then((result) => {
        this.setState({ result, modal: false }, this.fetchCarts)
      })
  }

  showCart() {
    this.setState({ cartModal: true }, this.fetchLists)
  }

  closeCart() {
    this.setState({ cartModal: false }, this.fetchLists)
  }

  addItem(itemId, price) {
    const json = { itemId, price };
    fetch(cartUrl, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.closeModal();
  }

  deleteItem(id) {
    const targetUrl = cartUrl + id;
    fetch(targetUrl, { method: 'DELETE' })
    this.closeModal();
  }

  buyItem() {
    const date = new Date();
    const array = [];
    for (let i = 0; i < this.state.cart.length; i++) {
      array.push({ 'itemId': this.state.cart[i].itemId, 'price': this.state.cart[i].price });
    };
    const json = { date, 'items': array };
    fetch(buyUrl, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.setState({ cartModal: false });
  }

  deleteCartItems() {
    for (let i = 0; i < this.state.cart.length; i++) {
      const targetUrl = cartUrl + this.state.cart[i].id;
      fetch(targetUrl, { method: 'DELETE' });
      this.closeModal();
    }
  }

  render() {
    return (
      <div>
        <nav className='text-light navbar bg-info'>
          <a className='navbar-brand'>Clockworks</a>
          <div className='ml-auto'>
            <button type='button' className='btn btn-link text-light' onClick={() => { this.showCart() }}>カート</button>
          </div>
        </nav>

        <Cart cart={this.state.cart} itemId={this.state.cart.itemId} id={this.state.cart.id} src={`./img/item/${this.state.cart.itemId}.jpg`} price={this.state.cart.price} cartModal={this.state.cartModal} showCart={this.showCart} closeCart={this.closeCart} fetchCarts={this.fetchCarts} fetchLists={this.fetchLists} deleteItem={this.deleteItem} buyItem={this.buyItem} deleteCartItems={this.deleteCartItems} />

        <div className='container-fluid'>
          <Row>
            <Col sm='3'>
              <div className='mt-5'>
                <Form>
                  <FormGroup className='my-5'>
                    <p className='h5'>シーン</p>
                    <div className='position-relative form-check'>
                      <input name='scene' id='sceneCasual' type='checkbox' className='form-check-input' value='casual' onClick={this.stateChange} />
                      <label className='form-check-label'>カジュアル</label>
                    </div>
                    <div className='position-relative form-check'>
                      <input name='scene' id='sceneBusiness' type='checkbox' className='form-check-input' value='business' onClick={this.stateChange} />
                      <label className='form-check-label'>ビジネス</label>
                    </div>
                  </FormGroup>
                  <FormGroup className='my-5'>
                    <p className='h5'>価格</p>
                    <div>
                      <label className='form-check-label'>最低</label>
                      <div className='input-group'>
                        <input name='priceMin' type='number' className='form-control' onClick={this.stateChange} />
                        <div className='input-group-append'>
                          <span className='input-group-text'>円</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className='form-check-label'>最高</label>
                      <div className='input-group'>
                        <input name='priceMax' type='number' className='form-control' onClick={this.stateChange} />
                        <div className='input-group-append'>
                          <span className='input-group-text'>円</span>
                        </div>
                      </div>
                    </div>
                  </FormGroup>
                </Form>
              </div></Col>
            <Col sm='9'>
              <div className='d-flex flex-wrap mt-5'>
                {this.state.items.map((item, index) => {
                  const { id, price, scene } = item;
                  return (
                    <div key={index}>
                      <Item id={id} price={price} scene={scene} src={`./img/item/${id}.jpg`} showModal={this.showModal} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>

          <ItemModal id={this.state.result.id} price={this.state.result.price} scene={this.state.result.scene} src={`./img/item/${this.state.result.id}.jpg`} modal={this.state.modal} showModal={this.showModal} closeModal={this.closeModal} addItem={this.addItem} fetchCarts={this.fetchCarts} />

        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    const style = {
      img: { width: '200px' }
    }
    const { src, price } = this.props;
    return (
      <div className='mx-3 my-5' onClick={() => { this.props.showModal(this.props.id) }}>
        <img src={src} style={style.img} />
        <p className='mt-3 h5'>￥ {price} <small>+tax</small></p>
      </div>
    );
  }
}

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: '',
      price: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { id, price } = this.props;
    this.setState({
      itemId: id,
      price: price
    }, this.props.fetchCarts)
    this.props.addItem(id, price);
    this.setState({ itemId: '', price: '' });
  }

  render() {
    const { id, price, scene, modal } = this.props;
    return (
      <Modal isOpen={modal} toggle={this.props.showModal} toggle={this.props.closeModal}>
        <ModalHeader toggle={this.props.closeModal} className='close' />
        <ModalBody>
          <Row>
            <Col sm='8'>
              <img src={`./img/item/${modal ? id : 1}.jpg`} className='img-fluid xs-m-3' />
            </Col>
            <Col sm='4' className='text-center p-2'>
              <p className='mt-5 h5'>
                ￥ {price} <small>+tax</small>
              </p>
              <p>シーン：{scene === 'casual' ? 'カジュアル' : 'ビジネス'}</p>
              <Button className='btn-xs' color='secondary' data-dismiss='modal' onClick={this.handleChange}>カートへ入れる</Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>);
  }
}

class Cart extends React.Component {

  render() {
    const { cartModal, showCart, closeCart } = this.props;
    return (
      <Modal isOpen={cartModal} toggle={showCart} toggle={closeCart}>
        <ModalHeader toggle={closeCart} className='close'></ModalHeader>
        <ModalBody>
          {(() => {
            if (this.props.cart.length > 0) {
              return (
                this.props.cart.map((row, index) => {
                  const { itemId, price, id } = row;
                  return (
                    <Row key={index} className='my-2 mx-3'>
                      <Col xs='3' className='my-auto'>
                        <img src={`./img/item/${itemId}.jpg`} className='img-fluid' />
                      </Col>
                      <Col xs='6' className='my-auto'>
                        <p className='h5'>
                          ￥ {price}
                        </p>
                      </Col>
                      <Col xs='3' className='my-auto'>
                        <Button onClick={() => { this.props.deleteItem(id); }} color='link'><img className='img-fluid' src='./img/trash.svg' /></Button>
                      </Col>
                    </Row>
                  );
                })
              );
            } else {
              return (<p className='text-center'>カートは空です。</p>);
            }
          })
            ()}
        </ModalBody>
        <ModalFooter>
          {(() => {
            let sum = 0;
            this.props.cart.forEach(function (value) {
              sum = sum + value.price;
            });
            return (<p className='text-right'> 合計:￥{sum} </p>)
          })()}
          <Button onClick={() => { this.props.buyItem(), this.props.deleteCartItems(); }} color='secondary'>購入する</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
