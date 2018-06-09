import React from 'react';

class WebView extends React.Component {
  componentDidMount() {
    this.webview.addEventListener('will-navigate', event => {
      console.log(event.url);
    });
  }

  render() {
    return (
      <webview
        ref={webview => {
          if (webview) this.webview = webview;
        }}
        src="http://qiita.com"
        autosize="on"
      />
    );
  }
}

export default WebView;
