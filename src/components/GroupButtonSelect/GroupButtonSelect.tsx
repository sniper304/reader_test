import classNames from 'classnames';

export type GroupButtonSelectProps = {
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
  className?: string;
  selectedValue?: string;
  showActiveButton?: boolean;
};

const BUTTON_VARIANTS = {
  primary:
    'bg-buttonBgPrimary border border-solid border-borderPrimary rounded-xl text-background dark:text-foreground',
  secondary:
    'bg-buttonBgSecondary border border-solid border-borderSecondary rounded-xl text-foreground hover:bg-buttonBgPrimary hover:text-background dark:hover:text-foreground',
};

export const GroupButtonSelect = ({
  options = [],
  onChange,
  className,
  selectedValue,
  showActiveButton = true,
}: GroupButtonSelectProps) => {
  const onOptionClick = (value: string) => () => {
    if (!onChange) return;

    onChange(value);
  };

  return (
    <div className={classNames('flex row', className)}>
      {options.map(({ label, value }, index) => {
        const isFirstIndex = index === 0;
        const isLastIdex = index === options.length - 1;

        return (
          <button
            key={value}
            className={classNames(
              isFirstIndex && 'rounded-r-none',
              isLastIdex && 'rounded-l-none border-l-0',
              'py-3 px-2 text-xs rounded-full w-[106px]',
              showActiveButton && value === selectedValue
                ? BUTTON_VARIANTS.primary
                : BUTTON_VARIANTS.secondary,
            )}
            onClick={onOptionClick(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
