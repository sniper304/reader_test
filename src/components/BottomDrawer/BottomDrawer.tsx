import CloseIcon from '@/assets/CloseIcon';
import React, { FC, PropsWithChildren } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

type BottomDrawerProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const BottomDrawer: FC<BottomDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const closeDrawer = () => onClose();

  return (
    <BottomSheet
      open={isOpen}
      onDismiss={closeDrawer}
      blocking={false}
      header={
        <div className="w-full flex items-end justify-end">
          <div
            className="cursor-pointer group bg-buttonBgSecondary w-[24px] rounded-xl"
            onClick={closeDrawer}
          >
            <CloseIcon className="group-hover:text-buttonBgPrimary" />
          </div>
        </div>
      }
    >
      {children}
    </BottomSheet>
  );
};
