import React, { Component } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';


// const FormRender = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
// <Form>
//   <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>Email address:</Form.Label>
//     <Form.Control type="email" placeholder="name@example.com" />
//   </Form.Group>

//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Message:</Form.Label>
//     <Form.Control as="textarea" rows="3" />
//   </Form.Group>
// </Form>
//   );
// };

// const Contact = () => (
//   <Container className="p-3">
//     {/* <Jumbotron> */}
//       <FormRender className="form">
//       </FormRender>
//     {/* </Jumbotron> */}
//   </Container>
// );
class Contact extends Component {
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted. Name =', this.state.name)
  }
  render() {
    return (
      <div className="form-content">
        <h2>Email:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default Contact;