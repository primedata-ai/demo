!function(){var follower=window.follower=window.follower||[];if(!follower.initialize)if(follower.invoked)window.console&&console.error&&console.error("PrimeDATA snippet included twice.");else{follower.invoked=!0;follower.methods=["initOneSignal", "initWebPush","initWebPopup","utils","trackSubmit","trackClick","trackLink","trackForm","pageview","personalize","identify","initialize","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];follower.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);follower.push(e);return follower}};for(var t=0;t<follower.methods.length;t++){var e=follower.methods[t];follower[e]=follower.factory(e)}follower.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://live.primedata.ai/powehi/mining.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);follower._loadOptions=e};follower.SNIPPET_VERSION="0.1.0";
  follower.load();
  const primeJsOpts = {
    scope: 'JS-2BbrNZXdFqxlWXYOmRiNrj9q7o1',
    url: 'https://live.primedata.ai/powehi',
    writeKey: '2BbrNT91bp8GFF1QbKRL6JmT0HR',
    initialPageProperties: {
      pageInfo: {
        destinationURL: location.href
      }
    },
    detectAdBlock: {
      enable: true,
      bannerMessage: "You are on the ad blocker. Our feature does not work well when your ad blocker is enabled on this site. To fully enjoy the service, please disable the ad blocker on our site. We guarantee that there will be no ads on our site.",
      closeButtonLabel: "close"
    },
    webPopup: {
      enabled: false,
      options: {
        showLogs: false,
        onsiteWorkerPath: "./posjs-worker.js",
        endpoint: 'https://live.primedata.ai'
      }
    },

  };
  follower.initialize({"Prime Data": primeJsOpts})

  if(primeJsOpts.webPopup && primeJsOpts.webPopup.enabled) follower.initWebPopup(primeJsOpts);
}}();