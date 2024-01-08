import Approach from '../components/About/Approach';
import Bottom from '../components/About/Bottom';
import Motto from '../components/About/Motto';
import Top from '../components/About/Top';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function About() {
    return (
        <>
            <Top />
            <Motto />
            <Approach />
            <Bottom />
        </>
    );
}
