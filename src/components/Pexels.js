import React, { Component } from "react";
import s from "./Pexels.module.css";
import { Form } from "react-bootstrap";
import Modal from "./Modal";
import { v4 as genId } from "uuid";

class Pexel extends Component {
  state = {
    showModal: false,
    queryValue: "",
    elem: null,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getQuery(this.state.queryValue);
    this.setState({ queryValue: "" });
  };

  handleChange = (e) => {
    this.setState({ queryValue: e.target.value });
  };

  getElem = (elem) => {
    this.toggleModal();
    //сокращенное св-воб когда имя ключа и переменной в значении совпадают
    this.setState({ elem });
  };

  render() {
    const { gallery } = this.props;
    const { showModal, queryValue, elem } = this.state;
    const { handleSubmit, handleChange, toggleModal, getElem } = this;
    return (
      <>
        <section className={s.gallery}>
          <div className="container">
            {showModal && (
              <Modal toggleModal={toggleModal}>
                <p>Everybody</p>
                <img src={elem.src.tiny} alt="img" />
              </Modal>
            )}
            {/* <button className="mainBtn" onClick={toggleModal}>
              show modal
            </button> */}
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Search..."
                    name="query"
                    onChange={handleChange}
                    value={queryValue}
                  />
                  <br />
                </Form.Group>
              </Form>
            </div>
            <ul className={s.galleryList}>
              {gallery.map((el) => (
                <li key={genId()}>
                  <div className={s.imgWrapper}>
                    <img src={el.src.tiny} alt={el.alt} />
                  </div>
                  <div className={s.imgHover}>
                    {/* <a href="#" onClick={toggleModal}> */}
                    <a
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                        getElem(el);
                      }}
                    >
                      Click Me!
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Pexel;
