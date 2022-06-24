import { useState } from 'react';
import PropTypes from 'prop-types';

function ColorInput(props) {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');

  const hexToRGB = (value) => {
    if (value[0] !== '#') {
      setRgb('Ошибка');
      props.onColorChange('red');
      return;
    }

    const r = parseInt(value.slice(1, 3), 16);
    const g = parseInt(value.slice(3, 5), 16);
    const b = parseInt(value.slice(5, 7), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      setRgb('Ошибка');
      props.onColorChange('red');
      return;
    }
    setRgb(`rgb(${r}, ${g}, ${b})`) ;
    props.onColorChange(`rgb(${r}, ${g}, ${b})`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 7) {
      return;
    }

    setHex(value);
    if (value.length === 7) {
     hexToRGB(value);
    }
  };

  return (
    <div className="fields-wrapper">
      <input
        className="input-field field-height"
        onChange={handleChange}
        value={hex}
      />
      <div className="output-field field-height">{rgb}</div>
    </div>
  )
}

export default ColorInput;

ColorInput.propTypes = {
  onColorChange: PropTypes.func.isRequired,
};

