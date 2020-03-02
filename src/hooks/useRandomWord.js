import { useContext } from 'react';

import { RandomWordContext } from '../components/RandomWordProvider';

const useRandomWord = () => useContext(RandomWordContext);

export default useRandomWord;
