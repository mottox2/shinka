import React from 'react';

class WebView extends React.Component {
  state = {
    currentVideoId: null
  };

  componentDidMount() {
    this.webview.addEventListener('will-navigate', event => {
      console.log(event.url);
    });
    this.webview.addEventListener('page-title-updated', () => {
      const url = new URL(this.webview.getURL());
      const currentVideoId = url.searchParams.get('v');
      if (currentVideoId && this.webview.canGoBack()) {
        this.setState({ currentVideoId });
        this.webview.goBack();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentVideoId}
        <webview
          ref={webview => {
            if (webview) this.webview = webview;
          }}
          style={{ minHeight: 600 }}
          src="http://youtube.com"
          autosize="on"
        />
      </React.Fragment>
    );
  }
}

export default WebView;
