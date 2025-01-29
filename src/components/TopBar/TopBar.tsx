'use client';

import { ReactNode } from 'react';
import classNames from 'classnames';
import BackArrowIcon from '@/assets/BackArrowIcon';
import { useRouter } from 'next/navigation';

export type TopBarProps = {
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  className?: string;
  hideBackButton?: boolean;
};

export const TopBar = ({
  leftNode,
  rightNode,
  className,
  hideBackButton = false,
}: TopBarProps) => {
  const router = useRouter();

  const onBackButtonClick = () => {
    router.back();
  };

  return (
    <div
      className={classNames(
        'flex justify-between h-[56px] sm:h-[64px] bg-white items-center p-4 sm:pt-[18px] sm:pb-[22px] sm:px-8 shadow-default',
        'bg-background text-foreground dark:text-foreground dark:bg-headerBackground',
        className,
      )}
      id="headerTopBar"
    >
      <div className="flex gap-2">
        <div
          onClick={onBackButtonClick}
          className={classNames('cursor-pointer group', {
            hidden: hideBackButton,
          })}
        >
          <BackArrowIcon className="group-hover:text-buttonBgPrimary" />
        </div>
        {leftNode}
      </div>
      {rightNode && <div>{rightNode}</div>}
    </div>
  );
};
