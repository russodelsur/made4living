import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={"https://made4living.co.uk/"+url} />
    </Helmet>
);

export default SEO;