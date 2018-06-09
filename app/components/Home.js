// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import WebView from './WebView';

type Props = {
  setVideoId: () => void,
  videoId: string
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { setVideoId, videoId } = this.props;
    console.log(this.props);
    return (
      <div style={{ minHeight: 300 }}>
        <WebView setVideoId={setVideoId} />
        {videoId && (
          <iframe
            title="movie"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
        <div className={styles.container} data-tid="container">
          {/* <h2>Home</h2> */}
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
