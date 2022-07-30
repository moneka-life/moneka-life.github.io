import './index.scss';
import selfie from '../../assets/selfie.jpg';

const Intro = () => {
    return (
        <div className='Intro'>
            <div className='left'>
                <img src={selfie} className="selfie" />
            </div>
            <div className='right'>
                <h1>Pawarisa!</h1>
                <p>Hi I'm Pawarisa. Originally from Rayong, Thailand. I'm a avid traveller currently going throught FA training for American Airlines.</p>
            </div>
        </div>
    );
}

export default Intro;