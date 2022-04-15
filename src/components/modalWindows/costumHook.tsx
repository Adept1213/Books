import { ChangeEvent, useCallback, useState } from "react";

export default function useValue(initialState: string) {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
}
