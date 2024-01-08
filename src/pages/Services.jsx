import { EmblaCarousel } from '../components/Services/EmblaCarousel';
import Residential from '../components/Services/Residential';
import Commercial from '../components/Services/Commercial';
export default function Services() {
    return (
        <div className=''>
            <EmblaCarousel />
            <Residential />
            <Commercial />
        </div>
    );
}
