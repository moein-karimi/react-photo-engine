import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';

class App extends React.Component {
  state = { images: [], disload: 'none', disimg: 'block' };
  onSearchSubmit = async term => {
    this.setState({ disload: 'block' });
    this.setState({ disimg: 'none' });
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    this.setState({ disload: 'none' });
    this.setState({ disimg: 'block' });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Loader displayLoader={this.state.disload} />
        <ImageList
          displayImage={this.state.disimg}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
