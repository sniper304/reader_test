import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { TopBar, TopBarProps } from '../TopBar';

export type PageLayoutProps = PropsWithChildren<{
  className?: string;
  topBarProps?: TopBarProps;
}>;

export const PageLayout = ({
  children,
  className,
  topBarProps = {},
}: PageLayoutProps) => {
  return (
    <div
      className={classNames(
        'w-screen max-w-screen h-screen max-h-screen flex flex-col',
        className,
      )}
    >
      <TopBar {...topBarProps} />
      <main className="flex flex-col overflow-y-auto min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] py-8 px-4 sm:py-[56px] sm:px-8">
        {children}
      </main>
    </div>
  );
};
