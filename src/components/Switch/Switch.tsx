import { Switch as HeadlessSwitch } from '@headlessui/react';
import classNames from 'classnames';

export type SwitchProps = {
  className?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={classNames(
        'group relative flex h-7 w-14 cursor-pointer rounded-full bg-buttonBgSecondary p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-buttonBgSecondary',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </HeadlessSwitch>
  );
};
