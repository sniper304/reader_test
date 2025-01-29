import BackArrowIcon from '@/assets/BackArrowIcon';
import classNames from 'classnames';

export type FontSelectProps = {
  className?: string;
  selectedValue: string;
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
};

export const FontSelect = ({
  className,
  selectedValue,
  options = [],
  onChange,
}: FontSelectProps) => {
  const currentIndex = options?.findIndex(
    (option) => option.value === selectedValue,
  );
  const isFirstIndex = currentIndex === 0;
  const isLastIdex = currentIndex === options.length - 1;

  const onPreviousButtonClick = () => {
    if (isFirstIndex || !onChange) return;

    onChange(options[currentIndex - 1].value);
  };

  const onNextButtonClick = () => {
    if (isLastIdex || !onChange) return;

    onChange(options[currentIndex + 1].value);
  };

  return (
    <div
      className={classNames(
        'flex row w-[212px] h-[42px] items-center justify-between px-2',
        'bg-buttonBgSecondary border border-solid border-borderSecondary rounded-xl text-foreground',
        className,
      )}
    >
      <div
        onClick={onPreviousButtonClick}
        className={classNames(
          'cursor-pointer group',
          isFirstIndex && '!cursor-not-allowed',
        )}
      >
        <BackArrowIcon
          className={classNames(
            'group-hover:text-buttonBgPrimary',
            isFirstIndex && 'text-disabled group-hover:text-disabled',
          )}
        />
      </div>
      <p className="text-xs">{selectedValue}</p>
      <div
        onClick={onNextButtonClick}
        className={classNames(
          'cursor-pointer group rotate-180',
          isLastIdex && '!cursor-not-allowed',
        )}
      >
        <BackArrowIcon
          className={classNames(
            'group-hover:text-buttonBgPrimary',
            isLastIdex && 'text-disabled group-hover:text-disabled',
          )}
        />
      </div>
    </div>
  );
};
