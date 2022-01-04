import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import DataContext from '../data/DataContext';

const TextA = (props)=>{
  const {text} = props;
  const [...value] = useContext(DataContext);
  // console.log(value);
  return (
    <p>
      {text}
      {value.map((ele)=>{
        return <span key={uuidv4()}>{ele.income}</span>
      })}
    </p>
  )
}

TextA.propTypes = {
  text:PropTypes.string,
}

export default TextA;