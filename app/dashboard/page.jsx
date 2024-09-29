import { Button } from '@/components/ui/button'
import React from 'react'

function Dashboard() {
  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-violet-700'>Dashboard</h2>
        <Button variants ="secondary"> + Create New </Button>
      </div>
    </div>
  )
}

export default Dashboard