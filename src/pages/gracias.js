import React from 'react';
import {Link} from 'gatsby';

import {SEO} from '../components';
import {Button, Purchase} from '../styles/components';

const gracias = () => {
  return (
    <div>
    	<SEO title="Compra exitosa" />
    	<Purchase>
    		<h2>Compra exitosa</h2>
    		<p>Espero que disfrutes tu swag, lucelo con orgullo</p>
    		<p>¡Te esperamos de vuelta, no pares de aprender!</p>
    		<span rol="img" aria-label="emoji">💚</span>
    		<Link to="/">
    			<Button>Volver al catalogo</Button>
    		</Link>
    	</Purchase>
    </div>
  );
};

export default gracias;
