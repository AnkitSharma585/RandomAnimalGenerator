import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import cow from './svg/cow.svg';
import horse from './svg/horse.svg';
import gator from './svg/gator.svg';
import bird from './svg/bird.svg';

const svgMap = {
  cat,
  dog,
  cow,
  horse,
  gator,
  bird,
};

function AnimalShow({ type }) {
  return (
    <img className='animalShow' style={{}} src={svgMap[type]} alt='animals' />
  );
}
export default AnimalShow;
