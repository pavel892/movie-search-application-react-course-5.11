'use client';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import InputComponent from '@/components/Input';
import { useState } from 'react';

export default function TabsComponent() {
  const [currentTab, setCurrentTab] = useState<'tab1' | 'tab2'>('tab1');

  const onChange = (key: string) => {
    if (key === 'tab2') {
      setCurrentTab('tab2');
    } else {
      setCurrentTab('tab1');
    }
  };

  const items: TabsProps['items'] = [
    {
      key: 'tab1',
      label: 'Search',
    },
    {
      key: 'tab2',
      label: 'Rated',
    },
  ];
  return (
    <>
      <Tabs
        style={{ fontFamily: 'var(--font-inter)' }}
        centered={true}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />

      <div className="flex justify-center">
        <div className="w-[388px] md:w-[92%] lg:w-[988px]">{currentTab === 'tab1' && <InputComponent />}</div>
      </div>
    </>
  );
}
