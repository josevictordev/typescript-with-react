import React from 'react';

interface IInputProps{
  label: string,
  value: string,
  type: string,
  id: string,
  errorEmail?: boolean,
  onChange: (newValue: string) => void;
  onPressEnter: () => void;
}

export const InputLogin: React.FC<IInputProps> = (props) => {
  return (
    <label htmlFor="user">
      <span>{props.label}</span>
      <input
        onKeyDown={(e) =>
          e.key === 'Enter' ? props.onPressEnter() : undefined
        }
        onChange={e=>props.onChange(e.target.value)}
        value={props.value}
        type={props.type}
        id={props.id}
        placeholder="Digite o seu nome..."
      />
      {props.errorEmail && <p>Email invalido!</p>}
    </label>
  );
};

