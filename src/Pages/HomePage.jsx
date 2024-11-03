import React, { useEffect, useState } from "react"
import { Input } from "antd"
import { data } from "../constants/data"
import TopHeader from "../components/TopHeader"
import IndividualCard from "../components/IndividualCard"

const useDebounce = (value, delay) => {
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
    <>
      <TopHeader />
      <div className="content-container">
        <div className="content-filter-input">
          <Input
            type="text"
            size="large"
            placeholder="Search Products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="products-grouping">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item) => (
                <div key={item.name} className="w-[100%] mb-4">
                  <div className="group-title">
                    <h4 className="group-title-name">{item.name}</h4>
                    <div className="dividing-border"></div>
                  </div>
                  <div className="grouping-cards">
                    {item.applications.map((item, index) => (
                      <IndividualCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
