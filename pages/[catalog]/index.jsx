import React, {useState, useEffect} from 'react'
import * as Agent from "../../api/agent"
import Head from "next/head"
 
import Subcategory from '../../components/categoruPage/subcategory';

function Index ({ data }) {
  console.log(data, 'dataaa');


const [childs, setChilds] = useState([])
 
  useEffect(() => {
    const childTaker = async () => {
      const childsData = await Agent.general.getChilds(data.id)
       setChilds(childsData)
    }
    childTaker()
  }, [])
  
  
  console.log(childs, 'childs');
  
  
   return (
    <>
      <Head>
    <meta charset="utf-8" />
    <meta name="description" content={data.title} />
    <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
    <title>{data.title}</title>
    <meta name="robots" content="noindex, nofollow" />
      </Head>
 
 <br />
 <br />
 <br />
       <div className="block-categories__list">
               {childs.map((child, index)=> <div key={index} className="block-categories__item category-card category-card--layout--classic">
                  <div className="category-card__body">
                    <div className="category-card__image">
              
                    </div>
                    <div className="category-card__content">
                      <div className="category-card__name">
                        <a href="#">{child.fields.title}</a>
                     </div>
                     
                     {
                       <Subcategory pm={child.pk}/>
}
     
                      <div className="category-card__all">
                       </div>
                      <div className="category-card__products"> 572 Products </div>
                    </div>
                  </div>
                </div> )  }
               
  
              </div>








    </>
  )
}

export default Index

 
export async function getStaticProps(context) {
  const cate = context.params.catalog
 
  const contentresponse = await Agent.general.getCategories()
 const category= contentresponse.results.find((res)=>res.title==cate)
   return {
    props: { data: category },
  };
}

export async function getStaticPaths() {
  const productsResponse = await Agent.general.getCategories();
  const path = productsResponse.results.map((product) => {
 
  return {params: {
     catalog: `${product.title}`
     }}
  })
   return {
    paths:path,
    fallback: false,
  };

}