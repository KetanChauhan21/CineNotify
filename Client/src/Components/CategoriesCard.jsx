import React, { useEffect } from 'react'

const CategoriesCard = () => {
  useEffect(() => {
    console.log("component mount")
    return () => {
      console.log("Component Unmount")
    }
  }, [])
  console.log("good")
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        this is <span className="text-red-600">Categories Card</span>
      </h1>
    </div>
  )
}

export default CategoriesCard
