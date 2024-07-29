"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { data } from "./data"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScanEye } from "lucide-react"
import Image from "next/image"

const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCategories, setFilteredCategories] = useState(data.categories)
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSearchQuery = useDebounce(searchQuery, 400)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    setIsLoading(true)
    const timeoutId = setTimeout(() => {
      const newFilteredCategories = data.categories
        .map((category) => {
          const filteredApplications = category.applications.filter((app) =>
            app.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
          )

          return {
            ...category,
            applications: filteredApplications,
          }
        })
        .filter((category) => category.applications.length > 0)

      setFilteredCategories(newFilteredCategories)
      setIsLoading(false)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [debouncedSearchQuery])
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex items-center justify-between w-[100%] px-12 h-16 border-b-2  fixed top-0 z-10 bg-white">
        <div>
          <Image
            src="/images/GleafinkLogo.png"
            alt="text"
            width={110}
            height={60}
          />
        </div>
        <div>Gleafink Console</div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className=" flex flex-col items-end w-3/4 py-4 mt-16">
        <div className="w-60">
          <Input
            placeholder="Filter Services"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col items-start justify-center  rounded-md p-3 mt-3  w-[100%]">
            {filteredCategories.map((item) => (
              <div key={item.name} className="w-[100%] mb-4">
                <div className="flex justify-center items-center gap-4">
                  <h4 className="text-nowrap pr-2 text-md font-semibold">
                    {item.name}
                  </h4>
                  <div className="w-[100%] bg-black h-[0.5px] border-black"></div>
                </div>
                <div className="flex gap-6 py-4   my-2">
                  {item.applications.map((item, index) => (
                    <Card
                      key={index}
                      className="w-64 flex items-center cursor-pointer border-none shadow-md"
                    >
                      <CardHeader>
                        <div className="flex gap-1">
                          {item.icon}
                          <CardTitle className="text-md font-light">
                            {item.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
