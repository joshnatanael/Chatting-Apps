export default function Loader() {
  return (
    <div id="preloader">
      <div className="loading">
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_eYXADRNJPy.json" background="transparent"
          speed="1" style={{width: '500px', height: '500px'}} loop autoplay></lottie-player>
      </div>
    </div>
  );
}