import classNames from 'classnames';
import { PropsWithChildren, ReactNode } from 'react';

export type RowProps = PropsWithChildren<{
  className?: string;
  icon: ReactNode;
  title?: string;
}>;

export const Row = ({ className, icon, title, children }: RowProps) => {
  return (
    <div
      className={classNames(
        'flex gap-6 items-center justify-between',
        className,
      )}
    >
      <div className="flex gap-1 flex-col items-center w-[90px] text-center text-sm">
        {icon}
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};
