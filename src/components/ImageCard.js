import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.iamgeRef = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.iamgeRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.iamgeRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.iamgeRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
