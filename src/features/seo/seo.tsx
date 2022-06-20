import {Helmet} from "react-helmet";

interface iSEO {
  title: string;
  description: string;
  keywords: string;
}

const SEO = ({ title, description, keywords }: iSEO) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} ></meta>
      <meta name="keywords" content={keywords} ></meta>
      <meta name="robots" content="index, follow" ></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" ></meta>
      <meta name="language" content="English"></meta>
    </Helmet>
  );
};

export default SEO;
