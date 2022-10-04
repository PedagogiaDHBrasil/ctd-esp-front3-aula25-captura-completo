import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type Props = { options: string[]; name: string };

const SelectField: FC<Props> = ({ options, name }) => {
  const { register } = useFormContext();

  return (
    <select {...register(name)} defaultValue="default">
      <option key="default" value="default" disabled hidden>
        Seleciona...
      </option>
      {options.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
