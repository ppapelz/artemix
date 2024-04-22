'use client';

import { Button, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@promptus/web-shared-ui';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@promptus/web-shared-ui';
import styles from './SelectOrganization.module.scss';
import React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';
import { GetAccountOrgsQuery } from '@promptus/web/shared/data-access/server';

type Checked = DropdownMenuCheckboxItemProps['checked'];

/* eslint-disable-next-line */
export interface SelectOrganizationProps {
  data: GetAccountOrgsQuery['getOrganizationsByAccountID'];
}

export function SelectOrganization(props: SelectOrganizationProps) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  // console.log(props.data);

  const [position, setPosition] = React.useState("bottom")

  return (
    <div className={styles['container']}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link">
            <span className="mr-3">halil sallabas's organization</span>
            <ChevronsUpDown></ChevronsUpDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuSub> */}
            <DropdownMenuRadioGroup
            >
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>Projects</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup>
                      <DropdownMenuRadioItem value="test1">Top</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="test2">Bottom</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="test3">Right</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>

              </DropdownMenuSub>

              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            {/* {props.data &&
              props.data.map((org) => (
                <DropdownMenuSub key={org.id}>
                  {org.projects.length ? (
                    <>
                      <DropdownMenuSubTrigger>
                        <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                          {org.name}
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuLabel>Projects</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {org.projects &&
                            org.projects.map((project) => (
                              <DropdownMenuCheckboxItem key={project.id}>
                                <span>{project.name}</span>
                              </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </>
                  ) : (
                    <DropdownMenuCheckboxItem
                    // checked={showStatusBar}
                    // onCheckedChange={setShowStatusBar}
                    >
                      {org.name}
                    </DropdownMenuCheckboxItem>
                  )}
                </DropdownMenuSub>
              ))} */}

            {/* <DropdownMenuSubTrigger>
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
            </DropdownMenuPortal> */}


          {/* </DropdownMenuSub> */}


          {/* <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            ozkan canli's organization
          </DropdownMenuCheckboxItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SelectOrganization;
