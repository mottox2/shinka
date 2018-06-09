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
      <div style={{ minHeight: 400 }}>
        <WebView setVideoId={setVideoId} />
        {videoId}
        <div className={styles.container} data-tid="container">
          {/* <h2>Home</h2> */}
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
