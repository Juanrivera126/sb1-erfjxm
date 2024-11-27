import React from 'react';
import { styles } from '../utils/constants';

interface StyleSelectorProps {
  style: string;
  setStyle: (style: string) => void;
  disabled: boolean;
}

const StyleSelector = ({ style, setStyle, disabled }: StyleSelectorProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="style" className="block text-sm font-medium text-gray-700">
        Selecciona un estilo
      </label>
      <select
        id="style"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
      >
        <option value="">Selecciona un estilo...</option>
        {styles.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyleSelector;