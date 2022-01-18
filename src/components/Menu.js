import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import TextA from './TextA';
import { Link } from 'react-router-dom';

export default function MainMenu(props) {
  const {textOfA,menus} = props;
  return (
    <div>
      <TextA text={textOfA} />
      <ul>
        {menus.map((e)=>{
          return <li key={uuidv4()}><Link to={e.link}>{e.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

// const MainMenu = (props) => {
//   const {textOfA,menus} = props;
//   // console.log(typeof(menu));
//   // console.log(props.menus);
//   return (
//     <div>
//       <TextA text={textOfA} />
//       <ul>
//         {menus.map((e)=>{
//           return <li key={uuidv4()}><Link to={e.link}>{e.name}</Link></li>
//         })}
//       </ul>
//     </div>
//   )
// }

MainMenu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object),
  textOfA: PropTypes.string,
}

// export default MainMenu;