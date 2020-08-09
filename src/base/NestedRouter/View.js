import useContainer from './Container';
import cogoToast from 'cogo-toast';

export default (props) => {

  const notFound = () => {
    cogoToast.error("Route not found redirecting...", { heading: 'Error!', hideAfter: 5 });

    setTimeout(function () { window.location.replace("/"); }, 3000);


  }

  const { routesMatcher } = useContainer(props);
  return (
    routesMatcher ||
    (notFound())

  );
};                       
