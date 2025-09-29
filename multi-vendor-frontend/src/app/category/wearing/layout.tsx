import { DynamicNavigationMenu } from '@/components/global/DynamicNavigationMenu/DynamicNavigationMenu'
import { wearing } from '@/Static-Data/NavBar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' flex flex-col container mx-auto'>
        <div className=' w-full mt-2  pb-2 flex justify-center items-center'>

        <DynamicNavigationMenu items={wearing}/>
        </div>
        {children}

    </div>
  )
}

export default layout