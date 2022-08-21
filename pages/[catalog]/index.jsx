import React, {useState, useEffect} from 'react'
import * as Agent from "../../api/agent"
import Head from "next/head"
import Subcategory from '../../components/categoruPage/subcategory';
import Link from 'next/link';
function Index ({ data }) {
 

const [childs, setChilds] = useState([])
 
  useEffect(() => {
    const childTaker = async () => {
      const childsData = await Agent.general.getChilds(data.id)
       setChilds(childsData)
    }
    if(data)
    childTaker()
  }, [data])
    
  
  return (
     <>
 
    { data && <>
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
                        <Link href={`/filter/child-${child.pk}/${child.fields.title.replace(/#| /g,'-')}`}>{child.fields.title}</Link>
                     </div>
                      {
                       <Subcategory pm={child.pk}/>
  }
                       <div className="category-card__all">
                       </div>
                      <div className="category-card__products"> 572 Products </div>
                    </div>
                  </div>
                </div> )}
                </div>
 
      </>}
      </>
  )
}

export default Index

// burda evvala bir bax gor eyni apini cagirmiya bilirsen
 
export async function getStaticProps(context) {
  const cate = context.params.catalog
 
  const contentresponse = await Agent.general.getCategories()
 const category= contentresponse.find((res)=>res.slug==cate)
   return {
    props: { data: category },
  };
}





export async function getStaticPaths ({ locales }) {
 

  const productsResponse = await Agent.general.getCategories();
  const pathMock = productsResponse.map((product) => {
   return {params: {
     catalog: `${product.slug}`
     }}
  })

const path=[]

  locales.forEach(element => {
    productsResponse.map((product) => {
      path.push({params: {
        catalog: `${product.slug.replace(/#| /g,'-')}`,
       
      },
      locale:element
      })
    })
  });

  console.log(path, 'pathhh');

     return {
    paths:path,
    fallback: false
  };

}