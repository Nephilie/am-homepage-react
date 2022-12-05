import React, { Component } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

export default class LoadingButton extends Component {
  state = {
    loading: false,
  };

  fetchData = () => {
    this.setState({ loading: true });

    //simulating API call
    setTimeout(() => {
      this.setState({ loading: false });
    }, 6000);
  };

  render() {
    const { loading } = this.state;

    return (
      <Container>
        <Button
          className="btn-warning text-light"
          onClick={this.fetchData}
          disabled={loading}
        >
          {loading && <Spinner animation="border" size="sm" />}
          {loading && <span>loading...</span>}
          {!loading && <span>Senden</span>}
        </Button>
      </Container>
    );
  }
}
