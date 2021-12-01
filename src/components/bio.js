/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Bio = () => {
   const data = useStaticQuery(graphql`
     query BioQuery {
       site {
         siteMetadata {
           author {
             name
             summary
           }
           social {
             twitter
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
   const social = data.site.siteMetadata?.social
 
   return (
     <div className="columns">
       <div className="column is-one-fifth is-offset-one-third">
       <StaticImage
         className="image is-rounded"
         layout="fixed"
         formats={["AUTO", "WEBP", "AVIF"]}
         src="../images/q-profile-pic.jpg"
         width={50}
         height={50}
         quality={95}
         alt="Profile picture"
         imgStyle={{
           borderRadius: `50%`,
         }}
       />
       </div >
       <div className='column is-one-third'> 
       {author?.name && (
         <p >
           Written by <strong>{author.name}</strong> {author?.summary || null}
           {` `}
           <a href={`https://twitter.com/${social?.twitter || ``}`}>
             he's bad at twitter
           </a>
         </p>
         
       )}</div>
     </div>
   )
 }
 
 export default Bio
 