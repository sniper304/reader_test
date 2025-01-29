import classNames from 'classnames';

export type TopBarHeaderProps = {
  title: string;
  className?: string;
};

export const TopBarHeader = ({ title, className }: TopBarHeaderProps) => {
  return (
    <div className={classNames('hidden sm:flex', className)}>
      <p className="font-medium">{title}</p>
    </div>
  );
};
