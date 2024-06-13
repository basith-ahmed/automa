import React, { Children } from 'react'

import SideBar from '@/components/SideBar'
import InfoBar from '@/components/InfoBar'

type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <SideBar />
        <div className='w-full'>
            <InfoBar />
            {props.children}
        </div>
    </div>
  )
}

export default Layout