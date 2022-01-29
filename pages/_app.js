import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from '../components/Container/Container';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  console.log(router.route);
  return (
    
    <Container>
      <Component {...pageProps} />
    </Container>
  );



}

export default MyApp
