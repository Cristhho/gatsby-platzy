import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import { SEO, Jumbo } from "../components"

export const query = graphql`
		query GET_DESCRIPTION{
	  allSite {
	    edges {
	      node {
	        siteMetadata {
	          description
	        }
	      }
	    }
	  }
	}
`

const Button = styled.button`
	width: 8rem;
	background-color: #98ca3f;
	color: ${props => props.color};
	border: none;
	border-radius: 10px;
	&:hover{
		transform: scale(1.3);
	}
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color="grey">Comprar</Button>
  </>
)

export default IndexPage
