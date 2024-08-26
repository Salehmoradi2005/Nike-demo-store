 import DefaultLayout from "@/layouts/default";
import React from 'react';
import { ArrowUpOutlined,CiCircleFilled, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import IMG from '../../public/air-jordan-1-mid-womens-shoes-FfLktz.png'
import Product from "@/components/Product";
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'size',
    icon: <ArrowUpOutlined />,
    children: [
          { key: '1', label: '8' },
          { key: '2', label: '9' },
          { key: '3', label: '10' },
          { key: '4', label: '11' },
          { key: '5', label: '12' },
          ,
    ],
  },
  {
    key: 'sub2',
    label: 'Color',
    icon: <CiCircleFilled />,
    children: [
      { key: '5', label: 'Option 5' ,className: "text-yellow-500"},
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout >
      <div className="flex-row  sm:flex w-full sm:gap-2 relative h-auto justify-center">



        <div className="w-1/3 h-max flex justify-center mt-10 sm:sticky" style={{position:'-webkit-sticky' , top : 80
        }}>
          <Menu
          className="sm:block hidden"
            
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </div>




        <div className="w-full h-max flex flex-wrap justify-left gap-2 ">
          <Product  img={IMG} name="Air Jordan max" price={"200"} rating={"4"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product img={IMG} name="Air Jordan max" price={"200"} />
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product img={IMG} name="Air Jordan max" price={"200"} />
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product img={IMG} name="Air Jordan max" price={"200"} />
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product  img={IMG} name="Air Jordan max" price={"200"}/>
          <Product img={IMG} name="Air Jordan max" price={"200"} />
        </div>
      </div>
    </DefaultLayout>
  );
}
