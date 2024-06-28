const isMobileDevice = () => {
  if (typeof window !== 'undefined') {
    const userAgent = navigator.userAgent;
    const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

    return mobileKeywords.some((keyword) => userAgent.match(new RegExp(keyword, 'i')));
  }
  return false;
};

export default isMobileDevice;
