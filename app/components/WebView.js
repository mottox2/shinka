import React from 'react';

type Props = {
  setVideoId: () => void
};

class WebView extends React.Component<Props> {
  componentDidMount() {
    this.webview.addEventListener('will-navigate', event => {
      console.log(event.url);
    });
    this.webview.addEventListener('page-title-updated', () => {
      const url = new URL(this.webview.getURL());
      const currentVideoId = url.searchParams.get('v');
      if (currentVideoId && this.webview.canGoBack()) {
        this.props.setVideoId(currentVideoId);
        this.webview.goBack();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
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
