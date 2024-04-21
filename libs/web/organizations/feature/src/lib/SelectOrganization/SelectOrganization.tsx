'use client';

import { Button, DropdownMenuCheckboxItem } from '@promptus/web-shared-ui';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from '@promptus/web-shared-ui';
import styles from './SelectOrganization.module.scss';
import React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

/* eslint-disable-next-line */
export interface SelectOrganizationProps {}

export function SelectOrganization(props: SelectOrganizationProps) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className={styles['container']}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">halil sallabas's organization</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                halil sallabas's organization
              </DropdownMenuCheckboxItem>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLabel>Projects</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  <span>Test</span>
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            ozkan canli's organization
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SelectOrganization;
