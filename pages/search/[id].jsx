import React from 'react'
import Search from "../../components/search"
import { useRouter } from 'next/router';

function Index () {
    const params = useRouter()
    // console.log(params.query, 'params555');

  return (
 <Search/>
  )
}

export default Index