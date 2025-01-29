'use client';

import { useState } from 'react';
import TableOfContentIcon from '@/assets/TableOfContentIcon';
import AddLibIcon from '@/assets/AddLibIcon';
import SettingsIcon from '@/assets/SettingsIcon';
import MoreIcon from '@/assets/MoreIcon';
import { BottomDrawer } from '../BottomDrawer';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { BookReaderSettings } from '../BookReaderSettings';

export const BookReaderRightTopBar = () => {
  const baseIconButtonClassname = 'cursor-pointer group';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-[24px] items-center justify-center">
      <LanguageSwitcher />

      <div className={baseIconButtonClassname}>
        <TableOfContentIcon className="group-hover:text-buttonBgPrimary" />
      </div>

      <div className={baseIconButtonClassname}>
        <AddLibIcon className="group-hover:text-buttonBgPrimary" />
      </div>

      <div className={baseIconButtonClassname}>
        <button
          className="flex items-center"
          type="button"
          onClick={() => setIsOpen((prevValue) => !prevValue)}
        >
          <SettingsIcon className="group-hover:text-buttonBgPrimary" />
        </button>
        <BottomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <BookReaderSettings />
        </BottomDrawer>
      </div>

      <div className={baseIconButtonClassname}>
        <MoreIcon className="group-hover:text-buttonBgPrimary" />
      </div>
    </div>
  );
};
